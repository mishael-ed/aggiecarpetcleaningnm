const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const buildDir = path.join(projectRoot, 'build');
const templatePath = path.join(buildDir, 'index.html');
const assetManifestPath = path.join(buildDir, 'asset-manifest.json');

const assetManifest = JSON.parse(fs.readFileSync(assetManifestPath, 'utf8'));
const manifestFiles = assetManifest.files || {};
const assetPathByBasename = new Map(
  Object.entries(manifestFiles).map(([sourcePath, outputPath]) => [path.basename(sourcePath), outputPath])
);

require('@babel/register')({
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  extensions: ['.js', '.jsx'],
  ignore: [/node_modules/]
});

const ignoreAsset = (module, filename) => {
  module.exports = assetPathByBasename.get(path.basename(filename)) || filename;
};

require.extensions['.css'] = () => null;
require.extensions['.scss'] = () => null;
require.extensions['.sass'] = () => null;
require.extensions['.less'] = () => null;
require.extensions['.png'] = ignoreAsset;
require.extensions['.jpg'] = ignoreAsset;
require.extensions['.jpeg'] = ignoreAsset;
require.extensions['.gif'] = ignoreAsset;
require.extensions['.svg'] = ignoreAsset;
require.extensions['.webp'] = ignoreAsset;

const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { StaticRouter } = require('react-router');
const AppRoutes = require('../src/AppRoutes').default;
const { prerenderRoutes } = require('../src/AppRoutes');
const SeoContext = require('../src/Components/SeoContext').default;

const escapeHtml = (value) => {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

const replaceOrInsertTag = (html, pattern, replacement, fallbackTag) => {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace('</head>', `${fallbackTag}</head>`);
};

const injectSeoTags = (html, seo) => {
  let nextHtml = html;

  if (seo.title) {
    nextHtml = nextHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  }

  if (seo.description) {
    nextHtml = replaceOrInsertTag(
      nextHtml,
      /<meta[^>]+name="description"[^>]*>/i,
      `<meta name="description" content="${escapeHtml(seo.description)}">`,
      `<meta name="description" content="${escapeHtml(seo.description)}">`
    );
  }

  if (seo.keywords) {
    nextHtml = replaceOrInsertTag(
      nextHtml,
      /<meta[^>]+name="keywords"[^>]*>/i,
      `<meta name="keywords" content="${escapeHtml(seo.keywords)}">`,
      `<meta name="keywords" content="${escapeHtml(seo.keywords)}">`
    );
  }

  if (seo.canonicalUrl) {
    nextHtml = replaceOrInsertTag(
      nextHtml,
      /<link[^>]+rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${escapeHtml(seo.canonicalUrl)}">`,
      `<link rel="canonical" href="${escapeHtml(seo.canonicalUrl)}">`
    );

    nextHtml = replaceOrInsertTag(
      nextHtml,
      /<meta[^>]+property="og:url"[^>]*>/i,
      `<meta property="og:url" content="${escapeHtml(seo.canonicalUrl)}">`,
      `<meta property="og:url" content="${escapeHtml(seo.canonicalUrl)}">`
    );
  }

  if (seo.title) {
    nextHtml = replaceOrInsertTag(
      nextHtml,
      /<meta[^>]+property="og:title"[^>]*>/i,
      `<meta property="og:title" content="${escapeHtml(seo.title)}">`,
      `<meta property="og:title" content="${escapeHtml(seo.title)}">`
    );
  }

  if (seo.description) {
    nextHtml = replaceOrInsertTag(
      nextHtml,
      /<meta[^>]+property="og:description"[^>]*>/i,
      `<meta property="og:description" content="${escapeHtml(seo.description)}">`,
      `<meta property="og:description" content="${escapeHtml(seo.description)}">`
    );
  }

  nextHtml = replaceOrInsertTag(
    nextHtml,
    /<meta[^>]+property="og:type"[^>]*>/i,
    '<meta property="og:type" content="website">',
    '<meta property="og:type" content="website">'
  );

  if (seo.schema) {
    const schemaTag = `<script type="application/ld+json">${JSON.stringify(seo.schema)}</script>`;
    nextHtml = nextHtml.replace('</head>', `${schemaTag}</head>`);
  }

  return nextHtml;
};

const templateHtml = fs.readFileSync(templatePath, 'utf8');

prerenderRoutes.forEach((route) => {
  const seo = {};
  const markup = renderToStaticMarkup(
    React.createElement(
      SeoContext.Provider,
      { value: seo },
      React.createElement(
        StaticRouter,
        { location: route },
        React.createElement(AppRoutes)
      )
    )
  );

  let pageHtml = templateHtml.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  pageHtml = injectSeoTags(pageHtml, seo);

  const outputPath = route === '/'
    ? path.join(buildDir, 'index.html')
    : path.join(buildDir, route.replace(/^\//, ''), 'index.html');

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pageHtml, 'utf8');
});

console.log(`Prerendered ${prerenderRoutes.length} routes.`);
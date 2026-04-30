import React from 'react';
import SeoContext from './SeoContext';

const SITE_URL = 'https://aggiecarpetcleaning.com';

const PageSeo = ({ title, description, canonicalPath, keywords, schema }) => {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const seoContext = React.useContext(SeoContext);

  if (seoContext) {
    seoContext.title = title;
    seoContext.description = description;
    seoContext.canonicalUrl = canonicalUrl;
    seoContext.keywords = keywords;
    if (schema) {
      seoContext.schema = schema;
    }
  }

  React.useEffect(() => {
    document.title = title;

    const updateMeta = (attribute, key, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    const updateLink = (rel, href) => {
      let element = document.head.querySelector(`link[rel="${rel}"]`);

      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }

      element.setAttribute('href', href);
    };

    updateMeta('name', 'description', description);

    if (keywords) {
      updateMeta('name', 'keywords', keywords);
    }

    updateMeta('property', 'og:type', 'website');
    updateMeta('property', 'og:title', title);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:url', canonicalUrl);
    updateLink('canonical', canonicalUrl);

    if (schema) {
      const scriptId = 'page-schema-ld';
      let scriptEl = document.getElementById(scriptId);
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.type = 'application/ld+json';
        scriptEl.id = scriptId;
        document.head.appendChild(scriptEl);
      }
      scriptEl.text = JSON.stringify(schema);
    }
  }, [canonicalUrl, description, keywords, schema, title]);

  return null;
};

export default PageSeo;
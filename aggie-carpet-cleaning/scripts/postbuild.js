const { execSync } = require('child_process');

const isVercel = Boolean(process.env.VERCEL);

if (isVercel) {
  console.log('Skipping react-snap during Vercel build. Use npm run build:seo for prerendered local builds.');
  process.exit(0);
}

execSync('npx react-snap', { stdio: 'inherit' });
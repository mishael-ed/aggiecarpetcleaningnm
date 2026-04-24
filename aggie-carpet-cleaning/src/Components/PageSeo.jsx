import React from 'react';

const SITE_URL = 'https://aggiecarpetcleaning.com';

const PageSeo = ({ title, description, canonicalPath, keywords }) => {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

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
  }, [canonicalUrl, description, keywords, title]);

  return null;
};

export default PageSeo;
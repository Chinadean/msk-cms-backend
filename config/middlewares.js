module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // Enable the download of the Monaco editor
          // from cdn.jsdelivr.net.
          'connect-src': ['\'self\'', 'https:'],
          'img-src': ['\'self\'', 'data:', 'blob:', process.env.STORAGE_URL, process.env.STORAGE_CDN_URL],
          'media-src': ['\'self\'', 'data:', 'blob:', process.env.STORAGE_URL, process.env.STORAGE_CDN_URL],
          'script-src': ['\'self\'', 'cdn.jsdelivr.net', 'blob:'],
          upgradeInsecureRequests: null,
          'frame-ancestors': null,
        },
      },
      frameguard: false,
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      includeUnparsed: true
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'plugin::request-id.request-id',
];

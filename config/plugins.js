module.exports = ({ env }) => ({
  search: {
    enabled: true,
    config: {
      provider: 'algolia',
      providerOptions: {
        apiKey: env('ALGOLIA_PROVIDER_ADMIN_API_KEY'),
        applicationId: env('ALGOLIA_PROVIDER_APPLICATION_ID'),
      },
      contentTypes: [{ name: 'api::page.page' }, { name: 'api::global.global' }, { name: 'api::lead-form-submission.lead-form-submission' }],
    },
  },
  email: {
    enabled: true,
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'donotreply@msk.org.au',
        defaultReplyTo: 'workwise@msk.org.au',
      },
    },
  },
  graphql: {
    enabled: true
  },
  "import-export-entries": {
    enabled: true,
  },
  navigation: {
    enabled: true,
  },
  "request-id": {
    enabled: true,
  },
  seo: {
    enabled: true
  },
  sitemap: {
    enabled: true
  }
});


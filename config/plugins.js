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
  upload: {
    config: {
      provider: 'strapi-provider-upload-azure-storage',
      providerOptions: {
        account: env('STORAGE_ACCOUNT'),
        accountKey: env('STORAGE_ACCOUNT_KEY'),
        serviceBaseURL: env('STORAGE_URL'),
        containerName: env('STORAGE_CONTAINER_NAME'),
        cdnBaseURL: env('STORAGE_CDN_URL'),
        defaultPath: 'workplace-tool',
        maxConcurrent: 10
      }
    }
  },
  graphql: {
    enabled: true
  },
  'custom-api': {
    enabled: true,
  },
  'import-export-entries': {
    enabled: true,
  },
  publisher: {
    enabled: true,
  },
  navigation: {
    enabled: true,
  },
  'request-id': {
    enabled: true,
  },
  seo: {
    enabled: true
  },
  sitemap: {
    enabled: true
  }
});


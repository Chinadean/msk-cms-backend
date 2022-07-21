import AuthLogo from './extensions/msk-logo.png';
import MenuLogo from './extensions/msk-logo.png';
import favicon from './extensions/favicon.ico';
import HomePageLogo from './extensions/homepage-logo.png';


export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    homepage: {
      Logo: HomePageLogo
    },

    // Add a new locale, other than 'en'
    locales: ['fr', 'de'],

    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
      defaultMessage: 'Workwise Dashboard'
    },
    // Override or extend the theme
    theme: {
      colors: {
        background: '#F3F9FD',
        alternative100: '#F3F9FD',
        alternative200: '#DBECF8',
        alternative500: '#C4E0F4',
        alternative600: '#0c75af',
        alternative700: '#69B1E2',
        buttonNeutral0: '#F3F9FD',
        buttonPrimary500: '#2E90D1',
        buttonPrimary600: '#2980B9',
        danger100: '#fcecea',
        danger200: '#f5c0b8',
        danger500: '#ee5e52',
        danger600: '#d02b20',
        danger700: '#b72b1a',
        neutral10: '#ffffff',
        neutral100: '#ffffff',
        neutral1000: '#181826',
        neutral150: '#eaeaef',
        neutral200: '#dcdce4',
        neutral300: '#c0c0cf',
        neutral400: '#a5a5ba',
        neutral500: '#8e8ea9',
        neutral600: '#666687',
        neutral700: '#4a4a6a',
        neutral800: '#32324d',
        neutral900: '#212134',
        neutral0: '#F3F9FD',
        primary100: '#ECF5FB',
        primary200: '#A0CDEA',
        primary500: '#6AB0DE',
        primary600: '#2E90D1',
        primary700: '#2980B9',
        secondary100: '#F2F3FF',
        secondary200: '#AFB4D6',
        secondary500: '#3447cb',
        secondary600: '#161E57',
        secondary700: '#111742',
        success100: '#eafbe7',
        success200: '#c6f0c2',
        success500: '#5cb176',
        success600: '#328048',
        success700: '#2f6846',
        warning100: '#fdf4dc',
        warning200: '#fae7b9',
        warning500: '#f29d41',
        warning600: '#d9822f',
        warning700: '#be5d01',
      },
    },
    // Extend the translations
    translations: {
      fr: {
        'Auth.form.email.label': 'test',
        Users: 'Utilisateurs',
        City: 'CITY (FRENCH)',
        // Customize the label of the Content Manager table.
        Id: 'ID french',
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {},
};

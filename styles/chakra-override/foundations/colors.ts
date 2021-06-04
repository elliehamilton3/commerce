import { brandColors } from 'styles/colors'

export const colors = {
  // Basic utility colors
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#fff',

  ...brandColors,

  /**
   * All the colors below are included with Chakra, but also are mentioned
   * in their default component configurations.
   *
   * The neutral white/blacks/grays are OK as they are generally used to lighten
   * or darken something, but the other "utility" colors have been replaced
   * with bright pink so you won't ever use them in our site.
   *
   * Chakra comes with lots of other color grades, but they have been deleted
   * as they are not mentioned in their default component setups, so they would
   * only be used if someone explicitly chose to color something orange, say.
   *
   */

  whiteAlpha: {
    50: 'rgba(255, 255, 255, 0.04)',
    100: 'rgba(255, 255, 255, 0.06)',
    200: 'rgba(255, 255, 255, 0.08)',
    300: 'rgba(255, 255, 255, 0.16)',
    400: 'rgba(255, 255, 255, 0.24)',
    500: 'rgba(255, 255, 255, 0.36)',
    600: 'rgba(255, 255, 255, 0.48)',
    700: 'rgba(255, 255, 255, 0.64)',
    800: 'rgba(255, 255, 255, 0.80)',
    900: 'rgba(255, 255, 255, 0.92)',
  },

  blackAlpha: {
    50: 'rgba(0, 0, 0, 0.04)',
    100: 'rgba(0, 0, 0, 0.06)',
    200: 'rgba(0, 0, 0, 0.08)',
    300: 'rgba(0, 0, 0, 0.16)',
    400: 'rgba(0, 0, 0, 0.24)',
    500: 'rgba(0, 0, 0, 0.36)',
    600: 'rgba(0, 0, 0, 0.48)',
    700: 'rgba(0, 0, 0, 0.64)',
    800: 'rgba(0, 0, 0, 0.80)',
    900: 'rgba(0, 0, 0, 0.92)',
  },

  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923',
  },

  /**
   * Red is used by for error states in the following Chakra components:
   *  - checkbox
   *  - form
   *  - input
   *
   * Should we ever use these components on our site, we should re-theme them
   * with coral or grades thereof, as that is our designated error color.
   */
  red: {
    50: '#FF00FF',
    100: '#FF00FF',
    200: '#FF00FF',
    300: '#FF00FF',
    400: '#FF00FF',
    500: '#FF5258', // Updated this as its being used on the register page when elements are required.
    600: '#FF00FF',
    700: '#FF00FF',
    800: '#FF00FF',
    900: '#FF00FF',
  },

  /**
   * Blue is used as a default color in the following Chakra components:
   *  - checkbox
   *  - input
   *  - progress
   *  - slider
   *  - switch
   *  - tabs
   *
   * Should we ever use these components on our site, we should re-theme them
   * with a brand color, such as brandPrimary.
   */
  blue: {
    50: '#1F3554',
    100: '#1F3554',
    200: '#1F3554',
    300: '#1F3554',
    400: '#1F3554',
    500: '#1F3554',
    600: '#1F3554',
    700: '#1F3554',
    800: '#1F3554',
    900: '#1F3554',
  },

  /**
   * The following colors are grades for popular social networks. These are kept
   * in case they are useful, and will work with the built-in Chakra components.
   */
  linkedin: {
    50: '#E8F4F9',
    100: '#CFEDFB',
    200: '#9BDAF3',
    300: '#68C7EC',
    400: '#34B3E4',
    500: '#00A0DC',
    600: '#008CC9',
    700: '#0077B5',
    800: '#005E93',
    900: '#004471',
  },

  facebook: {
    50: '#E8F4F9',
    100: '#D9DEE9',
    200: '#B7C2DA',
    300: '#6482C0',
    400: '#4267B2',
    500: '#385898',
    600: '#314E89',
    700: '#29487D',
    800: '#223B67',
    900: '#1E355B',
  },

  messenger: {
    50: '#D0E6FF',
    100: '#B9DAFF',
    200: '#A2CDFF',
    300: '#7AB8FF',
    400: '#2E90FF',
    500: '#0078FF',
    600: '#0063D1',
    700: '#0052AC',
    800: '#003C7E',
    900: '#002C5C',
  },

  whatsapp: {
    50: '#e2f7f4',
    100: '#c3f0e9',
    200: '#a0e7dc',
    300: '#76dccd',
    400: '#43cfba',
    500: '#00BFA5',
    600: '#00ac92',
    700: '#009780',
    800: '#007d6a',
    900: '#005a4c',
  },

  twitter: {
    50: '#e5f4fd',
    100: '#c8e9fb',
    200: '#a8dcfa',
    300: '#83cdf7',
    400: '#57bbf5',
    500: '#1DA1F2',
    600: '#1a94da',
    700: '#1681bf',
    800: '#136b9e',
    900: '#0d4d71',
  },

  telegram: {
    50: '#e3f2f9',
    100: '#c5e4f3',
    200: '#a2d4ec',
    300: '#7ac1e4',
    400: '#47a9da',
    500: '#0088CC',
    600: '#007ab8',
    700: '#006ba1',
    800: '#005885',
    900: '#003f5e',
  },
}

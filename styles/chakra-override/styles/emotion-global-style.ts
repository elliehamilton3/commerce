import { css } from '@emotion/react'

export const emotionGlobalStyle = css`
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 200;
    src: local('Nunito Sans ExtraLight'), local('NunitoSans-ExtraLight'),
      url('/fonts/nunito-sans/nunito-sans-200.woff2') format('woff2'),
      url('/fonts/nunito-sans/nunito-sans-200.woff') format('woff');
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Nunito Sans Light'), local('NunitoSans-Light'),
      url('/fonts/nunito-sans/nunito-sans-300.woff2') format('woff2'),
      url('/fonts/nunito-sans/nunito-sans-300.woff') format('woff');
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Nunito Sans Regular'), local('NunitoSans-Regular'),
      url('/fonts/nunito-sans/nunito-sans-regular.woff2') format('woff2'),
      url('/fonts/nunito-sans/nunito-sans-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    src: local('Nunito Sans SemiBold'), local('NunitoSans-SemiBold'),
      url('/fonts/nunito-sans/nunito-sans-600.woff2') format('woff2'),
      url('/fonts/nunito-sans/nunito-sans-600.woff') format('woff');
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: italic;
    font-weight: 600;
    src: url('/fonts/nunito-sans/nunito-sans-600-italic.woff2') format('woff2'),
      url('/fonts/nunito-sans/nunito-sans-600-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Nunito Sans Bold'), local('NunitoSans-Bold'),
      url('/fonts/nunito-sans/nunito-sans-700.woff2') format('woff2'),
      url('/fonts/nunito-sans/nunito-sans-700.woff') format('woff');
  }

  @font-face {
    font-family: 'Nunito Sans';
    font-style: italic;
    font-weight: 700;
    src: url('/fonts/nunito-sans/nunito-sans-700-italic.woff2') format('woff2'),
      url('/fonts/nunito-sans/nunito-sans-700-italic.woff') format('woff');
  }
`

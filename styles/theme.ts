// import { DefaultTheme, css, SimpleInterpolation } from 'styled-components'
// import { any } from 'types'

export const borderRadius = '0.5rem'

const candideEmerald = '#345855'
const candidePrimary = '#1f3554'

export const colors = {
  berries: '#67668b',
  brightGreen: '#4CA375',
  candideEntityPlant: candideEmerald,
  candideBlue: candidePrimary, // not overwritten by entity theme :/
  candidePrimary,
  candideEmerald,
  candideGreen: '#9daa6e',
  candideGrey: '#5b626b',
  entities: {
    disease: candideEmerald,
    Disease: candideEmerald,
    howTos: candidePrimary,
    HowTos: candidePrimary,
    insect: candideEmerald,
    Insect: candideEmerald,
    plant: candideEmerald,
    Plant: candideEmerald,
    collection: candideEmerald,
    collections: candideEmerald,
    Collection: candideEmerald,
  },
  errorRed: '#D0011B',
  lightErrorRed: '#FEF2EE',
  midGrey: '#d6dde6',
  notSoLightGrey: '#F2F2F2',
  anotherRandomLightGray: '#e2e5e8',
  nearBlack: '#272d33',
  pageBackground: '#fbfbfb',
  racingGreen: '#1b2d2b',
  text: '#5c636c',
  cyan: '#4C8FA3',
  turquoise: '#26BAB1',
  darkTurquoise: '#038279',
  lightTurquoise: '#E6F4F5',
  unloadedContentBackgroundColor: '#eee',
  warningOrange: '#f87a54',
  white: '#ffffff',
  whiteSmoke: '#f8f8f8',
  wisteriaPurple: '#b35fa5',
}

export const grid = {
  gap: {
    s: '0.8rem',
    m: '1.6rem',
  },
}

export const icons: any = {
  s: '0.8rem',
  m: '1.6rem',
  l: '2.4rem',
  xl: '3.6rem',
  xxl: '4rem',
}

export const inner: any = {
  s: '4fr 6fr 4fr',
  m: '3fr 8fr 3fr',
  l: '2fr 10fr 2fr',
  xl: '1fr 12fr 1fr',
}

export const media: any = {
  xs: '320px',
  s: '768px',
  m: '992px',
  l: '1200px',
}

export const siteWidth = '128rem'

export const space: any = {
  xs: '0.4rem',
  s: '0.8rem',
  m: '1.6rem',
  l: '3.2rem',
  xl: '6.4rem',
  xxl: '8rem',
}

export const text: any = {
  xxs: '1rem',
  xs: '1.2rem',
  s: '1.6rem',
  m: '1.8rem',
  l: '2.4rem',
  xl: '3.6rem',
  xxl: '4.2rem',
}

export const fontFamily: string = '"Nunito Sans", sans-serif'

export const transition = {
  in: '300ms ease-in',
  out: '300ms ease-out',
}

interface SpacerInterface {
  [index: string]: any
  xs?: string
  s?: string
  m?: string
  l?: string
}

const setSpace = (breakpoint: string, size: string): string =>
  `@media (min-width: ${media[breakpoint]}) {margin-bottom: ${space[size]};}`

// const spacer = (props: SpacerInterface): SimpleInterpolation =>
//   css`
//     ${Object.keys(props).map((breakpoint) =>
//       setSpace(breakpoint, props[breakpoint])
//     )}
//   `

const theme: any = {
  borderRadius,
  colors,
  grid,
  icons,
  inner,
  media,
  siteWidth,
  space,
  // spacer,
  text,
  fontFamily,
  transition,
}

export default theme

import {
  BlueberryPng,
  PeaPng,
  RosePng,
} from 'images/illustrations/generated-image-index'
import { css, DefaultTheme } from 'styled-components'
import { NavBarPage, Region, StyleSizes } from 'types'

export const getNextSize = (size: string, scale: StyleSizes) => {
  switch (size) {
    case 'xs': {
      return scale.s
    }
    case 's': {
      return scale.m
    }
    case 'm': {
      return scale.l
    }
    case 'l': {
      return scale.xl
    }
  }
}

export const fadeIn = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 0.35s;
`
export const linkStyle = (theme: DefaultTheme, size: string) => css`
  color: ${theme.colors.candidePrimary};
  font-size: ${theme.text[size]};
  font-weight: 600;
  line-height: 1.5;
  text-decoration: underline;

  &:visited {
    color: ${theme.colors.candidePrimary};
  }

  @media (min-width: ${theme.media.m}) {
    font-size: ${getNextSize(size, theme.text)};
  }
`

export const getHeaderBackgroundImage = (
  region: Region,
  page: NavBarPage | null
) => {
  switch (page) {
    case 'discover':
    case 'places': {
      const image = region === Region.ZA ? BlueberryPng : RosePng

      return css`
        background: url(${image}) no-repeat top right;
      `
    }
    default: {
      return css`
        background: url(${PeaPng}) no-repeat top right;
      `
    }
  }
}

export const hideVisually = css`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const breakLongWords = css`
  word-break: break-word;
  overflow-wrap: break-word;
  word-wrap: break-word;
`

export const rounded = css`
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const elevated = css`
  box-shadow: 0 2px ${({ theme }) => theme.space.xs} 0 rgba(0, 0, 0, 0.08);
`

const elevatedWithAnimation = css`
  box-shadow: 0 2px ${({ theme }) => theme.space.xs} 0 rgba(0, 0, 0, 0.08);
  transition: ${({ theme }) => theme.transition.out};

  &:hover,
  &:focus {
    box-shadow: 0 3px ${({ theme }) => theme.space.s} 0 rgba(0, 0, 0, 0.16);
  }
`

export const paper = css`
  ${rounded}
  ${elevatedWithAnimation}
  background-color: white;
  overflow: hidden;
`

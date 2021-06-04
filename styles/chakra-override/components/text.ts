import { ComponentStyleConfig } from '@chakra-ui/react'

const Text: ComponentStyleConfig = {
  defaultProps: {
    size: 'md',
  },
  baseStyle: {
    fontFamily: 'body',
    fontWeight: 'normal',
  },
  sizes: {
    '2xl': { fontSize: '2xl' },
    xl: { fontSize: 'xl' },
    lg: { fontSize: 'lg' },
    md: { fontSize: 'md' },
    sm: { fontSize: 'sm' },
    xs: { fontSize: 'xs' },
  },
  variants: {
    allcaps: {
      textTransform: 'uppercase',
      letterSpacing: 'widest',
    },
  },
}

export default Text

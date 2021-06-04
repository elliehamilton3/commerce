import { ComponentStyleConfig } from '@chakra-ui/react'

const Heading: ComponentStyleConfig = {
  defaultProps: {
    size: 'xl',
  },
  baseStyle: {
    fontFamily: 'heading',
    fontWeight: 'semibold',
    lineHeight: 'shorter',
  },
  sizes: {
    '2xl': {
      fontSize: ['4xl', null, '5xl'],
    },
    xl: {
      fontSize: ['3xl', null, '4xl'],
    },
    lg: {
      fontSize: ['xl', null, '2xl'],
    },
    md: { fontSize: 'xl' },
    sm: { fontSize: 'md' },
    xs: { fontSize: 'sm' },
    '2xs': { fontSize: 'xs' },
  },
  variants: {
    allcaps: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: 'widest',
    },
  },
}

export default Heading

import { ComponentStyleConfig } from '@chakra-ui/react'

const Button: ComponentStyleConfig = {
  sizes: {
    lg: {
      height: 12,
      minWidth: 12,
      fontSize: 'lg',
      paddingX: 4,
    },
    md: {
      height: 10,
      minWidth: 10,
      fontSize: 'md',
      paddingX: 3,
    },
    sm: {
      height: 8,
      minWidth: 8,
      fontSize: 'sm',
      paddingX: 2,
    },
    xs: {
      height: 6,
      minWidth: 6,
      fontSize: 'xs',
      paddingX: 1,
    },
  },
  defaultProps: {
    variant: 'solid',
    size: 'md',
    colorScheme: 'brandBlue',
  },
  baseStyle: {
    lineHeight: '1.2',
    borderRadius: 'md',
    fontWeight: 'semibold',
    _focus: {
      boxShadow: 'outline',
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  },
  variants: {
    outline(props) {
      const { colorScheme: c } = props

      return {
        color: c,
        border: '1px solid',
        borderColor: 'currentColor',
        bg: 'transparent',
      }
    },

    solid(props) {
      const { colorScheme: c } = props

      if (c === 'white') {
        return {
          bg: 'white',
          color: 'brandBlue',
        }
      }

      return {
        bg: c,
        color: 'white',
      }
    },

    pill(props) {
      const pillPaddingX: Record<string, number | undefined> = {
        lg: 8,
        md: 6,
        sm: 4,
        xs: 3,
      }

      const { colorScheme: c } = props

      return {
        color: c,
        border: '1px solid',
        borderColor: 'currentColor',
        bg: 'transparent',
        borderWidth: '2px',
        borderRadius: 'full',
        fontWeight: 'bold',
        paddingX: pillPaddingX[props.size ? props.size : 'md'],
      }
    },
    pillSolid(props) {
      const pillPaddingX: Record<string, number | undefined> = {
        lg: 8,
        md: 6,
        sm: 4,
        xs: 3,
      }

      return {
        color: 'white',
        border: '1px solid',
        borderColor: 'brandBlue',
        bg: 'brandBlue',
        borderWidth: '2px',
        borderRadius: 'full',
        fontWeight: 'bold',
        paddingX: pillPaddingX[props.size ? props.size : 'md'],
      }
    },

    tallSolid(props) {
      return {
        display: 'flex',
        flexDirection: 'column',
        bg: props.colorScheme,
        border: '1px solid',
        borderColor: props.colorScheme,
        color: 'white',
        minHeight: '86px',
        minWidth: '86px',
      }
    },

    tallOutline(props) {
      return {
        display: 'flex',
        flexDirection: 'column',
        color: props.colorScheme,
        border: '1px solid',
        borderColor: 'currentColor',
        bg: 'transparent',
        minHeight: '86px',
        minWidth: '86px',
      }
    },

    link() {
      return {
        height: '2.5rem',
        padding: '0 12px',
      }
    },
  },
}

export default Button

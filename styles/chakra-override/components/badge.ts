import { getColor, mode, transparentize } from '@chakra-ui/theme-tools'
import { ComponentStyleConfig } from '@chakra-ui/react'

const Badge: ComponentStyleConfig = {
  defaultProps: {
    variant: 'subtle',
    colorScheme: 'gray',
  },
  baseStyle: {
    paddingX: 1,
    textTransform: 'uppercase',
    letterSpacing: 'widest',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold',
  },
  variants: {
    solid(props) {
      const { colorScheme: c, theme } = props
      const dark = transparentize(`${c}.500`, 0.6)(theme)
      return {
        bg: mode(`${c}.500`, dark)(props),
        color: mode(`white`, `whiteAlpha.800`)(props),
      }
    },

    subtle(props) {
      const { colorScheme: c } = props
      return {
        bg: mode(`${c}.100`, `${c}.800`)(props),
        color: mode(`${c}.800`, `${c}.200`)(props),
      }
    },

    outline(props) {
      const { colorScheme: c, theme } = props
      const darkColor = transparentize(`${c}.200`, 0.8)(theme)
      const lightColor = getColor(theme, `${c}.500`)
      const color = mode(lightColor, darkColor)(props)

      return {
        color,
        boxShadow: `inset 0 0 0px 1px ${color}`,
      }
    },
  },
}

export default Badge

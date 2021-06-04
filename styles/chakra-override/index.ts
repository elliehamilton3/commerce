import { extendTheme } from '@chakra-ui/react'
import components from './components'
import foundations from './foundations'
import { styles } from './styles'

export const candideChakraTheme = extendTheme({
  ...foundations,
  styles,
  components,
})

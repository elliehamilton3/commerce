import { mode, Styles } from '@chakra-ui/theme-tools'

export const styles: Styles = {
  global: (props) => ({
    'html, body': {
      fontFamily: 'body',
      color: mode('brandDusk', 'whiteAlpha.900')(props),
      bg: mode('brandBackground', 'brandBasalt')(props),
      '*::placeholder': {
        color: mode('brandDusk', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('brandGrey', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
      fontVariantNumeric: 'proportional-nums',
      style: {
        display: 'none!important', // ensures emotion css doesn't render in page!
      },
      svg: {
        overflow: 'visible', // fix safari chopping off some SVGs
      },
      fontFeatureSettings: `"pnum"`,
      lineHeight: 'base',
    },
  }),
}

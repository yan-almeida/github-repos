
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      '.chakra-slide.chakra-modal__content form': {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      },
      body: {
        backgroundColor: props.colorMode === 'light' ? '#EBF4F8' : '#232323'
      }
    })
  },
})

export default theme
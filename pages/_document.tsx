// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import theme from '../src/theme'

export default class Document extends NextDocument {
  render () {
    return (
      <Html lang='en'>
        <Head />
        <title>{`GitHub's Repos!`}</title>
        
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
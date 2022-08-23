import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { SWRConfig } from 'swr';
import { swrConfiguration } from "../src/api";
import theme from "../src/theme";

function MyApp ({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <SWRConfig value={
        swrConfiguration
      }>
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  )
}

export default MyApp
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react'

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        primary: '#24d754',
        secondary: '#f78741',
        error: '#e84f4f',
      },
    }
  })

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

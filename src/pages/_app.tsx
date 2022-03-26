import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
// import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, Global } from '@emotion/react'
import { darkTheme, lightTheme } from '../theme'
import createEmotionCache from '../createEmotionCache'
import { getGlobalStyleTheme } from '../styles/global'
import { useState } from 'react'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [activeTheme, setActiveTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setActiveTheme(activeTheme === lightTheme ? darkTheme : lightTheme)
  }

  const globalStyle = getGlobalStyleTheme(activeTheme)

  return (
    <>
      <Global styles={globalStyle} />
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={activeTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          {/* <CssBaseline /> */}
          <Component
            {...pageProps}
            activeTheme={activeTheme}
            toggleTheme={toggleTheme}
          />
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, Global } from '@emotion/react'
import createEmotionCache from '../createEmotionCache'
import { getGlobalStyleTheme } from '../styles/global'
import { ThemeContext } from '../providers/theme'
import { darkTheme, lightTheme } from '../theme'

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const [activeTheme, setActiveTheme] = React.useState(lightTheme)

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
          <ThemeContext.Provider value={{ activeTheme, toggleTheme }}>
            <Component {...pageProps} />
          </ThemeContext.Provider>
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

import Head from 'next/head';
import PropTypes from 'prop-types';
import * as React from 'react';

import { CacheProvider, Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';

import createEmotionCache from '../createEmotionCache';
import { ThemeContext } from '../providers/theme';
import { getGlobalStyleTheme } from '../styles/global';
import { darkTheme, lightTheme } from '../theme';

const clientSideEmotionCache = createEmotionCache()

export function getCookie(cname: string) {
  let name = cname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const [activeTheme, setActiveTheme] = React.useState(lightTheme)

  React.useEffect(() => {
    if (getCookie('savedTheme'))
      setActiveTheme(
        getCookie('savedTheme') === 'light' ? lightTheme : darkTheme
      )
  }, [])

  React.useEffect(() => {
    document.cookie = `savedTheme=${activeTheme.palette.mode}`
  }, [activeTheme])

  const globalStyle = getGlobalStyleTheme(activeTheme)

  return (
    <>
      <Global styles={globalStyle} />
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={activeTheme}>
          <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
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

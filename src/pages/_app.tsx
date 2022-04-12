import { AppProps } from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import * as React from 'react';

import { CacheProvider, EmotionCache } from '@emotion/react';

import createEmotionCache from '../createEmotionCache';
import { LocaleProvider } from '../providers/locale';
import { ThemeProvider } from '../providers/theme';

const clientSideEmotionCache = createEmotionCache()

export function getCookie(cookieName: string) {
  let decodedCookies = decodeURIComponent(document.cookie)
  let cookies = decodedCookies.split(';')

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trimStart()
    if (cookie.indexOf(`${cookieName}=`) !== 0) continue
    const indexOfCookieValue = cookie.indexOf('=') + 1
    return cookie.slice(indexOfCookieValue, cookie.length)
  }

  return ''
}

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        <LocaleProvider>
          <Component {...pageProps} />
        </LocaleProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

import Document, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'

import createEmotionServer from '@emotion/server/create-instance'

import createEmotionCache from '../createEmotionCache'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&family=Open+Sans:wght@300;400&display=swap"
            rel="stylesheet"
          />

          {/* <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&family=Roboto:wght@300;400&display=swap"
            rel="stylesheet"
          /> */}

          {this.props['emotionStyleTags']}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    emotionStyleTags,
  }
}

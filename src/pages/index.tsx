import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import * as React from 'react'
import { Hero } from '../components/hero'
import { LocaleContext } from '../providers/locale'
import pt from '../../public/locales/pt-br'
import en from '../../public/locales/en-us'
import { TopNav } from '../components/topNav'
import { SideBar } from '../components/sideBar'
import { AboutPart1 } from '../components/aboutPart1'
import { AboutTitleContainer, Container } from '../styles/pages/home'
import { AboutPart2 } from '../components/aboutPart2'
import { ThemeContext } from '../providers/theme'

const Home: NextPage = () => {
  const router = useRouter()
  const [locale, setLocale] = React.useState(router.locale)
  const [t, setT] = React.useState(router.locale === 'pt-br' ? pt : en)
  const { activeTheme } = React.useContext(ThemeContext)

  React.useEffect(() => {
    locale === 'pt-br' ? setT(pt) : setT(en)
    const { pathname, query, asPath } = router
    router.push({ pathname, query }, asPath, { locale })
  }, [locale])

  return (
    <LocaleContext.Provider value={{ t, locale, setLocale }}>
      <Head>
        <title>Caio Campos</title>
      </Head>
      <TopNav />
      <SideBar />
      <Container>
        <AboutTitleContainer>
          <h2
            style={{ backgroundColor: activeTheme.palette.background.default }}
          >
            {t.aboutTitle}
          </h2>
        </AboutTitleContainer>
        <Hero />
        <AboutPart1 />
        <AboutPart2 />
        <AboutPart2 />
      </Container>
    </LocaleContext.Provider>
  )
}

export default Home

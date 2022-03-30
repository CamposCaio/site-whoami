import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';

import en from '../../public/locales/en-us';
import pt from '../../public/locales/pt-br';
import { SectionAbout1 } from '../components/SectionAbout1';
import { SectionAbout2 } from '../components/SectionAbout2';
import { SectionHome } from '../components/SectionHome';
import { SettingsTopBar } from '../components/SettingsTopBar';
import { SideNavbar } from '../components/SideNavbar';
import { LocaleContext } from '../providers/locale';
import { ThemeContext } from '../providers/theme';
import { ContainerSections } from '../styles/pages/home';

const hoverScroll = () => {
  const pageHeight = document.body.clientHeight
  const scrollPosition = document.getElementById('container-sections').scrollTop
  const section = Math.round(scrollPosition / pageHeight)
  document
    .getElementsByClassName('link-active')[0]
    ?.classList.remove('link-active')

  switch (section) {
    case 0: //Home
      document.getElementById('side-navbar__home').classList.add('link-active')
      break
    case 1: //About
    case 2:
      document.getElementById('side-navbar__about').classList.add('link-active')
  }
}

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
      <SettingsTopBar />
      <ContainerSections
        onScroll={hoverScroll}
        id="container-sections"
        color={activeTheme.palette.background.default}
      >
        <SideNavbar />
        <div className="about__title-sticky-limiter">
          <h2>{t.aboutTitle}</h2>
        </div>
        <SectionHome />
        <SectionAbout1 />
        <SectionAbout2 />
        <SectionAbout2 />
      </ContainerSections>
    </LocaleContext.Provider>
  )
}

export default Home

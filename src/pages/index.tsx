import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';

import en from '../../public/locales/en-us';
import pt from '../../public/locales/pt-br';
import { SectionAbout1 } from '../components/SectionAbout1';
import { SectionAbout2 } from '../components/SectionAbout2';
import { SectionContact } from '../components/SectionContact';
import { SectionHome } from '../components/SectionHome';
import { SectionPortfolio } from '../components/SectionPortfolio';
import { SectionTecnologies } from '../components/SectionTecnologies';
import { SideNavbar } from '../components/SideNavbar';
import { TopBar } from '../components/TopBar';
import { LocaleContext } from '../providers/locale';
import { ContainerSections } from '../styles/pages/home';

const hoverScroll = () => {
  const pageHeight = window.innerHeight
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
      break
    case 3: //Tecnologies
      document
        .getElementById('side-navbar__tecnologies')
        .classList.add('link-active')
      break
    case 4: //Portfolio
      document
        .getElementById('side-navbar__portfolio')
        .classList.add('link-active')
      break
    case 5: //Contact
      document
        .getElementById('side-navbar__contact')
        .classList.add('link-active')
  }
}

const Home: NextPage = () => {
  const router = useRouter()
  const [locale, setLocale] = React.useState(router.locale)
  const [t, setT] = React.useState(router.locale === 'pt-br' ? pt : en)

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
      <TopBar />
      <SideNavbar />
      <ContainerSections onScroll={hoverScroll} id="container-sections">
        <SectionHome />
        <div className="about__title-sticky-limiter">
          <h2>{t.aboutTitle}</h2>
        </div>
        <SectionAbout1 />
        <SectionAbout2 />
        <SectionTecnologies />
        <SectionPortfolio />
        <SectionContact />
      </ContainerSections>
    </LocaleContext.Provider>
  )
}

export default Home

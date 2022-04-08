import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';

import en from '../../public/locales/en-us';
import pt from '../../public/locales/pt-br';
import AboutTitleSticky from '../components/AboutTitleSticky';
import { SectionAbout1 } from '../components/SectionAbout1';
import { SectionAbout2 } from '../components/SectionAbout2';
import { SectionContact } from '../components/SectionContact';
import { SectionHome } from '../components/SectionHome';
import { SectionPortfolio } from '../components/SectionPortfolio';
import { SectionTecnologies } from '../components/SectionTecnologies';
import { SideNavbar } from '../components/SideNavbar';
import { SnapScroll } from '../components/SnapScroll';
import { TopBar } from '../components/TopBar';
import { LocaleContext } from '../providers/locale';

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
      <SnapScroll />
      <SideNavbar />
      <AboutTitleSticky />
      {/* <ContainerSections onScroll={hoverScroll} id="container-sections"> */}
      <SectionHome />
      <SectionAbout1 />
      <SectionAbout2 />
      <SectionTecnologies />
      <SectionPortfolio />
      {/* <SectionContact /> */}
      {/* </ContainerSections> */}
    </LocaleContext.Provider>
  )
}

export default Home

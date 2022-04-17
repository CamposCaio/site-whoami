import type { NextPage } from 'next'

import Head from 'next/head';
import { useEffect } from 'react';

import { DialogMusicPreference } from '@components/DialogMusicPreference';
import { TopBar } from '@components/TopBar';
import { About } from '@sections/About';
import { SectionContact } from '@sections/Contact';
import { SectionHome } from '@sections/Home';
import { SectionPortfolio } from '@sections/Portfolio';
import { SectionTechnologies } from '@sections/Technologies';
import { Transition, transitionsControll } from '@src/components/_sections/Transition';
import { BackgroundMusic } from '@src/components/BackgroundMusic';
import { useLocale } from '@src/providers/locale';
import { ScrollController } from '@src/snapScroll';

export const scrollController = new ScrollController(4)

const Home: NextPage = () => {
  const { t } = useLocale()

  useEffect(() => {
    scrollController.initialize()
    transitionsControll()
    window.addEventListener('scroll', () => scrollController.handleScroll())
    window.addEventListener('resize', () => scrollController.handleResize())
  }, [])

  return (
    <>
      <Head>
        <title>Caio Campos</title>
      </Head>
      <BackgroundMusic />
      <DialogMusicPreference />
      <TopBar />
      {/* Page sections: */}
      <SectionHome />
      <Transition
        pageNumber="1"
        textup={t.navbarHome}
        textdown={t.navbarAbout}
      />
      <About />
      <Transition
        pageNumber="3"
        textup={t.navbarAbout}
        textdown={t.navbarTechnologies}
      />
      <SectionTechnologies />
      <Transition
        pageNumber="5"
        textup={t.navbarTechnologies}
        textdown={t.navbarPortfolio}
      />
      <SectionPortfolio />
      <Transition
        pageNumber="7"
        textup={t.navbarPortfolio}
        textdown={t.navbarContact}
      />
      <SectionContact />
    </>
  )
}

export default Home

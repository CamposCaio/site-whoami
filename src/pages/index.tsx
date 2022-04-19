import type { NextPage } from 'next'

import Head from 'next/head';
import { useEffect } from 'react';

import { TopBar } from '@components/TopBar';
import { About } from '@sections/About';
import { SectionContact } from '@sections/Contact';
import { SectionHome } from '@sections/Home';
import { SectionPortfolio } from '@sections/Portfolio';
import { SectionTechnologies } from '@sections/Technologies';
import { Transition, transitionsControll } from '@src/components/_sections/Transition';
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
      <audio id="bg-music" src="/audio/background-music.mp3" loop />
      <TopBar />
      {/* Page sections: */}
      <SectionHome />
      <Transition pageNumber="1" textup={t.home} textdown={t.about} />
      <About />
      <Transition pageNumber="3" textup={t.about} textdown={t.technologies} />
      <SectionTechnologies />
      <Transition
        pageNumber="5"
        textup={t.technologies}
        textdown={t.portfolio}
      />
      <SectionPortfolio />
      <Transition pageNumber="7" textup={t.portfolio} textdown={t.contact} />
      <SectionContact />
    </>
  )
}

export default Home

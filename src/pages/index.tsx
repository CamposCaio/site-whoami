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
import { BackgroundMusic } from '@src/components/BackgroundMusic';
import { ScrollController } from '@src/snapScroll';

export const scrollController = new ScrollController(5)

const Home: NextPage = () => {
  useEffect(() => {
    scrollController.initialize()
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
      <About />
      <SectionTechnologies />
      <SectionPortfolio />
      <SectionContact />
    </>
  )
}

export default Home

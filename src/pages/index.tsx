import type { NextPage } from 'next'
import Head from 'next/head';
import { useEffect } from 'react';

import { DialogMusicPreference } from '@components/DialogMusicPreference';
import { SideNavbar } from '@components/SideNavbar';
import { TopBar } from '@components/TopBar';
import { About } from '@sections/About';
import { SectionContact } from '@sections/Contact';
import { SectionHome } from '@sections/Home';
import { SectionPortfolio } from '@sections/Portfolio';
import { SectionTechnologies } from '@sections/Technologies';
import { snapScroll } from '@src/snapScroll';

const Home: NextPage = () => {
  useEffect(() => {
    snapScroll()
  }, [])

  return (
    <>
      <Head>
        <title>Caio Campos</title>
      </Head>
      <DialogMusicPreference />
      <TopBar />
      <SideNavbar />
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

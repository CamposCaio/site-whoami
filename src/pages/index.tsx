import type { NextPage } from 'next'
import Head from 'next/head';

import { AboutTitleSticky } from '../components/AboutTitleSticky';
import { DialogRequestSound } from '../components/DialogRequestSound';
import { SectionAbout1 } from '../components/SectionAbout1';
import { SectionAbout2 } from '../components/SectionAbout2';
import { SectionContact } from '../components/SectionContact';
import { SectionHome } from '../components/SectionHome';
import { SectionPortfolio } from '../components/SectionPortfolio';
import { SectionTechnologies } from '../components/SectionTechnologies';
import { SideNavbar } from '../components/SideNavbar';
import { SnapScroll } from '../components/SnapScroll';
import { TopBar } from '../components/TopBar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Caio Campos</title>
      </Head>
      <DialogRequestSound />
      <TopBar />
      <SnapScroll />
      <SideNavbar />
      <AboutTitleSticky />
      {/* Page sections: */}
      <SectionHome />
      <SectionAbout1 />
      <SectionAbout2 />
      <SectionTechnologies />
      <SectionPortfolio />
      <SectionContact />
    </>
  )
}

export default Home

import { useEffect } from 'react';

import { useLocale } from '@providers/locale';
import { scrollController } from '@src/pages';

import { Container } from './styles';

export function SideNavbar() {
  const { t } = useLocale()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const section = Math.round(window.scrollY / window.innerHeight)

      document
        .getElementsByClassName('link-active')[0]
        ?.classList.remove('link-active')

      switch (section) {
        case 0: //Home
          document
            .getElementById('side-navbar__home')
            .classList.add('link-active')
          break
        case 1: //About
        case 2:
          document
            .getElementById('side-navbar__about')
            .classList.add('link-active')
          break
        case 3: //Technologies
          document
            .getElementById('side-navbar__technologies')
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
    })
  }, [])

  return (
    <Container className="global--color-secondary">
      <a
        onClick={() => scrollController.scrollTo(0)}
        id="side-navbar__home"
        className="link-active"
      >
        {t.sideNavbarHome}
      </a>
      <a onClick={() => scrollController.scrollTo(1)} id="side-navbar__about">
        {t.sideNavbarAbout}
      </a>
      <a
        onClick={() => scrollController.scrollTo(3)}
        id="side-navbar__technologies"
      >
        {t.sideNavbarTechnologies}
      </a>
      <a
        onClick={() => scrollController.scrollTo(4)}
        id="side-navbar__portfolio"
      >
        {t.sideNavbarPortfolio}
      </a>
      <a onClick={() => scrollController.scrollTo(5)} id="side-navbar__contact">
        {t.sideNavbarContact}
      </a>
    </Container>
  )
}

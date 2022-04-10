import { useContext, useEffect } from 'react';

import { LocaleContext } from '../../providers/locale';
import { enableHandleScroll, scrollTo } from '../SnapScroll';
import { Container } from './styles';

function handleNavigation(page: number) {
  enableHandleScroll(false)
  scrollTo(page * window.innerHeight)
}

export function SideNavbar() {
  const { t } = useContext(LocaleContext)

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
        onClick={() => handleNavigation(0)}
        id="side-navbar__home"
        className="link-active"
      >
        {t.sideNavbarHome}
      </a>
      <a onClick={() => handleNavigation(1)} id="side-navbar__about">
        {t.sideNavbarAbout}
      </a>
      <a onClick={() => handleNavigation(3)} id="side-navbar__technologies">
        {t.sideNavbarTechnologies}
      </a>
      <a onClick={() => handleNavigation(4)} id="side-navbar__portfolio">
        {t.sideNavbarPortfolio}
      </a>
      <a onClick={() => handleNavigation(0)} id="side-navbar__contact">
        {t.sideNavbarContact}
      </a>
    </Container>
  )
}

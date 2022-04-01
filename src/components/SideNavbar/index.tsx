import { useContext } from 'react';

import { LocaleContext } from '../../providers/locale';
import { Container } from './styles';

export function SideNavbar() {
  const { t } = useContext(LocaleContext)

  return (
    <Container className="global--color-secondary">
      <a href="#home" id="side-navbar__home" className="link-active">
        {t.sideNavbarHome}
      </a>
      <a href="#about" id="side-navbar__about">
        {t.sideNavbarAbout}
      </a>
      <a href="#tecnologies" id="side-navbar__tecnologies">
        {t.sideNavbarTecnologies}
      </a>
      <a href="#portfolio" id="side-navbar__portfolio">
        {t.sideNavbarPortfolio}
      </a>
      <a href="#contact" id="side-navbar__contact">
        {t.sideNavbarContact}
      </a>
    </Container>
  )
}

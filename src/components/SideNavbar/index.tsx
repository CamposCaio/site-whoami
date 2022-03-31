import { useContext } from 'react';

import { LocaleContext } from '../../providers/locale';
import { Container } from './styles';

export function SideNavbar() {
  const { t } = useContext(LocaleContext)

  return (
    <Container>
      <a href="#home" id="side-navbar__home" className="link-active">
        {t.sideNavbarHome}
      </a>
      <a href="#about" id="side-navbar__about">
        {t.sideNavbarAbout}
      </a>
      <a>{t.sideNavbarTecnologies}</a>
      <a>{t.sideNavbarPortfolio}</a>
      <a>{t.sideNavbarContact}</a>
    </Container>
  )
}

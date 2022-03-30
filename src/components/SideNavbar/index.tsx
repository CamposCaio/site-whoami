import { useContext, useEffect } from 'react';

import { LocaleContext } from '../../providers/locale';
import { ThemeContext } from '../../providers/theme';
import { Container } from './styles';

export function SideNavbar() {
  const { activeTheme } = useContext(ThemeContext)
  const { t } = useContext(LocaleContext)

  return (
    <Container color={activeTheme.palette.primary.main}>
      <div className="container-sticky">
        <div id="side-navbar__div-links">
          <a href="#home" id="side-navbar__home" className="link-active">
            {t.sideNavbarHome}
          </a>
          <a href="#about" id="side-navbar__about">
            {t.sideNavbarAbout}
          </a>
          <a>{t.sideNavbarValues}</a>
          <a>{t.sideNavbarTecnologies}</a>
          <a>{t.sideNavbarContact}</a>
        </div>
      </div>
    </Container>
  )
}

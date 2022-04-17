import { useEffect } from 'react';

import IconMenu from '@mui/icons-material/MenuOutlined';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useLocale } from '@providers/locale';
import { scrollController } from '@src/pages';

import { IconAudio } from './IconAudio';
import { IconTheme } from './IconTheme';
import { AuthorStamp, DesktopMenu, ToggleMenu } from './styles';

export function updateNavbarLink(currentPage: string) {
  const navbar = document.getElementById('navbar')
  const activeLink = navbar.querySelector('a.active')
  activeLink.classList.remove('active')
  const newActiveLink = navbar.querySelector(`.${currentPage}`)
  newActiveLink.classList.add('active')
}

export function TopBar() {
  const { t, locale, setLocale } = useLocale()

  return (
    <>
      <AuthorStamp>Caio Campos</AuthorStamp>

      <DesktopMenu id="topbar__desktop-menu">
        <nav id="navbar">
          <a
            onClick={() => scrollController.scrollTo('home')}
            className="home active"
          >
            {t.navbarHome}
          </a>
          <a
            onClick={() => scrollController.scrollTo('about')}
            className="about"
          >
            {t.navbarAbout}
          </a>
          <a
            onClick={() => scrollController.scrollTo('technologies')}
            className="technologies"
          >
            {t.navbarTechnologies}
          </a>
          <a
            onClick={() => scrollController.scrollTo('portfolio')}
            className="portfolio"
          >
            {t.navbarPortfolio}
          </a>
          <a
            onClick={() => scrollController.scrollTo('contact')}
            className="contact"
          >
            {t.navbarContact}
          </a>
        </nav>

        <div id="settings">
          <IconAudio />
          <IconTheme />
          <Select
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="en-us">EN - US</MenuItem>
            <MenuItem value="pt-br">PT - BR</MenuItem>
          </Select>
        </div>
      </DesktopMenu>
      <ToggleMenu>
        <IconMenu />
      </ToggleMenu>
    </>
  )
}

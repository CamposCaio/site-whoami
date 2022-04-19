import { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useLocale } from '@providers/locale';
import { scrollController } from '@src/pages';

import { AlertMusic } from './AlertMusic';
import { IconAudio } from './IconAudio';
import { IconMenu } from './IconMenu';
import { IconTheme } from './IconTheme';
import { MobileMenuOverlay } from './MobileMenuOverlay';
import { AuthorStamp, DesktopMenu } from './styles';

export function updateNavbarLink(currentPage: string) {
  const navbar = document.getElementById('navbar')
  const activeLink = navbar.querySelector('a.active')
  activeLink.classList.remove('active')
  const newActiveLink = navbar.querySelector(`.${currentPage}`)
  newActiveLink.classList.add('active')
}

export function TopBar() {
  const { t, locale, setLocale } = useLocale()
  const [menuOverlay, setMenuOverlay] = useState(false)

  return (
    <>
      <MobileMenuOverlay isOpen={menuOverlay} setIsOpen={setMenuOverlay} />
      <AuthorStamp>Caio Campos</AuthorStamp>

      <DesktopMenu id="topbar__desktop-menu">
        <nav id="navbar">
          <a
            onClick={() => scrollController.scrollTo('home')}
            className="home active"
          >
            {t.home}
          </a>
          <a
            onClick={() => scrollController.scrollTo('about')}
            className="about"
          >
            {t.about}
          </a>
          <a
            onClick={() => scrollController.scrollTo('technologies')}
            className="technologies"
          >
            {t.technologies}
          </a>
          <a
            onClick={() => scrollController.scrollTo('portfolio')}
            className="portfolio"
          >
            {t.portfolio}
          </a>
          <a
            onClick={() => scrollController.scrollTo('contact')}
            className="contact"
          >
            {t.contact}
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

      <AlertMusic />

      <IconMenu isOpen={menuOverlay} setIsOpen={setMenuOverlay} />
    </>
  )
}

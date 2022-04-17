import { useEffect } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useLocale } from '@providers/locale';
import { scrollController } from '@src/pages';

import { BackgroundMusic } from '../BackgroundMusic';
import { IconAudio } from './IconAudio';
import { IconTheme } from './IconTheme';
import { MobileMenuOverlay } from './MobileMenuOverlay';
import { AuthorStamp, Navbar, Settings } from './styles';

export function TopBar() {
  const { t, locale, setLocale } = useLocale()

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    const marker = navbar.querySelector('.marker') as HTMLDivElement
    const links = navbar.querySelectorAll('a')

    function indicatorIn(target) {
      marker.style.left = target.offsetLeft + 'px'
      marker.style.width = target.offsetWidth + 'px'
      marker.style.transition = 'all 0.4s ease-in'
      marker.style.opacity = '1'
    }

    function indicatorOut() {
      const activeLink = navbar.querySelector('a.active') as HTMLLinkElement
      marker.style.left = activeLink.offsetLeft + 'px'
      marker.style.width = activeLink.offsetWidth + 'px'
      marker.style.transition = 'all 0.4s ease-out, opacity 0.4s ease-out 0.4s'
      marker.style.opacity = '0'
    }

    links.forEach((link) => {
      link.addEventListener('mouseenter', (e) => {
        indicatorIn(e.target)
      })

      link.addEventListener('mouseleave', indicatorOut)
      link.addEventListener('click', ({ target }: any) => {
        scrollController.scrollTo(target.classList.value.split(' ')[0])

        navbar.querySelector('a.active').classList.remove('active')
        target.classList.add('active')
      })
    })
  }, [])

  return (
    <>
      <AuthorStamp>Caio Campos</AuthorStamp>

      <Navbar id="navbar">
        <div className="marker"></div>
        <a className="home active">{t.navbarHome}</a>
        <a className="about">{t.navbarAbout}</a>
        <a className="technologies">{t.navbarTechnologies}</a>
        <a className="portfolio">{t.navbarPortfolio}</a>
        <a className="contact">{t.navbarContact}</a>
      </Navbar>

      <Settings>
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
      </Settings>
    </>
  )
}

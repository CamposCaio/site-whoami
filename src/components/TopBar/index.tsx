import { useContext, useState } from 'react';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { LocaleContext } from '../../providers/locale';
import { ThemeContext } from '../../providers/theme';
import { ButtonToggleTheme } from './ButtonToggleTheme';
import { MobileMenuOverlay } from './MobileMenuOverlay';
import { Container } from './styles';

export function toggleMusic() {
  const elementAudio = document.getElementById('bg-music') as HTMLAudioElement

  const divSvgAudioControl = document.getElementById('icon-audio-control')

  elementAudio.paused ? elementAudio.play() : elementAudio.pause()
  divSvgAudioControl.classList.toggle('play-button')
  divSvgAudioControl.classList.toggle('pause-button')
}

export function TopBar() {
  const { locale, setLocale } = useContext(LocaleContext)
  const { activeTheme } = useContext(ThemeContext)
  const [isOpenMenuOverlay, setIsOpenMenuOverlay] = useState(false)

  function openMenu() {
    const divSvgMenu = document.getElementById('icon-menu')
    divSvgMenu.classList.toggle('menu-open-button')
    divSvgMenu.classList.toggle('menu-close-button')
    setIsOpenMenuOverlay(!isOpenMenuOverlay)
  }

  return (
    <Container theme={activeTheme}>
      <MobileMenuOverlay isOpen={isOpenMenuOverlay} />
      <div id="container-top-left">
        <audio id="bg-music" src="/audio/inspire-me-more-atm.mp3" loop />
        <Button onClick={toggleMusic} variant="text" title="Toggle music">
          <div id="icon-audio-control" className="pause-button"></div>
        </Button>
      </div>

      <Button onClick={openMenu} variant="text" title="Menu">
        <div id="icon-menu" className="menu-open-button"></div>
      </Button>

      <div id="container-top-right">
        <ButtonToggleTheme />
        <Select
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="en-us">En us</MenuItem>
          <MenuItem value="pt-br">Pt br</MenuItem>
        </Select>
      </div>
    </Container>
  )
}

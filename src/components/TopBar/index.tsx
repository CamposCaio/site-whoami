import { useContext } from 'react';

import { Button, MenuItem, Select } from '@mui/material';

import { LocaleContext } from '../../providers/locale';
import { ThemeContext } from '../../providers/theme';
import { ButtonToggleTheme } from './ButtonToggleTheme';
import { Container } from './styles';

let isPlayingMusic = false

export function toggleMusic() {
  const elementAudio = document.getElementById('bg-music') as HTMLAudioElement

  const divSvgAudioControl = document.getElementById('icon-audio-control')

  if (isPlayingMusic) {
    elementAudio.pause()
    divSvgAudioControl.classList.add('pause-button')
    divSvgAudioControl.classList.remove('play-button')
  } else {
    elementAudio.play()
    divSvgAudioControl.classList.add('play-button')
    divSvgAudioControl.classList.remove('pause-button')
  }

  isPlayingMusic = !isPlayingMusic
}

export function TopBar() {
  const { locale, setLocale } = useContext(LocaleContext)
  const { activeTheme } = useContext(ThemeContext)

  return (
    <Container color={activeTheme.palette.text.primary}>
      <div id="container-top-left">
        <audio id="bg-music" src="/audio/inspire-me-more-atm.mp3" loop />
        <Button onClick={toggleMusic} variant="text">
          <div id="icon-audio-control"></div>
        </Button>
      </div>

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

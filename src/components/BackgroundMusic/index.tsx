import Button from '@mui/material/Button';
import { useTheme } from '@providers/theme';

import { Container } from './styles';

export function setMusic(toPlayMusic: boolean) {
  const music = document.getElementById('music') as HTMLAudioElement
  if (toPlayMusic === music.paused) toggleMusic()
}

function toggleMusic() {
  const music = document.getElementById('music') as HTMLAudioElement

  const musicIcon = document.getElementById('music-icon') as HTMLAudioElement
  music.paused ? music.play() : music.pause()
  musicIcon.classList.toggle('paused')
  musicIcon.classList.toggle('playing')
}

export function BackgroundMusic() {
  const { activeTheme } = useTheme()

  return (
    <Container theme={activeTheme}>
      <audio id="music" src="/audio/inspire-me-more-atm.mp3" loop />
      <Button
        onClick={() => toggleMusic()}
        variant="text"
        title="Toggle background music"
      >
        <div id="music-icon" className="paused"></div>
      </Button>
    </Container>
  )
}

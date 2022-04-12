import Button from '@mui/material/Button';

import { useTheme } from '../../providers/theme';
import { Container } from './styles';

export function setBgMusic(toPlayMusic: boolean) {
  const bgMusic = document.getElementById('bg-music') as HTMLAudioElement
  if (toPlayMusic === bgMusic.paused) toggleBgMusic()
}

function toggleBgMusic() {
  const bgMusic = document.getElementById('bg-music') as HTMLAudioElement

  const bgMusicIcon = document.getElementById(
    'bg-music-icon'
  ) as HTMLAudioElement
  bgMusic.paused ? bgMusic.play() : bgMusic.pause()
  bgMusicIcon.classList.toggle('paused')
  bgMusicIcon.classList.toggle('playing')
}

export function BgMusic() {
  const { activeTheme } = useTheme()

  return (
    <Container theme={activeTheme}>
      <audio id="bg-music" src="/audio/inspire-me-more-atm.mp3" loop />
      <Button
        onClick={() => toggleBgMusic()}
        variant="text"
        title="Toggle background music"
      >
        <div id="bg-music-icon" className="paused"></div>
      </Button>
    </Container>
  )
}

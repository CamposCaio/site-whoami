import { playBackgroundMusic } from '@src/components/BackgroundMusic';

import { Container } from './styles';

export function changeIconAudio(isAudioEnabled: boolean) {
  const iconAudio = document.getElementById('icon-audio')
  iconAudio.classList.add(isAudioEnabled ? 'on' : 'off')
  iconAudio.classList.remove(isAudioEnabled ? 'off' : 'on')
}

export function IconAudio() {
  function toggleAudio({ target }) {
    target.classList.contains('off')
      ? playBackgroundMusic(true)
      : playBackgroundMusic(false)
  }

  return (
    <Container>
      <div id="icon-audio" className="off" onClick={toggleAudio} />
    </Container>
  )
}

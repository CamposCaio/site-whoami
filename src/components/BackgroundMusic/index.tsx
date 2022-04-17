import { changeIconAudio } from '../TopBar/IconAudio';

export function playBackgroundMusic(play: boolean) {
  const bgMusic = document.getElementById('bg-music') as HTMLAudioElement
  play ? bgMusic.play() : bgMusic.pause()
  changeIconAudio(play)
}

export function BackgroundMusic() {
  return <audio id="bg-music" src="/audio/background-music.mp3" loop />
}

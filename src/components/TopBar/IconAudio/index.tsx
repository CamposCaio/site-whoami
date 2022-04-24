import { AudioOff } from '@components/_svg'
import { useAudio } from '@src/providers/audio'
import { useTheme } from '@src/providers/theme'

import { Container } from './styles'

export function IconAudio() {
  const { isAudioEnable, setIsAudioEnable } = useAudio()
  const { activeTheme } = useTheme()

  return (
    <Container
      className="global__container-icon"
      title="Toggle audio"
      onClick={() => setIsAudioEnable(!isAudioEnable)}
    >
      <div className="container-audio-off">
        <AudioOff color={activeTheme.palette.text.primary} />
      </div>
      <div className="container-audio-on">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Container>
  )
}

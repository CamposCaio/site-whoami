import { AudioOff, AudioOn } from '@components/_svg';
import { useAudio } from '@src/providers/audio';
import { useTheme } from '@src/providers/theme';

import { Container } from './styles';

export function IconAudio() {
  const { isAudioEnable, setIsAudioEnable } = useAudio()
  const { activeTheme } = useTheme()

  return (
    <Container onClick={() => setIsAudioEnable(!isAudioEnable)}>
      <div id="content-icon-audio">
        <AudioOff color={activeTheme.palette.text.primary} />
        <AudioOn color={activeTheme.palette.text.primary} />
      </div>
    </Container>
  )
}

import Alert from '@mui/material/Alert'
import { useLocale } from '@providers/locale'
import { useAudio } from '@src/providers/audio'

import { Container } from './styles'

function closeAlert() {
  const alertMusic = document.getElementById('alert-music')
  alertMusic.style.display = 'none'
}

export function AlertMusic() {
  const { t } = useLocale()
  const { setIsAudioEnable } = useAudio()

  function turnOnMusic() {
    setIsAudioEnable(true)
    closeAlert()
  }

  return (
    <Container>
      <Alert
        id="alert-music"
        onClose={closeAlert}
        variant="outlined"
        severity="info"
      >
        {t.alertMusic[0]}
        <a onClick={turnOnMusic}>{t.alertMusic[1]}</a>
        {t.alertMusic[2]}
      </Alert>
    </Container>
  )
}

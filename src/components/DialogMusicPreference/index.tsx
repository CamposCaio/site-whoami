import { useState } from 'react';

import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useLocale } from '@providers/locale';

import { playBackgroundMusic } from '../BackgroundMusic';
import { Container } from './styles';

export function DialogMusicPreference() {
  const [open, setOpen] = useState(true)
  const { t } = useLocale()

  function handleDialogButton(enableMusic: boolean) {
    playBackgroundMusic(enableMusic)
    setOpen(false)
  }

  return (
    <Dialog onClose={() => setOpen(false)} open={open}>
      <DialogTitle>{t.soundDialogTitle}</DialogTitle>
      <Box sx={{ pl: '1.5rem', pr: '1.5rem' }}>
        {t.soundDialogContent}
        <Container>
          <Button variant="outlined" onClick={() => handleDialogButton(true)}>
            <VolumeUpOutlinedIcon sx={{ mr: '0.5rem' }} />
            <span>{t.soundDialogEnable}</span>
          </Button>
          <Button variant="outlined" onClick={() => handleDialogButton(false)}>
            <VolumeOffOutlinedIcon sx={{ mr: '0.5rem' }} />
            <span>{t.soundDialogDisable}</span>
          </Button>
        </Container>
      </Box>
    </Dialog>
  )
}

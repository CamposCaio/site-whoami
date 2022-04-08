import { useContext, useState } from 'react';

import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { LocaleContext } from '../../providers/locale';
import { toggleMusic } from '../TopBar';
import { Container } from './styles';

export interface SimpleDialogProps {
  t: any
  open: boolean
  onClose: (value: boolean) => void
}

function SimpleDialog(props: SimpleDialogProps) {
  const { t, onClose, open } = props

  const handleClose = () => {
    onClose(false)
  }

  const handleListItemClick = (value: boolean) => {
    if (value) toggleMusic()
    onClose(value)
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{t.soundDialogTitle}</DialogTitle>
      <Box sx={{ pl: '1.5rem', pr: '1.5rem' }}>
        {t.soundDialogContent}
        <Container>
          <Button variant="contained" onClick={() => handleListItemClick(true)}>
            <VolumeUpOutlinedIcon sx={{ mr: '0.5rem' }} />
            {t.soundDialogEnable}
          </Button>
          <Button
            variant="contained"
            onClick={() => handleListItemClick(false)}
          >
            <VolumeOffOutlinedIcon sx={{ mr: '0.5rem' }} />
            {t.soundDialogDisable}
          </Button>
        </Container>
      </Box>
    </Dialog>
  )
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = useState(true)
  const { t } = useContext(LocaleContext)

  return <SimpleDialog t={t} open={open} onClose={() => setOpen(false)} />
}

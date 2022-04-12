import { useState } from 'react';
import Fade from 'react-reveal/Fade';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import { useLocale } from '../../providers/locale';
import { useTheme } from '../../providers/theme';
import { Container, Content } from './styles';

export function SectionContact() {
  const { t } = useLocale()
  const { activeTheme } = useTheme()
  const [nameError, setNameError] = useState(false)
  const [nameHelperText, setNameHelperText] = useState('')

  function handleChange(
    inputID: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (inputID === 'name' && event.target.value.length < 2) {
      setNameError(true)
      setNameHelperText('Nome inválido.')
    } else {
      setNameError(false)
      setNameHelperText('')
    }
  }

  function handleFormSubmit() {
    const inputName = document.getElementById('form__input-name')
    const inputEmail = document.getElementById('form__input-email')
    const inputMessage = document.getElementById('form__input-message')
  }

  return (
    <Container>
      <Fade bottom>
        <Content theme={activeTheme}>
          <h2>{t.contactTitle}</h2>
          <h3>{t.contactTitle2}</h3>
          <p>{t.contactContent}</p>
          <div className="grid-div">
            <Paper elevation={4} className="contact-form-paper">
              <TextField
                id="form__input-name"
                helperText={nameHelperText}
                variant="standard"
                margin="dense"
                label={t.contactFormName}
                size="small"
                error={nameError}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange('name', e)
                }}
                fullWidth
              />
              <TextField
                id="form__input-email"
                margin="dense"
                variant="standard"
                label={t.contactFormEmail}
                size="small"
                fullWidth
              />
              <TextField
                id="form__input-message"
                margin="dense"
                variant="standard"
                label={t.contactFormMessage}
                size="small"
                fullWidth
                multiline
                rows={2}
              />
              <Button variant="contained" onClick={handleFormSubmit}>
                {t.contactFormSend}
              </Button>
            </Paper>
            <a href="mailto:xhcampos@gmail.com">
              <Paper elevation={4} className="icon-paper">
                <EmailOutlinedIcon fontSize="large" />
                {t.contactEmail}
              </Paper>
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5519995352098&text=Ol&aacute;%20Caio!"
            >
              <Paper elevation={4} className="icon-paper">
                <WhatsappOutlinedIcon fontSize="large" />
                {t.contactWhatsapp}
              </Paper>
            </a>
            <Paper elevation={4} className="icon-paper">
              <PhoneOutlinedIcon fontSize="large" />
              {t.contactPhone}
            </Paper>
          </div>
        </Content>
      </Fade>
    </Container>
  )
}

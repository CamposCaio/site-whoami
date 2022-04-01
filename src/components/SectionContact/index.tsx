import { useContext } from 'react';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import { Button } from '@mui/material';

import { LocaleContext } from '../../providers/locale';
import { ThemeContext } from '../../providers/theme';
import { Container, Content } from './styles';

export function SectionContact() {
  const { t } = useContext(LocaleContext)

  const { activeTheme } = useContext(ThemeContext)

  return (
    <Container id="contact" theme={activeTheme}>
      <Content>
        <div className="contact__div-title">
          <h2>{t.contactTitle}</h2>
        </div>
        {t.contactContent}
        <div className="contact__div-buttons">
          <Button variant="contained">
            <EmailOutlinedIcon sx={{ mr: '0.5rem' }} />
            E-mail
          </Button>
          <Button variant="contained">
            <WhatsappOutlinedIcon sx={{ mr: '0.5rem' }} />
            Whatsapp
          </Button>
        </div>
      </Content>
      <div className="contact__div-footer">
        {t.contactFindMe}
        <div className="contact__div-buttons">
          <Button variant="contained">Linkedin</Button>
          <Button variant="contained">Github</Button>
        </div>
      </div>
    </Container>
  )
}

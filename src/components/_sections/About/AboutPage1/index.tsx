import IconArrowForward from '@mui/icons-material/ArrowForwardOutlined';
import Button from '@mui/material/Button';
import { useLocale } from '@providers/locale';

import { Container, Content } from './styles';

export function AboutPage1() {
  const { t } = useLocale()

  return (
    <Container>
      <Content>
        <h2>{t.about1Title}</h2>
        {t.about1Content.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <Button variant="text">
          <div>
            {t.about1Button}
            <IconArrowForward fontSize="small" sx={{ ml: '0.5rem' }} />
          </div>
        </Button>
      </Content>
    </Container>
  )
}

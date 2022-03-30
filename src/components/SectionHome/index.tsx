import { useContext } from 'react';

import { Button } from '@mui/material';

import { LocaleContext } from '../../providers/locale';
import { Container, Content } from './styles';

export function SectionHome() {
  const { t } = useContext(LocaleContext)

  return (
    <Container id="home">
      <Content>
        <h3>{t.homeTitleL1}</h3>
        <br />
        <h3>{t.homeTitleL2}</h3>
        <br />
        <h1>{t.homeTitleL3}</h1>
        <br />
        <h1>{t.homeTitleL4}</h1>
        <br />
        <Button variant="outlined">
          <a
            href="https://drive.google.com/file/d/1p6rGQDahJ8CTOpQJqX5APrSnQfDnKXUF/view?usp=sharing"
            target="_blank"
          >
            {t.homeButton}
          </a>
        </Button>
      </Content>
    </Container>
  )
}

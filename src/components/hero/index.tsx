import { Button } from '@mui/material'
import { useContext } from 'react'
import { LocaleContext } from '../../providers/locale'
import { Container } from './styles'

export function Hero() {
  const { t } = useContext(LocaleContext)

  return (
    <Container>
      <div className="hero-content">
        <h2>{t.homeTitleL1}</h2>
        <br />
        <h2>{t.homeTitleL2}</h2>
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
      </div>
    </Container>
  )
}

import { useContext } from 'react'
import { LocaleContext } from '../../providers/locale'
import { Container, Content } from './styles'

export function AboutPart2() {
  const { t } = useContext(LocaleContext)

  return (
    <Container>
      <Content>
        <div>{t.aboutContent2}</div>
      </Content>
    </Container>
  )
}

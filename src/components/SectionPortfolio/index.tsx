import Fade from 'react-reveal/Fade';

import { useLocale } from '../../providers/locale';
import { Container, Content } from './styles';

export function SectionPortfolio() {
  const { t } = useLocale()

  return (
    <Container id="portfolio">
      <Fade bottom>
        <Content>
          <h2>{t.portfolioTitle}</h2>
          <p>{t.portfolioContent}</p>
        </Content>
      </Fade>
    </Container>
  )
}

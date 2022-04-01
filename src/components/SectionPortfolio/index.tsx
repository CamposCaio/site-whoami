import { useContext } from 'react';

import { LocaleContext } from '../../providers/locale';
import { Container, Content } from './styles';

export function SectionPortfolio() {
  const { t } = useContext(LocaleContext)

  return (
    <Container id="portfolio">
      <Content>
        <div className="portfolio__div-title">
          <h2>{t.portfolioTitle}</h2>
        </div>
        {t.portfolioContent}
      </Content>
    </Container>
  )
}

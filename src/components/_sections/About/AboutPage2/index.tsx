import { useLocale } from '@src/providers/locale';

import { CustomAccordionMobile } from './CustomAccordionMobile';
import { Container } from './styles';

export function AboutPage2() {
  const { t } = useLocale()

  return (
    <Container>
      <CustomAccordionMobile />
      <div className="content">
        <div className="title">
          <h2>{t.about2Title}</h2>
        </div>
        <div className="container-cards">
          <div className="card">
            <div className="card-title">
              <div className="card-title__number">
                <h3>1</h3>
              </div>
              <h3>{t.about2Card1Title}</h3>
            </div>
            <div className="card-content">
              <p>{t.about2Card1Content}</p>
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <div className="card-title__number">
                <h3>2</h3>
              </div>
              <h3>{t.about2Card2Title}</h3>
            </div>
            <div className="card-content">
              <p>{t.about2Card2Content}</p>
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <div className="card-title__number">
                <h3>3</h3>
              </div>
              <h3>{t.about2Card3Title}</h3>
            </div>
            <div className="card-content">
              <p>{t.about2Card3Content}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

import Fade from 'react-reveal/Fade';

import { useLocale } from '../../providers/locale';
import { EntireTabPanel } from './EntireTabPanel';
import { Container, Content } from './styles';

export function SectionAbout1() {
  const { t } = useLocale()

  return (
    <Container id="about">
      <Content>
        <Fade bottom>
          <h6>{t.aboutSubtitle1}</h6>
          <EntireTabPanel />
        </Fade>
      </Content>
    </Container>
  )
}

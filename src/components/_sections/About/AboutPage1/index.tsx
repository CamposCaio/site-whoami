import Fade from 'react-reveal/Fade';

import { useLocale } from '@providers/locale';

import { CustomTabPanel } from './CustomTabPanel';
import { Container, Content } from './styles';

export function AboutPage1() {
  const { t } = useLocale()

  return (
    <Container>
      <Content>
        <Fade bottom>
          <h6>{t.aboutSubtitle1}</h6>
          <CustomTabPanel />
        </Fade>
      </Content>
    </Container>
  )
}

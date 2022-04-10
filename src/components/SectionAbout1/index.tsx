import { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import { LocaleContext } from '../../providers/locale';
import MobileArrowDown from '../MobileArrowDown';
import { EntireTabPanel } from './EntireTabPanel';
import { Container, Content } from './styles';

export function SectionAbout1() {
  const { t } = useContext(LocaleContext)

  return (
    <Container id="about">
      <Content>
        <Fade bottom>
          <h6>{t.aboutSubtitle1}</h6>
          <EntireTabPanel />
        </Fade>
      </Content>
      <MobileArrowDown />
    </Container>
  )
}

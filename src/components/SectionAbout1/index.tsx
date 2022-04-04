import { useContext } from 'react';

import { LocaleContext } from '../../providers/locale';
import { EntireTabPanel } from './EntireTabPanel';
import { Container, Content } from './styles';

export function SectionAbout1() {
  const { t } = useContext(LocaleContext)

  return (
    <Container id="about">
      <Content>
        <h6>{t.aboutSubtitle1}</h6>
        <EntireTabPanel />
      </Content>
    </Container>
  )
}

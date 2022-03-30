import { useContext } from 'react';

import { LocaleContext } from '../../providers/locale';
import { Container, Content } from './styles';

export function SectionAbout1() {
  const { t } = useContext(LocaleContext)

  return (
    <Container id="about">
      <Content>
        <div>{t.aboutContent1}</div>
      </Content>
    </Container>
  )
}

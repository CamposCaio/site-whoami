import { useContext } from 'react';

import { LocaleContext } from '../../providers/locale';
import { Container, Content } from './styles';

export function SectionAbout1() {
  const { t } = useContext(LocaleContext)

  return (
    <Container id="about">
      <Content>{t.aboutContent1}</Content>
    </Container>
  )
}

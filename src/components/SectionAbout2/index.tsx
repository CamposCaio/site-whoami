import { useContext } from 'react';

import { LocaleContext } from '../../providers/locale';
import { Container, Content } from './styles';

export function SectionAbout2() {
  const { t } = useContext(LocaleContext)

  return (
    <Container>
      <Content>{t.aboutContent2}</Content>
    </Container>
  )
}

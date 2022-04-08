import { useContext } from 'react';

import { LocaleContext } from '../../providers/locale';
import { Container } from './styles';

export default function AboutTitleSticky() {
  const { t } = useContext(LocaleContext)

  return (
    <Container>
      <h2>{t.aboutTitle}</h2>
    </Container>
  )
}

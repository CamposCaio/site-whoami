import { useLocale } from '../../providers/locale';
import { Container } from './styles';

export function AboutTitleSticky() {
  const { t } = useLocale()

  return (
    <Container>
      <h2>{t.aboutTitle}</h2>
    </Container>
  )
}

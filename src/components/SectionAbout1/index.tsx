import { useContext } from 'react';

import { LocaleContext } from '../../providers/locale';
import { EntireTabPanel } from './EntireTabPanel';
import { Container, Content } from './styles';

export function SectionAbout1() {
  const { t } = useContext(LocaleContext)

  return (
    <Container id="about">
      <Content>
        <h6>Conheça o meu trabalho</h6>
        <EntireTabPanel />
      </Content>
    </Container>
  )
}

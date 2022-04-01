import { useContext } from 'react';

import { LocaleContext } from '../../providers/locale';
import { Container, Content } from './styles';

export function SectionTecnologies() {
  const { t } = useContext(LocaleContext)

  return (
    <Container id="tecnologies">
      <Content>
        <div className="tecnologies__div-title">
          <h2>{t.tecnologiesTitle}</h2>
        </div>
        {t.tecnologiesContent}

        <ul>
          <li>
            <b>TypeScript</b>
          </li>
          <li>
            <b>Node.js</b>
          </li>
          <li>
            <b>NestJS</b>
          </li>
          <li>
            <b>styled-components</b>
          </li>
          <li>
            <b>React</b>
          </li>
          <li>
            <b>Next.js</b>
          </li>
        </ul>
      </Content>
    </Container>
  )
}

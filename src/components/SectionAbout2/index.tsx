import { useContext, useEffect, useState } from 'react';

import { LocaleContext } from '../../providers/locale';
import { ContentCards } from './ContentCards';
import { EntireAccordion } from './EntireAccordion';
import { Container } from './styles';

export function SectionAbout2() {
  const [pageWidth, setPageWidth] = useState(0)
  const { t } = useContext(LocaleContext)

  useEffect(() => {
    setPageWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setPageWidth(window.innerWidth)
    })
  }, [])

  return (
    <Container>
      <div className="content">
        <h6>{t.aboutSubtitle2}</h6>
        {pageWidth < 516 ? <EntireAccordion /> : <ContentCards />}
      </div>
    </Container>
  )
}

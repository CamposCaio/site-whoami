import { useEffect, useState } from 'react';

import { useLocale } from '@providers/locale';

import { CustomAccordionMobile } from './CustomAccordionMobile';
import { CustomCardsDesktop } from './CustomCardsDesktop';
import { Container } from './styles';

export function AboutPage2() {
  const [pageWidth, setPageWidth] = useState(0)
  const { t } = useLocale()

  useEffect(() => {
    setPageWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setPageWidth(window.innerWidth)
    })
  }, [])

  return (
    <Container>
      {/* <h1>About me</h1> */}
      {/* <div className="content">
        <h6>{t.aboutSubtitle2}</h6>
        {pageWidth < 516 ? <CustomAccordionMobile /> : <CustomCardsDesktop />}
      </div> */}
    </Container>
  )
}

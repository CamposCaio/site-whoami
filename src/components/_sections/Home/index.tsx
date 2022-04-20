import { useEffect, useMemo } from 'react';

import IconArrowForward from '@mui/icons-material/ArrowForwardOutlined';
import IconFileDownload from '@mui/icons-material/FileDownloadOutlined';
import IconKeyboardArrowDown from '@mui/icons-material/KeyboardArrowDownOutlined';
import IconOpenInNew from '@mui/icons-material/OpenInNewOutlined';
import { Button } from '@mui/material';
import { useLocale } from '@providers/locale';
import { scrollController } from '@src/pages';
import { useTheme } from '@src/providers/theme';

import { ParticlesEffect } from './ParticlesEffect';
import { ContainerSection } from './styles';

export function SectionHome() {
  const { t } = useLocale()
  const { activeTheme } = useTheme()
  const particlesEffect = useMemo(() => new ParticlesEffect(), [])

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    particlesEffect.start(ctx)

    window.addEventListener('resize', () => {
      canvas.height = window.innerHeight
      canvas.width = window.innerWidth
    })

    window.addEventListener('mousemove', particlesEffect.handleMouseMove)

    window.addEventListener('scroll', () => {
      window.scrollY === 0 ? particlesEffect.start(ctx) : particlesEffect.stop()
    })
  }, [])

  useEffect(
    () => particlesEffect.setColor(activeTheme.palette.primary.main),
    [activeTheme]
  )

  return (
    <ContainerSection theme={activeTheme}>
      <canvas id="canvas" />
      <div className="content">
        <div className="heading__container">
          <h1 className="heading__title">{t.homeTitle}</h1>
          <h4 className="heading__subtitle">{t.homeSubtitle}</h4>
        </div>

        <div className="container-text">
          <p>{t.homeContentText}</p>
        </div>

        <div className="container-buttons">
          <Button variant="contained">
            <div>{t.homeButtonLearnMore}</div>
          </Button>
          <Button variant="text">
            <div>
              {t.homeButtonPortfolio}
              <IconArrowForward sx={{ ml: '0.5rem', fontSize: '0.9375rem' }} />
            </div>
          </Button>
        </div>
      </div>
      <div id="scroll-down" onClick={() => scrollController.scrollTo('about')}>
        {t.homeScrollDown}
        <IconKeyboardArrowDown fontSize="small" />
      </div>
    </ContainerSection>
  )
}

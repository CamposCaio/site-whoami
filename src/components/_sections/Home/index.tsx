import { useEffect } from 'react';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { Button } from '@mui/material';
import { useLocale } from '@providers/locale';
import { scrollController } from '@src/pages';

import { ParticlesEffect } from './ParticlesEffect';
import { Container, Section } from './styles';

function getElementsByClassName(className: string) {
  return Array.from(
    document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>
  )
}

function changeElementsDisplay(
  elements: HTMLElement[],
  displayType: 'inline-block' | 'none'
) {
  elements.forEach((element) => {
    element.style.display = displayType
  })
}

export function SectionHome() {
  const { t } = useLocale()
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    window.addEventListener('scroll', () => {
      document.getElementById('home__scroll-down').style.display = 'none'
    })
  }, [])

  function handleResize() {
    const viewportWidth = window.innerWidth
    const elementsTitleVariant = getElementsByClassName('js-title-variant')
    const elementsTitle = getElementsByClassName('js-title')

    if (viewportWidth < 516) {
      changeElementsDisplay(elementsTitleVariant, 'inline-block')
      changeElementsDisplay(elementsTitle, 'none')
    } else {
      changeElementsDisplay(elementsTitleVariant, 'none')
      changeElementsDisplay(elementsTitle, 'inline-block')
    }
  }

  return (
    <Section id="home">
      <Container>
        <ParticlesEffect />

        <h4>{t.homeTitleSmall[0]}</h4>
        <br />
        <h4>{t.homeTitleSmall[1]}</h4>
        <br />
        <h1 className="js-title">{t.homeTitleLarge.normal[0]}</h1>
        <h1 className="js-title-variant">{t.homeTitleLarge.variant[0]}</h1>
        <br />
        <h1 className="js-title">{t.homeTitleLarge.normal[1]}</h1>
        <h1 className="js-title-variant">{t.homeTitleLarge.variant[1]}</h1>
        <div className="home__div-buttons">
          <Button variant="contained" color="secondary">
            <FileDownloadOutlinedIcon sx={{ mr: '0.5rem' }} />
            {t.homeButtonDownloadCV}
          </Button>
          <Button
            variant="contained"
            href="https://drive.google.com/file/d/1p6rGQDahJ8CTOpQJqX5APrSnQfDnKXUF/view?usp=sharing"
            target="_blank"
          >
            <OpenInNewOutlinedIcon sx={{ mr: '0.5rem' }} />

            {t.homeButtonOpenCV}
          </Button>
        </div>
      </Container>
      <div id="home__scroll-down" onClick={() => scrollController.scrollTo(1)}>
        {t.homeScrollDown}
        <ArrowDropDownOutlinedIcon />
      </div>
    </Section>
  )
}

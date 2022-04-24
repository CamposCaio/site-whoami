import { useEffect } from 'react'

import { useTheme } from '@providers/theme'
import { darkTheme, lightTheme } from '@src/theme'

import { Container } from './styles'

export function IconTheme() {
  const { activeTheme, setActiveTheme } = useTheme()
  const { mode } = activeTheme.palette

  useEffect(() => {
    const iconTheme = document.querySelector(
      ' #large-top-bar .icon-theme'
    ) as HTMLDivElement

    if (mode === 'light') {
      iconTheme.classList.remove('play-dark')
      iconTheme.classList.add('play-light')
    } else {
      iconTheme.classList.remove('play-light')
      iconTheme.classList.add('play-dark')
    }
  }, [activeTheme])

  return (
    <Container
      className="global__container-icon"
      onClick={() =>
        setActiveTheme(({ palette }) =>
          palette.mode === 'light' ? darkTheme : lightTheme
        )
      }
    >
      <div className="icon-theme"></div>
    </Container>
  )
}

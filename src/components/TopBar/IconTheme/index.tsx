import { useEffect } from 'react';

import { useTheme } from '@providers/theme';
import { Moon, Sun } from '@src/components/_svg';
import { darkTheme, lightTheme } from '@src/theme';

import { Container } from './styles';

export function IconTheme() {
  const { activeTheme, setActiveTheme } = useTheme()

  useEffect(() => {
    const svgContainer = document.querySelector(
      '.svg-container'
    ) as HTMLDivElement

    svgContainer.style.top =
      activeTheme.palette.mode === 'light' ? '-100%' : '0'
  }, [activeTheme])

  return (
    <Container
      id="icon-theme"
      onClick={() =>
        setActiveTheme(
          activeTheme.palette.mode === 'light' ? darkTheme : lightTheme
        )
      }
    >
      <div className="svg-container">
        <Moon color={activeTheme.palette.text.primary} />
        <Sun color={activeTheme.palette.text.primary} />
      </div>
    </Container>
  )
}

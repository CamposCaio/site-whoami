import { useEffect } from 'react';

import { useTheme } from '@providers/theme';
import { Moon, Sun } from '@src/components/_svg';
import { darkTheme, lightTheme } from '@src/theme';

import { Container } from './styles';

export function IconTheme() {
  const { activeTheme, setActiveTheme } = useTheme()
  const { mode } = activeTheme.palette

  useEffect(() => {
    const contentIconTheme = document.getElementById('content-icon-theme')
    contentIconTheme.style.top = mode === 'light' ? '0' : '-100%'
  }, [activeTheme])

  return (
    <Container
      onClick={() =>
        setActiveTheme(({ palette }) =>
          palette.mode === 'light' ? darkTheme : lightTheme
        )
      }
    >
      <div id="content-icon-theme">
        <Sun color={activeTheme.palette.text.primary} />
        <Moon color={activeTheme.palette.text.primary} />
      </div>
    </Container>
  )
}

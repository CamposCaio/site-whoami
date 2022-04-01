import React, { useContext } from 'react';

import Button from '@mui/material/Button';

import { ThemeContext } from '../../../providers/theme';
import { lightTheme } from '../../../theme';
import { Container } from './styles';

export function ButtonToggleTheme() {
  const { activeTheme, toggleTheme } = useContext(ThemeContext)
  function handleToggleTheme() {
    const divSvgTheme = document.getElementById('top-bar__icon-theme')

    if (activeTheme === lightTheme) {
      divSvgTheme.classList.add('play-dark-to-light')
      divSvgTheme.classList.remove('play-light-to-dark')
    } else {
      divSvgTheme.classList.add('play-light-to-dark')
      divSvgTheme.classList.remove('play-dark-to-light')
    }

    toggleTheme()
  }
  return (
    <Container color={activeTheme.palette.secondary.main}>
      <Button onClick={handleToggleTheme} id="top-bar__btn-theme">
        <div id="top-bar__icon-theme"></div>
      </Button>
    </Container>
  )
}

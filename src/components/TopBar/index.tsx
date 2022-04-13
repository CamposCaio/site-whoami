import { useState } from 'react';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useLocale } from '@providers/locale';
import { useTheme } from '@providers/theme';

import { BackgroundMusic } from '../BackgroundMusic';
import { ButtonToggleTheme } from './ButtonToggleTheme';
import { MobileMenuOverlay } from './MobileMenuOverlay';
import { Container } from './styles';

export function TopBar() {
  const { locale, setLocale } = useLocale()
  const { activeTheme } = useTheme()
  const [isOpenMenuOverlay, setIsOpenMenuOverlay] = useState(false)

  function toggleMenu() {
    const divSvgMenu = document.getElementById('icon-menu')
    divSvgMenu.classList.toggle('menu-open-button')
    divSvgMenu.classList.toggle('menu-close-button')
    setIsOpenMenuOverlay(!isOpenMenuOverlay)
  }

  return (
    <Container theme={activeTheme}>
      <MobileMenuOverlay isOpen={isOpenMenuOverlay} toggleMenu={toggleMenu} />
      <div id="container-top-left">
        <BackgroundMusic />
      </div>

      <Button onClick={toggleMenu} variant="text" title="Menu">
        <div id="icon-menu" className="menu-open-button"></div>
      </Button>

      <div id="container-top-right">
        <ButtonToggleTheme />
        <Select
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="en-us">En us</MenuItem>
          <MenuItem value="pt-br">Pt br</MenuItem>
        </Select>
      </div>
    </Container>
  )
}

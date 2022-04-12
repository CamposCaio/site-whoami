import { useContext, useState } from 'react';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@mui/material/NativeSelect';
import Select from '@mui/material/Select';

import { LocaleContext } from '../../../providers/locale';
import { ThemeContext } from '../../../providers/theme';
import { darkTheme, lightTheme } from '../../../theme';
import { Container } from './styles';

export function MobileMenuOverlay({ isOpen }) {
  const { t, locale, setLocale } = useContext(LocaleContext)
  const { activeTheme, setActiveTheme } = useContext(ThemeContext)

  function handleSelectTheme(value: string) {
    setActiveTheme(value === 'light' ? lightTheme : darkTheme)
  }

  return (
    <Container theme={activeTheme} style={{ top: isOpen ? '0' : '-100%' }}>
      <div className="content">
        <div className="div-selects">
          {t.theme.translation}:
          <FormControl size="small">
            <Select
              value={activeTheme.palette.mode}
              onChange={(e) => handleSelectTheme(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ color: '#fff' }}
            >
              <MenuItem value="dark">{t.theme.dark}</MenuItem>
              <MenuItem value="light">{t.theme.light}</MenuItem>
            </Select>
          </FormControl>
          {t.language.translation}
          <FormControl size="small">
            <Select
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ color: '#fff' }}
            >
              <MenuItem value="en-us">En US</MenuItem>
              <MenuItem value="pt-br">Pt BR</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="div-navigation">
          <Button variant="text" color="inherit">
            {t.sideNavbarHome}
          </Button>
          <Button variant="text" color="inherit">
            {t.sideNavbarAbout}
          </Button>
          <Button variant="text" color="inherit">
            {t.sideNavbarTechnologies}
          </Button>
          <Button variant="text" color="inherit">
            {t.sideNavbarPortfolio}
          </Button>
          <Button variant="text" color="inherit">
            {t.sideNavbarContact}
          </Button>
        </div>
      </div>
    </Container>
  )
}

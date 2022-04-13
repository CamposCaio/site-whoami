import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useLocale } from '@providers/locale';
import { useTheme } from '@providers/theme';
import { scrollTo } from '@src/snapScroll';
import { darkTheme, lightTheme } from '@src/theme';

import { Container } from './styles';

export function MobileMenuOverlay({ isOpen, toggleMenu }) {
  const { t, locale, setLocale } = useLocale()
  const { activeTheme, setActiveTheme } = useTheme()

  function handleSelectTheme(value: string) {
    setActiveTheme(value === 'light' ? lightTheme : darkTheme)
  }

  function handleNavigation(page: number) {
    toggleMenu()
    scrollTo(page * window.innerHeight)
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
          <Button
            variant="text"
            color="inherit"
            onClick={() => handleNavigation(0)}
          >
            {t.sideNavbarHome}
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => handleNavigation(1)}
          >
            {t.sideNavbarAbout}
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => handleNavigation(3)}
          >
            {t.sideNavbarTechnologies}
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => handleNavigation(4)}
          >
            {t.sideNavbarPortfolio}
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => handleNavigation(5)}
          >
            {t.sideNavbarContact}
          </Button>
        </div>
      </div>
    </Container>
  )
}

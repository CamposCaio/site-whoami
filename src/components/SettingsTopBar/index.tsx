import { useContext } from 'react';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Button, MenuItem, Select } from '@mui/material';

import { LocaleContext } from '../../providers/locale';
import { ThemeContext } from '../../providers/theme';
import { lightTheme } from '../../theme';
import { Container } from './styles';

export function SettingsTopBar() {
  const { activeTheme, toggleTheme } = useContext(ThemeContext)
  const { locale, setLocale } = useContext(LocaleContext)

  return (
    <Container>
      <Button onClick={toggleTheme} className="btnToggleTheme">
        {activeTheme === lightTheme ? (
          <DarkModeOutlinedIcon fontSize={'small'} />
        ) : (
          <LightModeOutlinedIcon fontSize={'small'} />
        )}
      </Button>
      <Select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{ fontSize: '93.5%' }}
      >
        <MenuItem value="en-us" sx={{ fontSize: '93.5%' }}>
          En US
        </MenuItem>
        <MenuItem value="pt-br" sx={{ fontSize: '93.5%' }}>
          Pt BR
        </MenuItem>
      </Select>
    </Container>
  )
}

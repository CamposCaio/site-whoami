import { Button, MenuItem, Select } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'

import { Container } from './styles'
import { lightTheme } from '../../theme'
import { useContext } from 'react'
import { ThemeContext } from '../../providers/theme'
import { LocaleContext } from '../../providers/locale'

export function TopNav() {
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
        className="select-locale"
      >
        <MenuItem value="en-us">En-Us</MenuItem>
        <MenuItem value="pt-br">Pt-Br</MenuItem>
      </Select>
    </Container>
  )
}

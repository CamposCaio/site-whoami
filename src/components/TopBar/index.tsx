import { useContext } from 'react';

import { MenuItem, Select } from '@mui/material';

import { LocaleContext } from '../../providers/locale';
import { ButtonToggleTheme } from './ButtonToggleTheme';
import { Container } from './styles';

export function TopBar() {
  const { locale, setLocale } = useContext(LocaleContext)

  return (
    <Container>
      <ButtonToggleTheme />
      <Select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="en-us">EN US</MenuItem>
        <MenuItem value="pt-br">PT BR</MenuItem>
      </Select>
    </Container>
  )
}

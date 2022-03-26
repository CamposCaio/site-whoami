import { Button, MenuItem, Select } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'

import en from '../../../public/locales/en-us'
import pt from '../../../public/locales/pt-br'
import { Container } from './styles'
import { lightTheme } from '../../theme'

export function TopNav(props) {
  const t = props.locale === 'en-us' ? en : pt

  const handleChangeLocale = (event) => {
    const locale = event.target.value
    const router = props.router
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <Container>
      <Button onClick={props.toggleTheme} className="btnToggleTheme">
        {props.activeTheme === lightTheme ? (
          <DarkModeOutlinedIcon fontSize={'small'} />
        ) : (
          <LightModeOutlinedIcon fontSize={'small'} />
        )}
      </Button>
      <Select
        value={props.locale}
        onChange={handleChangeLocale}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        className="select-locale"
      >
        <MenuItem value="en-us">en - US</MenuItem>
        <MenuItem value="pt-br">pt - BR</MenuItem>
      </Select>
    </Container>
  )
}

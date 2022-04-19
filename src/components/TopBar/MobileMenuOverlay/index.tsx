import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useLocale } from '@providers/locale';
import { useTheme } from '@providers/theme';
import { AudioOff, AudioOn } from '@src/components/_svg';
import { scrollController } from '@src/pages';
import { useAudio } from '@src/providers/audio';
import { darkTheme, lightTheme } from '@src/theme';

import { Container } from './styles';

export function MobileMenuOverlay({ isOpen, setIsOpen }) {
  const { t, locale, setLocale } = useLocale()
  const { activeTheme, setActiveTheme } = useTheme()
  const { isAudioEnable, setIsAudioEnable } = useAudio()

  function toggleTheme({ target }) {
    const { mode } = activeTheme.palette
    if (target.value === mode) return
    setIsOpen(false)
    setActiveTheme(mode === 'light' ? darkTheme : lightTheme)
  }

  function handleNavigation(page: string) {
    setIsOpen(false)
    scrollController.scrollTo(page)
  }

  return (
    <Container theme={activeTheme} style={{ top: isOpen ? '0' : '-100%' }}>
      <div className="content">
        {isAudioEnable ? (
          <AudioOn
            color={activeTheme.palette.text.primary}
            onClick={() => setIsAudioEnable(false)}
            className="audio-icon"
          />
        ) : (
          <AudioOff
            color={activeTheme.palette.text.primary}
            onClick={() => setIsAudioEnable(true)}
            className="audio-icon"
          />
        )}
        <div className="div-selects">
          {t.theme.translation}:
          <FormControl size="small">
            <Select
              value={activeTheme.palette.mode}
              onChange={toggleTheme}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
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
            >
              <MenuItem value="en-us">EN - US</MenuItem>
              <MenuItem value="pt-br">PT - BR</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="div-navigation">
          <Button
            variant="text"
            color="inherit"
            onClick={() => handleNavigation('home')}
          >
            {t.home}
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => handleNavigation('about')}
          >
            {t.about}
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => handleNavigation('technologies')}
          >
            {t.technologies}
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => handleNavigation('portfolio')}
          >
            {t.portfolio}
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => handleNavigation('contact')}
          >
            {t.contact}
          </Button>
        </div>
      </div>
    </Container>
  )
}

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';

import { Global } from '@emotion/react';
import { Theme } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { getCookie } from '../pages/_app';
import { getGlobalStyle } from '../styles/global';
import { darkTheme, lightTheme } from '../theme';

type PropsThemeContext = {
  activeTheme: Theme
  setActiveTheme: Dispatch<SetStateAction<Theme>>
}

const DEFAULT_VALUE = {
  activeTheme: lightTheme,
  setActiveTheme: () => {},
}

const ThemeContext = createContext<PropsThemeContext>(DEFAULT_VALUE)

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState(lightTheme)
  const globalStyle = getGlobalStyle(activeTheme)

  useEffect(() => {
    const cookieTheme = getCookie('savedTheme')

    if (cookieTheme !== '' && cookieTheme !== activeTheme.palette.mode) {
      setActiveTheme(cookieTheme === 'dark' ? darkTheme : lightTheme)
    }
  }, [])

  useEffect(() => {
    document.cookie = `savedTheme=${activeTheme.palette.mode}`
  }, [activeTheme])

  return (
    <>
      <Global styles={globalStyle} />
      <MuiThemeProvider theme={activeTheme}>
        <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
          {children}
        </ThemeContext.Provider>
      </MuiThemeProvider>
    </>
  )
}

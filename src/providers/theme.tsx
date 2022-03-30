import { createContext } from 'react';

import { Theme } from '@mui/material';

import { lightTheme } from '../theme';

type PropsThemeContext = {
  activeTheme: Theme
  toggleTheme: () => void
}

const DEFAULT_VALUE = {
  activeTheme: lightTheme,
  toggleTheme: () => {},
}

export const ThemeContext = createContext<PropsThemeContext>(DEFAULT_VALUE)

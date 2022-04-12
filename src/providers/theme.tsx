import { createContext, Dispatch, SetStateAction } from 'react';

import { Theme } from '@mui/material';

import { lightTheme } from '../theme';

type PropsThemeContext = {
  activeTheme: Theme
  setActiveTheme: Dispatch<SetStateAction<Theme>>
}

const DEFAULT_VALUE = {
  activeTheme: lightTheme,
  setActiveTheme: () => {},
}

export const ThemeContext = createContext<PropsThemeContext>(DEFAULT_VALUE)

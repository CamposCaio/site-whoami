import { createTheme, Theme } from '@mui/material/styles';

const components: Theme['components'] = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'contained' },
        style: [
          {
            borderRadius: '2px',
            boxShadow: 'none',
            height: '36px',
          },
        ],
      },
      {
        props: { variant: 'text' },
        style: [
          {
            minWidth: '2rem',
          },
        ],
      },
    ],
  },
  MuiSelect: {
    variants: [
      {
        props: { variant: 'outlined' },
        style: [
          {
            fontSize: '81.25%',
          },
        ],
      },
    ],
  },
  MuiPaper: {
    variants: [
      {
        props: {},
        style: [
          {
            borderRadius: '2px',
          },
        ],
      },
    ],
  },
  MuiList: {
    variants: [
      {
        props: {},
        style: [
          {
            padding: 0,
          },
        ],
      },
    ],
  },
  MuiMenuItem: {
    variants: [
      {
        props: {},
        style: [
          {
            fontSize: '81.25%',
          },
        ],
      },
    ],
  },
}

const shadows: Theme['shadows'] = [
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
]

export const lightTheme = createTheme({
  components,
  palette: {
    mode: 'light',
    primary: {
      main: '#247BA0',
    },
    secondary: {
      main: '#13293D',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.7)',
      secondary: 'rgba(0, 0, 0, 0.5)',
    },
  },
  shadows,
})

export const darkTheme = createTheme({
  components,
  palette: {
    mode: 'dark',
    primary: {
      main: '#B68D40',
    },
    secondary: {
      main: '#F4EBD0',
    },
    background: {
      paper: '#181818',
      default: '#181818',
    },
  },
  shadows,
})

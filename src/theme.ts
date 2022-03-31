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

// Create a theme instance.
export const lightTheme = createTheme({
  components,
  palette: {
    mode: 'light',
    primary: {
      main: '#3F51B5',
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.87)',
    },
  },
})

export const darkTheme = createTheme({
  components,
  palette: {
    mode: 'dark',
    primary: {
      main: '#3F51B5',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
})

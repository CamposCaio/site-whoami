import { createTheme, Theme } from '@mui/material/styles';

const baseComponents: Theme['components'] = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'contained' },
        style: [
          {
            borderRadius: '4px',
            boxShadow: 'none',
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
            fontSize: '87.5%',
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
            borderRadius: '4px',
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
            fontSize: '87.5%',
          },
        ],
      },
    ],
  },
}

const lightComponents: Theme['components'] = {
  ...baseComponents,
  MuiOutlinedInput: {
    variants: [
      {
        props: {},
        style: [
          {
            color: 'rgba(0, 0, 0, 0.7)',
          },
        ],
      },
    ],
  },
}

const darkComponents: Theme['components'] = {
  ...baseComponents,
  MuiOutlinedInput: {
    variants: [
      {
        props: {},
        style: [
          {
            color: 'rgba(255, 255, 255, 0.87)',
          },
        ],
      },
    ],
  },
}

export const lightTheme = createTheme({
  components: lightComponents,
  palette: {
    mode: 'light',
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#616161',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.7)',
      secondary: 'rgba(0, 0, 0, 0.5)',
    },
  },
})

export const darkTheme = createTheme({
  components: darkComponents,
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#616161',
    },
    background: {
      paper: '#181818',
      default: '#181818',
    },
  },
})

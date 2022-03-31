import { createTheme } from '@mui/material/styles';

// Create a theme instance.
export const lightTheme = createTheme({
  components: {
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
      ],
    },
  },
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
  components: {
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
      ],
    },
  },
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

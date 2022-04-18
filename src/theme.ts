import { sliderClasses } from '@mui/material/Slider';
import { createTheme, Theme } from '@mui/material/styles';

const components: Theme['components'] = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.variant === 'outlined' && {
          borderColor: theme.palette.primary.main,
          borderRadius: '2px',
          '& > *': {
            zIndex: 2,
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            // zIndex: '-1',
            right: 0,
            width: 0,
            height: '100%',
            backgroundColor: theme.palette.primary.main,
            transition: 'width 0.4s ease',
          },

          '&:hover': {
            color: theme.palette.primary.contrastText,

            '&:after': {
              left: 0,
              width: '100%',
            },
          },
        }),

        ...(ownerState.variant === 'text' && {
          overflow: 'hidden',
          div: {
            position: 'relative',
            display: 'flex',
            width: 'max-content',
          },
          '&:hover': {
            div: {
              animation:
                'text-out 0.2s ease-out forwards, 0.4s text-in 0.2s ease-in forwards',
            },
          },

          '@keyframes text-out': {
            to: {
              transform: 'translateY(-112%)',
            },
          },
          '@keyframes text-in': {
            '0%': {
              transform: 'translateY(100%)',
            },
            '40%': {
              transform: 'translateY(-12%)',
            },
            '100%': {
              transform: 'translateY(0%)',
            },
          },
        }),
      }),
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: ({ theme }) => ({
        fontSize: '81.25%',
        padding: 0,
        paddingRight: '2.5rem',
        color: theme.palette.text.secondary,
      }),
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: '2px',
        backgroundImage: 'none',
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: '81.25%',
        backgroundColor: 'transparent',
      },
    },
  },
}

const shadows = new Array(25).fill('')

export const lightTheme = createTheme({
  components,
  // @ts-ignore
  shadows,
  palette: {
    mode: 'light',
    text: {
      primary: '#000000',
    },
    primary: {
      main: '#512DA8',
      light: '#673AB7',
      dark: '#512DA8',
    },
  },
})

export const darkTheme = createTheme({
  components,
  // @ts-ignore
  shadows,
  palette: {
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
    },
    primary: {
      main: '#2196F3',
      light: '#BBDEFB',
      dark: '#1976D2',
    },
  },
})

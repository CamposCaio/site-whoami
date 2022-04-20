import { sliderClasses } from '@mui/material/Slider';
import { createTheme, Theme } from '@mui/material/styles';

const components: Theme['components'] = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        minWidth: '128px',
        fontSize: '0.875rem',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        height: '2.4rem',
        borderRadius: '1.2rem',
        paddingInline: '1.5rem',
        position: 'relative',
        overflow: 'hidden',

        div: {
          zIndex: 2,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
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

        ...(ownerState.variant === 'contained' && {
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            height: 0,
            width: '100%',
            backgroundColor: theme.palette.primary.dark,
            transition: 'height 0.4s ease',
          },
          // '&:hover': {
          //   backgroundColor: theme.palette.primary.main,
          //   '&:after': {
          //     height: '100%',
          //   },
          //   div: {
          //     animation:
          //       'text-out 0.2s ease-out forwards, 0.4s text-in 0.2s ease-in forwards',
          //   },
          // },
        }),
      }),
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: ({ theme }) => ({
        fontSize: '0.875rem',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 200,
        padding: 0,
        paddingRight: '2.5rem',
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
        fontSize: '0.875rem',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 200,
        backgroundColor: 'transparent',
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontWeight: 300,
        fontSize: '1.8rem',
        paddingLeft: '3rem',
        paddingTop: '1rem',
      },
    },
  },

  MuiAlert: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontWeight: 300,
        fontSize: '0.9375rem',
        paddingBlock: '0.25rem',
        '@media (max-width: 1080px)': {
          backgroundColor: theme.palette.background.default,
        },
      }),
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
      secondary: 'rgba(0, 0, 0, 0.8)',
      disabled: 'rgba(0, 0, 0, 0.6)',
    },
    divider: 'rgba(0, 0, 0, 0.4)',
  },
})

export const darkTheme = createTheme({
  components,
  // @ts-ignore
  shadows,
  palette: {
    mode: 'dark',
    // text: {
    //   primary: '#FFFFFF',
    // },
    // primary: {
    //   main: '#2196F3',
    //   light: '#BBDEFB',
    //   dark: '#1976D2',
    // },
  },
})

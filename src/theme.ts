import { createTheme, Theme } from '@mui/material/styles'

const components: Theme['components'] = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        minWidth: '128px',
        fontSize: '0.875rem',
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: 400,
        height: '2.4rem',
        borderRadius: '1.2rem',
        paddingInline: '1.5rem',
        position: 'relative',
        overflow: 'hidden',

        div: {
          zIndex: 2,
        },

        ...(ownerState.variant === 'contained' && {
          '&:after': {
            content: '""',
            position: 'absolute',
            left: 0,
            height: '100%',
            width: 0,
            backgroundColor: theme.palette.primary.dark,
            transition: 'width 0.4s ease',
          },
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            '&:after': {
              width: '100%',
            },
          },
        }),
      }),
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        fontSize: '0.8125rem',
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: 200,
        padding: 0,
        paddingRight: '2.5rem',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
    },
  },
  // MuiDialog: {
  //   styleOverrides: {
  //     root: {
  //       '.MuiPaper-root': {
  //         padding: '1.5rem',
  //         maxWidth: '510px',
  //       },
  //       '.MuiTypography-root': {
  //         padding: '0',
  //         fontFamily: '"Montserrat", sans-serif',
  //         fontWeight: 300,
  //         fontSize: '2rem',
  //         lineHeight: '100%',
  //       },
  //       '.MuiDialogContent-root': {
  //         padding: '0',
  //         marginBlock: '1rem 1.5rem',
  //       },
  //       '.MuiDialogActions-root': {
  //         padding: 0,
  //       },
  //     },
  //   },
  // },
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
        fontSize: '0.8125rem',
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: 200,
        backgroundColor: 'transparent',
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: '"Open Sans", sans-serif',
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

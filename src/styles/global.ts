import { css } from '@emotion/react'
import { Theme } from '@mui/material/styles/createTheme'

export const getGlobalStyleTheme = (activeTheme: Theme) => {
  const globalStyle = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      @media (max-width: 1080px) {
        font-size: 93.75%;
      }
      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

    body {
      -webkit-font-smoothing: antialiased;
      background-color: ${activeTheme.palette.background.default};
    }

    body,
    input,
    textarea,
    button {
      font-family: Roboto;
      font-weight: 400;
      color: ${activeTheme.palette.text.primary};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: 700;
      font-family: 'Arvo', serif;
      display: inline-block;
    }

    h1 {
      text-align: left;
      font-size: 3rem;
      @media (max-width: 620px) {
        font-size: 2.5rem;
      }
    }

    h2 {
      text-align: left;
      font-size: 1.5rem;
      @media (max-width: 620px) {
        font-size: 1.2rem;
      }
    }

    button {
      cursor: pointer;
    }
    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    fieldset {
      outline: 0 !important;
      border: none !important;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  `
  return globalStyle
}

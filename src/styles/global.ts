import { css } from '@emotion/react';
import { Theme } from '@mui/material/styles/createTheme';

export const getGlobalStyleTheme = (activeTheme: Theme) => {
  const globalStyle = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      white-space: pre-line;
      letter-spacing: 1px;
      scroll-behavior: smooth;
      line-height: 1.5rem;
      word-spacing: 4px;
      text-align: justify;
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
      font-weight: 800;
      font-family: 'Kanit', sans-serif;
      color: ${activeTheme.palette.secondary.main};
      display: inline;
      text-align: left;
      letter-spacing: 0px;
    }

    b {
      color: ${activeTheme.palette.primary.main};
      font-weight: 500;
    }

    h1 {
      text-transform: uppercase;
      font-size: 56px;
      line-height: 75%;
    }

    h2 {
      text-transform: uppercase;
      font-size: 2rem;
    }

    h3 {
      font-weight: 300;
      font-size: 1.25rem;
      line-height: 120%;
      @media (max-width: 516px) {
        font-size: 1rem;
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

    .global--color-primary {
      color: ${activeTheme.palette.primary.main};
    }

    .global--color-secondary {
      color: ${activeTheme.palette.secondary.main};
    }
  `
  return globalStyle
}

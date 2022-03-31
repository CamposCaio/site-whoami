import { css } from '@emotion/react';
import { Theme } from '@mui/material/styles/createTheme';

export const getGlobalStyleTheme = (activeTheme: Theme) => {
  const globalStyle = css`
    :root {
      --primary-color: #3f51b3;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      white-space: pre-line;
      letter-spacing: 0.8px;
      scroll-behavior: smooth;
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

    .MuiButton-root {
      border-radius: 2px;
      box-shadow: none;
      height: 36px;
    }

    .MuiButton-root:hover {
      box-shadow: none;
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
      display: inline;
      text-align: left;
      letter-spacing: 0px;
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
  `
  return globalStyle
}

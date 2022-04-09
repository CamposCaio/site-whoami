import { css } from '@emotion/react';
import { Theme } from '@mui/material/styles/createTheme';

export const getGlobalStyleTheme = (activeTheme: Theme) => {
  const globalStyle = css`
    :root {
      --primary: ${activeTheme.palette.primary.main};
      --secondary: ${activeTheme.palette.secondary.main};
      --background: ${activeTheme.palette.background.default};
      --text: ${activeTheme.palette.text.primary};
      --text-secondary: ${activeTheme.palette.text.secondary};
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      white-space: pre-line;
      letter-spacing: 0.75px;
      /* scroll-behavior: smooth; */
      line-height: 1.25rem;
      word-spacing: 3px;
      text-align: justify;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    html::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    html {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      @media (max-width: 1080px) {
        font-size: 93.75%;
      }
      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

    body {
      /* position: relative; */
      -webkit-font-smoothing: antialiased;
      background-color: var(--background);
    }

    body,
    input,
    textarea,
    button {
      font-family: Roboto;
      font-weight: 400;
      color: var(--text);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: 700;
      font-family: 'Lato', sans-serif;
      display: inline;
      text-align: left;
      letter-spacing: 0px;
    }

    h1 {
      text-transform: uppercase;
      font-size: 3rem;
      line-height: 100%;
      color: var(--primary);
    }

    h2 {
      text-transform: uppercase;
      font-size: 2.25rem;
      line-height: 2rem;
      color: var(--primary);
    }

    h3 {
      text-transform: uppercase;
      font-size: 1.25rem;
      line-height: 1.25rem;
      font-weight: 400;
      color: var(--primary);
    }

    h4 {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 120%;
      @media (max-width: 516px) {
        font-size: 1rem;
      }
    }

    h5 {
      font-weight: 700;
      font-size: 1.1rem;
    }

    h6 {
      font-size: 1rem;
      line-height: 1rem;
      font-weight: 400;
      color: var(--text-secondary);
    }

    button {
      cursor: pointer;
    }
    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    p {
      padding-top: 1rem;
    }
  `
  return globalStyle
}

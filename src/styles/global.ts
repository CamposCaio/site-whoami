import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export function getGlobalStyle({ palette }: Theme) {
  return css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
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
      -webkit-font-smoothing: antialiased;
      background-color: ${palette.background.default};
    }

    body,
    input,
    textarea,
    select,
    button {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      white-space: pre-line;
      letter-spacing: 1.5px;
      line-height: 150%;
      /* letter-spacing: 0.75px;
      line-height: 1.25rem; */
      /* word-spacing: 107.5%; */
      color: ${palette.text.primary};
      text-align: justify;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      letter-spacing: 0px;
      font-weight: 200;
      font-family: 'Poppins', sans-serif;
      line-height: 125%;
    }

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2.25rem;
      padding-bottom: 2rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    h4 {
      font-size: 1.2rem;
    }

    h6 {
      font-size: 1rem;
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
      cursor: pointer;
    }
  `
}

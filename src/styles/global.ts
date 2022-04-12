import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export function getGlobalStyle({ palette }: Theme) {
  return css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      white-space: pre-line;
      letter-spacing: 0.75px;
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
      -webkit-font-smoothing: antialiased;
      background-color: ${palette.background.default};
    }

    body,
    input,
    textarea,
    select,
    button {
      font-family: Roboto;
      font-weight: 400;
      color: ${palette.text.primary};
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
      text-align: left;
      letter-spacing: 0px;
    }

    h1,
    h2,
    h3 {
      text-transform: uppercase;
      color: ${palette.primary.main};
    }

    h1 {
      font-size: 3rem;
      line-height: 100%;
    }

    h2 {
      font-size: 2.25rem;
      line-height: 2rem;
    }

    h3 {
      font-size: 1.25rem;
      line-height: 1.25rem;
      font-weight: 400;
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
      font-size: 1.1rem;
    }

    h6 {
      font-size: 1rem;
      line-height: 1rem;
      padding-bottom: 2rem;
      font-weight: 400;
      color: ${palette.secondary.main};
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
}

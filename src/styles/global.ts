import { css } from '@emotion/react'
import { Theme } from '@mui/material'

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
      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      white-space: pre-line;
      line-height: 150%;
      color: ${palette.text.primary};
      text-align: justify;
    }

    b {
      font-weight: 400;
      color: ${palette.primary.main};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: 200;
      font-family: 'Montserrat', sans-serif;
      line-height: 125%;
      text-align: left;
    }

    h1 {
      font-size: 3.6rem;
      line-height: 100%;
    }

    h2 {
      font-size: 2.25rem;
      padding-bottom: 2rem;
    }

    h3 {
      font-size: 1.375rem;
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

    .global__container-icon {
      position: relative;
      left: 0;
      width: 2rem;
      height: 2rem;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.5;
        background-color: rgba(127, 127, 127, 0.38);
      }
    }
  `
}

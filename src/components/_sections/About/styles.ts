import styled from '@emotion/styled';

export const Container = styled.section`
  height: 200vh;
  width: 100%;
  position: relative;

  #sticky-container {
    position: absolute;
    width: 100%;
    height: calc(120vh + 2rem);
  }

  h2 {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    width: min(100% - 4rem, 720px);
    margin-inline: auto;
    padding-top: 20vh;
  }
`

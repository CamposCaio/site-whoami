import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 100vh;
  left: 50%;
  transform: translateX(-50%);
  height: calc(130vh + 3rem);
  width: min(100% - 4rem, 720px);

  h2 {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    width: 100%;
    padding-top: 20vh;
    padding-bottom: 1rem;
    display: inline-block;
  }
`

import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 100vh;
  height: calc(130vh + 3rem);
  width: 100%;
  max-width: 516px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 2rem;

  h2 {
    display: inline-block;
    width: 100%;
    padding: 20vh 0 1rem 0;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
  }
`

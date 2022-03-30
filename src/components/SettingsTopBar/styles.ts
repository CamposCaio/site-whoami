import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  right: 5rem;
  display: flex;
  align-items: center;
  z-index: 10;
  width: 10rem;
  opacity: 0.8;
  font-size: 93.5%;

  @media (max-width: 1080px) {
    right: 0;
  }

  .btnToggleTheme {
    height: 2rem;
    min-width: 2rem;
    margin-right: 0.5rem;
  }
`

import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  right: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;

  @media (max-width: 1080px) {
    right: 0;
  }

  .btnToggleTheme {
    height: 2rem;
    margin-right: 0.5rem;
  }
`

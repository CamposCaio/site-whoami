import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: min(100% - 4rem, 630px);

  p {
    padding-block: 0.5rem;
  }

  button {
    margin-top: 2rem;
  }
`

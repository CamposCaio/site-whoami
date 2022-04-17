import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: min(100% - 6rem, 630px);

  p {
    padding-block: 0.5rem;
  }

  button {
    margin-top: 2rem;
  }
`

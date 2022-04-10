import styled from '@emotion/styled';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;

  .content {
    margin-top: calc(20vh + 2rem);
    width: min(100% - 4rem, 720px);
  }
`

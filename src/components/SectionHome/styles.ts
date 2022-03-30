import styled from '@emotion/styled';

export const Container = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: inline-block;
  padding: 0 2rem;
  transform: translateY(clamp(-20%, -50vh + 225px, 0%));

  & Button {
    margin-top: 2rem;
  }
`

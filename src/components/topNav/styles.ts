import styled from '@emotion/styled'

export const Container = styled.div`
  position: fixed;
  right: clamp(0px, 10vw - 3rem, 5rem);
  display: flex;
  align-items: center;
  z-index: 9;

  .btnToggleTheme {
    height: 2rem;
    min-width: 2rem;
  }
`

import styled from '@emotion/styled'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .hero-content {
    display: inline-block;
    padding: 0 1rem;
    position: relative;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%) !important;

    & Button {
      margin-top: 2rem;
    }
  }
`

import styled from '@emotion/styled'

export const Container = styled.div`
  position: fixed;
  z-index: 99;
  left: calc((100vw - 1080px) / 2 + 2rem);
  top: 3.5rem;

  @media (max-width: 1080px) {
    top: 5rem;
    left: 3rem;
    width: fit-content;
    max-width: calc(100vw - 6rem);
  }

  #alert-music {
    a {
      font-weight: 400;
      color: ${({ theme }: any) => theme.palette.primary.main};
      transition: color 0.2s ease;
      &:hover {
        color: ${({ theme }: any) => theme.palette.primary.light};
      }
    }
  }
`

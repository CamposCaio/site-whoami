import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  z-index: 11;
  right: 3rem;
  top: 4rem;

  @media (max-width: 1080px) {
    top: 5rem;
    width: fit-content;
    max-width: calc(100vw - 6rem);
  }

  #alert-music {
    a {
      font-weight: 400;
      transition: color 0.2s ease;
      &:hover {
        color: ${({ theme }: any) => theme.palette.primary.main};
      }
    }
  }
`

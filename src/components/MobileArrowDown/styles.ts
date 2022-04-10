import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  bottom: 1.5rem;
  transition: all 0.2s;

  @media (min-width: 1201px) {
    display: none;
  }

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`

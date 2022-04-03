import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  right: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;

  fieldset {
    outline: 0 !important;
    border: none !important;
  }

  @media (max-width: 1080px) {
    right: 0;
  }
`

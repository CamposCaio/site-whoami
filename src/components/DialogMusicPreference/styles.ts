import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  gap: 1.5rem;
  /* justify-content: center; */

  @media (max-width: 510px) {
    flex-direction: column;
  }
`

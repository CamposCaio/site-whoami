import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  overflow: hidden;

  .svg-container {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.4s ease;

    &:hover {
      opacity: 0.5;
    }
  }
`

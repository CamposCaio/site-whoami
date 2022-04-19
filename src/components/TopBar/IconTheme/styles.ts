import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  overflow: hidden;
  transition: opacity 0.2s;
  cursor: pointer;

  #content-icon-theme {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    display: flex;
    flex-direction: column;
    transition: top 0.4s;

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  &:hover {
    opacity: 0.5;
  }
`

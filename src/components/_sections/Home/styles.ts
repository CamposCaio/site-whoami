import styled from '@emotion/styled';

export const ContainerSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  #canvas {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    opacity: 0.5;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .cv__container span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-block: 0.5rem;
  }

  .cv__buttons-container {
    display: flex;
    gap: 1rem;
  }

  #scroll-down {
    position: absolute;
    left: 50%;
    bottom: 1rem;
    color: ${({ theme }: any) => theme.palette.text.secondary};
    transform: translateX(-50%) !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: ${({ theme }: any) => theme.palette.text.primary};
    }

    svg {
      position: relative;
      animation: arrow-scroll-animation 2s infinite;
    }

    @keyframes arrow-scroll-animation {
      0% {
        top: 0;
      }
      20% {
        top: 0.5rem;
      }
      40% {
        top: 0;
      }
    }
  }
`

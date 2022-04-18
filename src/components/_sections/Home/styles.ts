import styled from '@emotion/styled';

export const ContainerSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  #canvas {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    opacity: ${({ theme }: any) =>
      theme.palette.mode === 'light' ? 0.38 : 0.2};
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-inline: 2rem;
  }

  .heading__title {
    text-align: justify;
    @media (max-width: 610px) {
      width: min-content;
    }
  }

  .cv__span-content svg {
    @media (max-width: 330px) {
      display: none;
    }
  }

  .cv__span-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-block: 0.5rem;
  }

  .cv__buttons-container {
    display: flex;
    gap: 1rem;

    @media (max-width: 610px) {
      flex-direction: column;
    }
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

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
      theme.palette.mode === 'light' ? 0.45 : 0.3};
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-inline: 2rem;
  }

  .heading__title {
    text-align: justify;
    margin-bottom: 0.5rem;
    @media (max-width: 610px) {
      width: min-content;
    }
  }

  .container-buttons {
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

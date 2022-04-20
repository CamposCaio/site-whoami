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
    padding-inline: 2rem;
    @media (max-width: 780px) {
      max-width: 360px;
    }
  }

  .heading__title {
    text-align: justify;
  }

  .container-text {
    color: ${({ theme }: any) => theme.palette.text.secondary};
    width: 40ch;
    @media (max-width: 780px) {
      width: 100%;
    }
    padding-block: 4rem 1rem;
  }

  .container-buttons {
    display: flex;
    gap: 1rem;

    @media (max-width: 780px) {
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

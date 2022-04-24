import styled from '@emotion/styled'

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
    opacity: 0.4;
  }

  .content {
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
    padding-block: 4rem 2rem;
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
    z-index: 10;
    bottom: 1rem;
    height: 24px;
    right: max(3rem, calc((100vw - 1080px) / 2) + 2.8rem);
    transform: translate(50%, 50%) rotate(-90deg) translate(50%, -50%);
    color: ${({ theme }: any) => theme.palette.primary.main};
    display: flex;
    align-items: flex-start;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: ${({ theme }: any) => theme.palette.primary.light};

      &:after {
        background-color: ${({ theme }: any) => theme.palette.primary.light};
      }
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: -1rem;
      background-color: ${({ theme }: any) => theme.palette.primary.main};
      width: 0;
      /* width: calc(100% + 1rem); */
      animation: scroll 2s ease infinite;
      height: 1px;
    }

    @keyframes scroll {
      0% {
        width: 0;
        left: 100%;
      }
      50% {
        width: calc(100% + 1rem);
        left: -1rem;
      }
      100% {
        width: 0;
      }
    }

    @media (max-width: 610px) {
      display: none;
    }
    /* position: absolute;
    left: 50%;
    bottom: 2rem;
    font-size: 23px;
    color: ${({ theme }: any) => theme.palette.text.disabled};
    transform: translateX(-50%) !important;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease;

    svg:nth-of-type(2) {
      position: absolute;
      font-size: 16px;
      left: 3px;
      top: 1.6rem;
      animation: arrow-scroll-animation 2s infinite;
    }

    @keyframes arrow-scroll-animation {
      0% {
        top: 1.6rem;
      }
      20% {
        top: 1.85rem;
      }
      40% {
        top: 1.6rem;
      }
    } */
  }
`

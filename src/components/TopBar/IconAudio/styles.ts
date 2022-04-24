import styled from '@emotion/styled'

export const Container = styled.div`
  .container-audio-off,
  .container-audio-on {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    width: 1em;
    height: 1em;
    overflow: hidden;
    transition: opacity 0.4s;
  }

  .container-audio-on {
    opacity: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & span {
      padding-right: 1px;
      height: 100%;
      background-color: ${({ theme }: any) => theme.palette.text.secondary};

      &:nth-of-type(1) {
        animation: volume-animation 1s ease infinite;
      }
      &:nth-of-type(2) {
        animation: volume-animation 1s ease infinite;
        animation-delay: 0.5s;
      }
      &:nth-of-type(3) {
        animation: volume-animation 1s ease infinite;
        animation-delay: 0.25s;
      }
      &:nth-of-type(4) {
        animation: volume-animation 1s ease infinite;
        animation-delay: 0.75s;
      }

      @keyframes volume-animation {
        0% {
          height: 0;
        }

        33% {
          height: 100%;
        }

        100% {
          height: 0;
        }
      }
    }
  }
`

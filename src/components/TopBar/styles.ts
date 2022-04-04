import styled from '@emotion/styled'

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  #icon-audio-control {
    background-color: ${(props) => props.color};
    -webkit-mask-image: url(svg/icon-audio-control.svg);
    mask-image: url(svg/icon-audio-control.svg);
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-position: calc(-24px * 9) 0px;
    padding-bottom: 100%;
    width: 24px;
    height: 24px;
    animation-duration: 300ms;
    animation-timing-function: steps(9);
    animation-fill-mode: forwards;
  }

  @keyframes play-button {
    0% {
      mask-position: calc(-24px * 9) 0px;
    }
    100% {
      mask-position: 0px 0px;
    }
  }

  @keyframes pause-button {
    0% {
      mask-position: 0px 0px;
    }
    100% {
      mask-position: calc(-24px * 9) 0px;
    }
  }

  .play-button {
    animation-name: play-button;
  }

  .pause-button {
    animation-name: pause-button;
  }
  #container-top-left {
    display: flex;
    align-items: center;
    height: 48px;
  }

  #container-top-right {
    display: flex;
    align-items: center;
    height: 48px;

    fieldset {
      outline: 0 !important;
      border: none !important;
    }

    @media (max-width: 1080px) {
      right: 0;
    }
  }
`

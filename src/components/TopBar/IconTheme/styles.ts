import styled from '@emotion/styled'

export const Container = styled.div`
  .icon-theme {
    width: 18px;
    height: 18px;
    background-color: ${({ theme }: any) => theme.palette.text.primary};
    -webkit-mask-image: url(svg/animation-theme.svg);
    mask-image: url(svg/animation-theme.svg);
    mask-size: auto 100%;
    mask-repeat: no-repeat;
    mask-position: calc(-18px * 18) 0px;
    animation-duration: 300ms;
    animation-timing-function: steps(18);
    animation-fill-mode: forwards;

    &.play-dark {
      animation-name: play-light-to-dark;
    }

    &.play-light {
      animation-name: play-dark-to-light;
    }
  }

  @keyframes play-light-to-dark {
    0% {
      mask-position: calc(-18px * 18) 0px;
    }
    100% {
      mask-position: 0px 0px;
    }
  }
  @keyframes play-dark-to-light {
    0% {
      mask-position: 0px 0px;
    }
    100% {
      mask-position: calc(-18px * 18) 0px;
    }
  }
`

import styled from '@emotion/styled';

export const Container = styled.div`
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    opacity: 0.5;
  }

  #icon-audio {
    background-color: ${({ theme }: any) => theme.palette.text.primary};
    -webkit-mask-image: url(svg/audio.svg);
    mask-image: url(svg/audio.svg);
    mask-size: cover;
    mask-repeat: no-repeat;
    padding-bottom: 100%;
    width: 18px;
    height: 18px;
    animation-duration: 300ms;
    animation-timing-function: steps(18);
    animation-fill-mode: forwards;
  }

  .on {
    animation-name: turn-on;
  }

  .off {
    animation-name: turn-off;
  }

  @keyframes turn-on {
    0% {
      mask-position: calc(18 * -18px) 0px;
    }
    100% {
      mask-position: 0px 0px;
    }
  }

  @keyframes turn-off {
    0% {
      mask-position: 0px 0px;
    }
    100% {
      mask-position: calc(-18 * 18px) 0px;
    }
  }
`

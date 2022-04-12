import styled from '@emotion/styled';

export const Container = styled.div`
  #bg-music-icon {
    background-color: ${({ theme }: any) => theme.palette.text.primary};
    -webkit-mask-image: url(svg/icon-audio-control.svg);
    mask-image: url(svg/icon-audio-control.svg);
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-position: calc(-22px * 18) 0px;
    padding-bottom: 100%;
    width: 22px;
    height: 22px;
    animation-duration: 300ms;
    animation-timing-function: steps(18);
    animation-fill-mode: forwards;

    @media (max-width: 1200px) {
      background-color: #fff;
    }
  }

  .playing {
    animation-name: animation-playing;
  }

  .paused {
    animation-name: animation-paused;
  }

  @keyframes animation-playing {
    0% {
      mask-position: calc(-22px * 18) 0px;
    }
    100% {
      mask-position: 0px 0px;
    }
  }

  @keyframes animation-paused {
    0% {
      mask-position: 0px 0px;
    }
    100% {
      mask-position: calc(-22px * 18) 0px;
    }
  }
`

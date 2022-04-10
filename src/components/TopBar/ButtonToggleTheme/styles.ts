import styled from '@emotion/styled';

export const Container = styled.div`
  #top-bar__btn-theme {
    height: 2rem;
    margin-right: 0.5rem;
  }

  #top-bar__icon-theme {
    background-color: ${(props) => props.color};
    -webkit-mask-image: url(svg/icon-theme.svg);
    mask-image: url(svg/icon-theme.svg);
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-position: calc(-17px * 18) 0px;
    padding-bottom: 100%;
    width: 17px;
    height: 17px;
    animation-duration: 300ms;
    animation-timing-function: steps(18);
    animation-fill-mode: forwards;
  }

  @keyframes play-light-to-dark {
    0% {
      mask-position: calc(-17px * 18) 0px;
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
      mask-position: calc(-17px * 18) 0px;
    }
  }

  .play-light-to-dark {
    animation-name: play-light-to-dark;
  }

  .play-dark-to-light {
    animation-name: play-dark-to-light;
  }
`

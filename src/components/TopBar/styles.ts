import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  @media (max-width: 1200px) {
    background-color: ${(props: any) => props.theme.palette.primary.main};
  }

  #icon-menu {
    background-color: #fff;
    -webkit-mask-image: url(svg/icon-menu.svg);
    mask-image: url(svg/icon-menu.svg);
    mask-size: cover;
    mask-repeat: no-repeat;
    /* mask-position: calc(-22px * 18) 0px; */
    padding-bottom: 100%;
    width: 20px;
    height: 20px;
    animation-duration: 300ms;
    animation-timing-function: steps(18);
    animation-fill-mode: forwards;

    @media (min-width: 1201px) {
      display: none;
    }
  }

  @keyframes menu-close-button {
    0% {
      mask-position: 0px 0px;
    }
    100% {
      mask-position: calc(-20px * 18) 0px;
    }
  }

  @keyframes menu-open-button {
    0% {
      mask-position: calc(-20px * 18) 0px;
    }
    100% {
      mask-position: 0px 0px;
    }
  }

  .menu-close-button {
    animation-name: menu-close-button;
  }

  .menu-open-button {
    animation-name: menu-open-button;
  }

  #container-top-left {
    display: flex;
    align-items: center;
    height: 48px;
  }

  #container-top-right {
    @media (max-width: 1200px) {
      display: none;
    }

    display: flex;
    align-items: center;
    height: 48px;

    fieldset {
      outline: 0 !important;
      border: none !important;
    }

    /* @media (max-width: 1080px) {
      right: 0;
    } */
  }
`

import styled from '@emotion/styled';

export const AuthorStamp = styled.div`
  /* background-color: red; */
  position: fixed;
  top: 50vh;
  height: clamp(26px, calc(50vw - 1200px / 2), 326px);
  transform: translate(-50%, -50%) rotate(-90deg) translateY(50%);
  font-size: 93.75%;
  color: ${({ theme }: any) => theme.palette.text.secondary};
  display: flex;
  align-items: flex-end;

  &:after {
    content: '';
    position: absolute;
    background-color: ${({ theme }: any) => theme.palette.text.disabled};
    width: 50vh;
    height: 1px;
    margin-left: calc(100% + 8px);
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1080px) {
    height: 25px;
  }

  @media (max-width: 720px) {
    height: 24px;
  }
`

/* #icon-menu {
    background-color: #fff;
    -webkit-mask-image: url(svg/icon-menu.svg);
    mask-image: url(svg/icon-menu.svg);
    mask-size: cover;
    mask-repeat: no-repeat;
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
  } */

export const Navbar = styled.nav`
  position: fixed;
  z-index: 10;
  left: 50%;
  top: 1rem;
  transform: translateX(-50%);
  display: flex;
  align-content: center;
  gap: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-size: 87.5%;
  text-transform: uppercase;

  a:hover {
    color: ${({ theme }: any) => theme.palette.text.secondary};
  }

  a.active {
    color: ${({ theme }: any) => theme.palette.text.disabled};
  }

  .marker {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${({ theme }: any) => theme.palette.text.disabled};
    transition: all 0.4s;
  }
`

export const Settings = styled.div`
  position: fixed;
  z-index: 10;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  fieldset {
    outline: 0 !important;
    border: none !important;
  }
`

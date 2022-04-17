import styled from '@emotion/styled';

export const AuthorStamp = styled.div`
  /* background-color: red; */
  position: fixed;
  z-index: 10;
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

export const DesktopMenu = styled.div`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  width: 100%;
  height: 4rem;
  overflow: hidden;

  @media (max-width: 1080px) {
    display: none;
  }

  #navbar {
    position: absolute;
    right: 50vw;
    top: 1rem;
    width: max-content;
    transform: translateX(50%) !important;
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
  }

  #settings {
    position: absolute;
    right: 3rem;
    top: 1rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    fieldset {
      outline: 0 !important;
      border: none !important;
    }
  }
`
export const ToggleMenu = styled.div`
  position: fixed;
  z-index: 10;
  right: 1rem;
  top: 1rem;
  cursor: pointer;

  @media (min-width: 1081px) {
    display: none;
  }
`

import styled from '@emotion/styled';

export const AuthorStamp = styled.div`
  position: fixed;
  z-index: 10;
  top: 50vh;
  height: max(26px, calc(50vw - 1080px / 2));
  transform: translate(-50%, -50%) rotate(-90deg) translateY(50%);
  color: ${({ theme }: any) => theme.palette.text.secondary};
  display: flex;
  align-items: flex-end;

  &:after {
    content: '';
    position: absolute;
    background-color: ${({ theme }: any) => theme.palette.divider};
    width: 50vh;
    height: 1px;
    margin-left: calc(100% + 4px);
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1080px) {
    height: 25px;
  }

  @media (max-width: 720px) {
    height: 24px;
  }

  @media (max-width: 610px) {
    display: none;
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
    font-size: 0.875rem;
    text-transform: uppercase;

    a:hover {
      color: ${({ theme }: any) => theme.palette.text.secondary};
    }

    a.active {
      color: ${({ theme }: any) => theme.palette.text.disabled};
      cursor: default;
    }
  }

  #settings {
    position: absolute;
    right: 3rem;
    top: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    fieldset {
      outline: 0 !important;
      border: none !important;
    }
  }
`

import styled from '@emotion/styled'

export const Container = styled.div`
  position: fixed;
  z-index: 99;
  left: 50%;
  top: 0.5rem;
  transform: translateX(-50%) !important;
  width: 1080px;
  padding-inline: 2rem;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1080px) {
      display: none;
    }
    .container-icon-audio {
      flex-basis: 200px;
    }

    .navbar {
      display: flex;
      align-content: center;
      gap: 2rem;
      font-family: 'Open Sans', sans-serif;
      font-weight: 200;
      font-size: 0.8125rem;
      text-transform: uppercase;

      a:hover {
        color: ${({ theme }: any) => theme.palette.text.secondary};
      }

      a.active {
        color: ${({ theme }: any) => theme.palette.text.disabled};
        cursor: default;
      }
    }

    .settings {
      flex-basis: 200px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 2rem;

      fieldset {
        outline: 0 !important;
        border: none !important;
      }
    }
  }
`

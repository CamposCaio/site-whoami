import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  left: calc(100vw - 15rem);
  height: 400vh;

  @media (max-width: 1080px) {
    display: none;
  }

  .container-sticky {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;

    #side-navbar__div-links {
      opacity: 0.8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-left: 1px solid;
      border-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          ${(props) => props.color} 15%,
          ${(props) => props.color} 85%,
          rgba(0, 0, 0, 0)
        )
        1 100%;
      padding: 2rem 0;

      a {
        filter: opacity(50%);
        font-weight: 400;
        padding: 0.75rem 1.5rem;
        font-size: 81.25%;
        text-transform: uppercase;
        transition: filter 0.2s;
      }

      a:hover,
      .link-active {
        filter: opacity(100%);
      }
    }
  }
`

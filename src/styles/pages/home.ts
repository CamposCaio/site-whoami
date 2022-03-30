import styled from '@emotion/styled';

export const ContainerSections = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  position: relative;

  .about__title-sticky-limiter {
    position: absolute;
    top: 100vh;
    height: calc(114vh + 2rem);
    width: 100%;
    max-width: 512px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 2rem;

    h2 {
      display: inline-block;
      width: 100%;
      padding: 12vh 0 2vh 0;
      line-height: 2rem;
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
      background-image: linear-gradient(
        ${(props) => props.color} 85%,
        rgba(0, 0, 0, 0)
      );
    }
  }
`

import styled from '@emotion/styled';

export const ContainerSections = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  position: relative;

  .about__title-sticky-limiter {
    position: absolute;
    top: 100vh;
    height: calc(130vh + 3rem);
    width: 100%;
    max-width: 516px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 2rem;

    h2 {
      display: inline-block;
      width: 100%;
      padding: 30vh 0 1rem 0;
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
    }
  }
`

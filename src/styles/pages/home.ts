import styled from '@emotion/styled'

export const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  position: relative;
`

export const AboutTitleContainer = styled.div`
  position: absolute;
  top: 100vh;
  height: calc(112vh + 2rem);
  width: 100%;
  max-width: 618px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 1rem;

  h2 {
    display: inline-block;
    width: 100%;
    padding: 10vh 0 2vh 0;
    line-height: 2rem;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
  }
`

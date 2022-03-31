import styled from '@emotion/styled';

export const Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: inline-block;
  padding: 0 2rem;

  .home__title--blue {
    color: var(--primary-color);
  }

  .home__div-buttons {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    @media (min-width: 516px) {
      align-items: flex-start;
    }
  }
`

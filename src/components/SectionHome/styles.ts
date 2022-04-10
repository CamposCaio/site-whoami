import styled from '@emotion/styled';

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  #home__scroll-down {
    position: absolute;
    bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    word-spacing: 1px;
    transition: all 0.2s;
    animation: scroll-down-move 2s infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes scroll-down-move {
    0% {
      bottom: 1.5rem;
    }
    20% {
      bottom: 2rem;
    }
    40% {
      bottom: 1.5rem;
    }
  }

  #home__scroll-down:hover {
    animation: none;
    opacity: 0.6;
    cursor: pointer;
  }
`

export const Container = styled.div`
  display: inline-block;

  h1,
  h4 {
    display: inline-block;
  }

  .home__title--blue {
    color: var(--primary-color);
  }

  .home__div-buttons {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;

    @media (min-width: 516px) {
      align-items: flex-start;
    }
  }
`

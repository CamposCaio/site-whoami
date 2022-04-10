import styled from '@emotion/styled';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Content = styled.div`
  width: min(100vw - 4rem, 720px);

  .technologies__container-cards {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    gap: 2rem;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  .technologies__container-grid {
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 480px) {
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
    }
  }

  .technologies__card {
    width: 4rem;
    height: 4rem;
    border-radius: 4px;
    background-size: cover;
    transition: all 0.4s;
    opacity: ${(props) => (props.color === 'dark' ? 0.38 : 0.2)};
    filter: brightness(0%);

    @media (max-width: 480px) {
      width: 3rem;
      height: 3rem;
    }
  }

  .technologies__card:hover {
    filter: brightness(100%);
    opacity: 1;
    cursor: pointer;
  }

  .card-active {
    filter: brightness(100%);
    opacity: 1;
  }

  #card-1 {
    background-image: url(technologies/typescript.png);
  }
  #card-2 {
    background-image: url(technologies/react.png);
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  #card-3 {
    background-image: url(technologies/next.png);
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  #card-4 {
    background-image: url(technologies/styled-components.png);
  }
  #card-5 {
    background-image: url(technologies/mui.png);
  }
  #card-6 {
    background-image: url(technologies/node.png);
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  #card-7 {
    background-image: url(technologies/nest.svg);
  }
  #card-8 {
    background-image: url(technologies/docker.png);
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  #card-9 {
    background-image: url(technologies/kubernetes.png);
  }
`

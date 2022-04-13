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

  @media (max-width: 1200px) {
    padding-top: 3rem;
  }

  .MuiPaper-root {
    padding: 2rem;
  }

  .technologies__container-cards {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 480px) {
      gap: 1rem;
      flex-direction: column;
    }
  }

  .technologies__container-grid {
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;

    @media (max-width: 480px) {
      width: 100%;
      grid-template-columns: repeat(auto-fit, 4rem);
      gap: 0.25rem;
    }
  }

  .technologies__card {
    width: 4rem;
    height: 4rem;
    margin: 0.5rem;
    border-radius: 4px;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 0.4s;
    opacity: 0.6;
    filter: blur(1px);

    @media (max-width: 480px) {
      width: 3.5rem;
      height: 3.5rem;
      margin: 0.25rem;
    }
  }

  .technologies__card:hover {
    filter: blur(0);
    opacity: 1;
    cursor: pointer;
  }

  .card-active {
    filter: blur(0);
    opacity: 1;
    box-shadow: 0 0 0 1px ${(props) => props.color};
    /* border: 1px solid ${(props) => props.color}; */
    margin: 0;
    width: 5rem;
    height: 5rem;
    @media (max-width: 480px) {
      width: 4rem;
      height: 4rem;
    }
  }

  .technologies__card-description {
    @media (max-width: 480px) {
      height: 8rem;
    }
  }

  #card-1 {
    background-image: url(technologies/typescript.png);
  }
  #card-2 {
    background-image: url(technologies/react.png);
  }
  #card-3 {
    background-image: url(technologies/next.png);
  }
  #card-4 {
    background-image: url(technologies/styled-components.png);
  }
  #card-5 {
    background-image: url(technologies/mui.png);
  }
  #card-6 {
    background-image: url(technologies/node.png);
  }
  #card-7 {
    background-image: url(technologies/nest.svg);
  }
  #card-8 {
    background-image: url(technologies/docker.png);
  }
  #card-9 {
    background-image: url(technologies/kubernetes.png);
  }
`

import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .MuiPaper-root {
    font-size: 93.75%;
    padding: 2rem;
    padding-top: 4rem;
    position: relative;
    height: 100%;

    /* flex-grow: 1; */
  }

  h5 {
    width: fit-content;
    position: absolute;
    top: 0.75rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .accordion__icon-div {
    @media (max-width: 630px) {
      display: none;
    }

    background-color: ${(props) => {
      return `rgba(${parseInt(props.color.substring(1, 3), 16)},${parseInt(
        props.color.substring(3, 5),
        16
      )},${parseInt(props.color.substring(5, 7), 16)}, 0.2)`
    }};
    color: ${(props) => props.color};

    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.5rem;
    border-top-left-radius: 0.25rem;
    border-bottom-right-radius: 50%;
    min-width: 3rem;
    height: 3rem;
    /* margin-right: 1rem; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

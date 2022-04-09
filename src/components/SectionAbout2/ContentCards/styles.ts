import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;

  .card {
    font-size: 93.75%;
    /* letter-spacing: 1px; */
    /* word-spacing: 0px; */
    /* text-align: left; */
    /* line-height: 1.25rem; */
    width: calc(50% - 2.5rem);
  }

  .card__header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  h5 {
    display: block;
  }

  .accordion__icon-div {
    background-color: ${(props) => {
      return `rgba(${parseInt(props.color.substring(1, 3), 16)},${parseInt(
        props.color.substring(3, 5),
        16
      )},${parseInt(props.color.substring(5, 7), 16)}, 0.2)`
    }};
    color: ${(props) => props.color};
    font-size: 1.5rem;
    border-radius: 0.25rem;
    min-width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

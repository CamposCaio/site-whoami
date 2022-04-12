import styled from '@emotion/styled';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  @media (max-width: 1200px) {
    padding-top: 3rem;
  }

  width: min(100vw - 4rem, 720px);

  h2 {
    padding-bottom: 2rem;
  }

  @media (max-width: 570px) {
    h2 {
      padding-bottom: 1rem;
    }
    h3 {
      display: none;
    }
  }

  .grid-div {
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 6rem;
    grid-gap: 1rem;

    @media (max-width: 570px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .contact-form-paper {
    padding: 1rem 2rem;
    grid-row: 1 / 4;

    @media (max-width: 570px) {
      grid-row: 2 / 3;
      grid-column: 1 / 4;
    }

    & > button {
      float: right;
      margin-top: 1.5rem;
    }

    p {
      padding: 0;
    }
  }

  .icon-paper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    gap: 0.5rem;
    height: 100%;
    color: ${(props: any) => props.theme.palette.primary.main};
    transition: all 0.4s;

    @media (max-width: 570px) {
      flex-direction: row;
      padding-block: 0.5rem;

      & > svg {
        display: none;
      }
    }
  }

  .icon-paper:hover {
    background-color: ${(props: any) => props.theme.palette.primary.main};
    color: #fff;
  }
`

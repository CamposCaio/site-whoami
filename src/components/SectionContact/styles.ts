import styled from '@emotion/styled';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;

  .contact__div-footer {
    position: absolute;
    bottom: 0;
    width: 120%;
    height: 80vh;
    transform: translateY(60vh);
    background-color: ${(props: any) => props.theme.palette.secondary.main};
    color: ${(props: any) => props.theme.palette.secondary.contrastText};
    padding-top: 5vh;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact__div-buttons {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 516px;
  margin-top: 30vh;
  padding: 0 2rem;

  .contact__div-title {
    padding-bottom: 1rem;
  }
`

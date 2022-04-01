import styled from '@emotion/styled';

export const Container = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 516px;
  margin-top: 30vh;
  padding: 0 2rem;

  .tecnologies__div-title {
    padding-bottom: 1rem;
  }

  ul {
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }

  li {
    width: 160px;
    margin-left: 1rem;
  }
`

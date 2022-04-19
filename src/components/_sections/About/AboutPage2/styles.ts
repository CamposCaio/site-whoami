import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: min(100% - 6rem, 820px);
    @media (max-width: 900px) {
      display: none;
    }
  }

  .container-cards {
    display: flex;
    column-gap: 4rem;
    row-gap: 2rem;
  }

  .card {
    min-width: 24ch;
    flex-basis: 100%;
  }

  .card-title {
    display: flex;
    gap: 0.5rem;
    padding-bottom: 2rem;
    align-items: center;
  }

  .card-title__number {
    position: relative;
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }: any) =>
      theme.palette.mode === 'light'
        ? 'rgba(25, 118, 210, 0.2)'
        : 'rgba(33, 150, 243, 0.2)'};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:after {
      content: '';
      position: absolute;
      left: 10px;
      top: 5px;
      width: 2rem;
      height: 2rem;
      background-color: ${({ theme }: any) =>
        theme.palette.mode === 'light'
          ? 'rgba(25, 118, 210, 0.2)'
          : 'rgba(33, 150, 243, 0.2)'};
      border-radius: 50%;
    }
  }
`

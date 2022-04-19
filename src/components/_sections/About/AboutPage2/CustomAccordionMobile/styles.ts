import styled from '@emotion/styled';

export const Container = styled.div`
  padding-inline: 3rem;
  max-width: 630px;

  @media (min-width: 901px) {
    display: none;
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

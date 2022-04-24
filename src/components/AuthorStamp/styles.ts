import styled from '@emotion/styled'

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 50vh;
  height: max(2rem, calc(50vw - 1080px / 2));
  transform: translate(-50%, -50%) rotate(-90deg) translateY(50%);
  color: ${({ theme }: any) => theme.palette.text.disabled};
  display: flex;
  align-items: flex-end;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;

  &:after {
    content: '';
    position: absolute;
    bottom: 2px;
    background-color: ${({ theme }: any) => theme.palette.divider};
    width: calc(50% + 50vh);
    height: 1px;
  }

  @media (max-width: 610px) {
    display: none;
  }
`

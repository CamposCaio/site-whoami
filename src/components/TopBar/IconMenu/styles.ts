import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 3rem;
  right: 3rem;
  width: 24px;
  height: 24px;
  z-index: 10;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: 1081px) {
    display: none;
  }

  span {
    position: absolute;
    height: 1px;
    width: 24px;
    background-color: ${({ theme }: any) => theme.palette.text.primary};
    transition: 0.4s;
  }

  span:nth-of-type(1) {
    transform: translateY(4px);
  }

  span:nth-of-type(2) {
    transform: translateY(12px);
    width: 8px;
  }

  span:nth-of-type(3) {
    transform: translateY(20px);
  }

  &.open span:nth-of-type(1) {
    transform: translate(-2px, 12px) rotate(45deg);
    width: 28px;
    transition-delay: 0.133s;
  }

  &.open span:nth-of-type(2) {
    transform: translate(24px, 12px);
    width: 28px;
  }

  &.open span:nth-of-type(3) {
    transform: translate(-2px, 12px) rotate(-45deg);
    width: 28px;
    transition-delay: 0.266s;
  }
`

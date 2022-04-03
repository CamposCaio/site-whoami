import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%) !important;
  height: 35vh;
  right: 2rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    font-weight: 400;
    font-size: 87.5%;
    text-align: right;
    transition: filter 0.2s;
  }

  a:hover,
  .link-active {
    filter: opacity(40%);
  }

  @media (max-width: 960px) {
    display: none;
  }
`

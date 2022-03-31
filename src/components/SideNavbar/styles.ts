import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%) !important;
  height: 30vh;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    font-weight: 400;
    font-size: 75%;
    text-transform: uppercase;
    text-align: right;

    filter: opacity(100%);
    transition: filter 0.2s;
  }

  a:hover,
  .link-active {
    filter: opacity(50%);
  }

  @media (max-width: 960px) {
    display: none;
  }
`

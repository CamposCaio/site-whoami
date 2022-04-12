import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: -100%;
  transition: all 0.3s;
  background-color: ${(props: any) => props.theme.palette.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1201px) {
    display: none;
  }

  .content {
    width: min(100% - 2rem, 15rem);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .div-selects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-row-gap: 0.5rem;
    padding-bottom: 2rem;
    color: #fff;
  }

  .div-navigation {
    display: flex;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.87);

    & > button {
      height: 4rem;
      position: relative;

      &:not(:last-child):after {
        content: '';
        background-color: ${(props: any) => props.theme.palette.divider};
        display: block;
        position: absolute;
        padding-top: 1px;
        padding-left: 100%;
        margin-top: 4rem;
      }
    }
  }

  fieldset {
    outline: 0 !important;
    border: none !important;
  }
`

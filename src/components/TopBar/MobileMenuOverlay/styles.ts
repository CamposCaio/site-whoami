import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: -100%;
  z-index: 10;
  transition: all 0.3s;
  background-color: ${(props: any) => props.theme.palette.background.default};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1081px) {
    display: none;
  }

  .content {
    width: min(100% - 2rem, 15rem);
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .audio-icon {
      width: 2rem;
      height: 2rem;
      position: absolute;
      left: 3rem;
      top: 3rem;
    }
  }

  .div-selects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-row-gap: 1rem;
  }

  .MuiSelect-select,
  .MuiMenuItem-root {
    font-size: 1rem;
  }

  .div-navigation {
    display: flex;
    flex-direction: column;

    & > button {
      height: 4rem;
    }
  }

  fieldset {
    outline: 0 !important;
    border: none !important;
  }
`

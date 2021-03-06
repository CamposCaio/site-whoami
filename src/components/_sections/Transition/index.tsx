// @ts-nocheck

import styled from '@emotion/styled';
import { scrollController } from '@src/pages';

const Container = styled.div`
  z-index: -2;
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }: any) =>
    theme.palette.mode === 'light' ? '#EAEAEA' : '#000000'};

  .scroll-parallax {
    font-size: 5rem;
    /* font-weight: 300; */
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    color: ${({ theme }: any) => theme.palette.text.primary};
    -webkit-box-reflect: below -12px linear-gradient(rgba(234, 234, 234, 0.1)
          20%, rgba(255, 255, 255, 0.2));
  }
`

export function transitionsControll() {
  window.addEventListener('scroll', () => {
    const parallaxElement = document.querySelectorAll('.scroll-parallax')

    for (let i = 0; i < parallaxElement.length; i++) {
      const pageElement = parallaxElement[i].getAttribute(
        'page'
      ) as unknown as number

      const topOfElement = pageElement * window.innerHeight
      if (
        window.scrollY > topOfElement - window.innerHeight &&
        window.scrollY < topOfElement + window.innerHeight
      ) {
        parallaxElement[i].style.top = `calc(50% + ${
          (window.scrollY - topOfElement) / 2
        }px)`

        const scrollDirection = scrollController.getScrollDirection()

        if (scrollDirection === 'top') {
          const text = parallaxElement[i].getAttribute('textup')
          if (parallaxElement[i].innerHTML !== text)
            parallaxElement[i].innerHTML = text
        } else {
          const text = parallaxElement[i].getAttribute('textdown')
          if (parallaxElement[i].innerHTML !== text)
            parallaxElement[i].innerHTML = text
        }
      }
    }
  })
}

export function Transition({ pageNumber, textup, textdown }) {
  return (
    <Container>
      <h1
        className="scroll-parallax"
        page={pageNumber}
        textup={textup}
        textdown={textdown}
      >
        {textdown}
      </h1>
    </Container>
  )
}

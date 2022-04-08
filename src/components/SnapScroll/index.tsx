import { useEffect } from 'react';

let listenForPageScroll = true
let animationFrameID = 0
let targetY = 0
let previousScrollY = 0
let disableScrollAnimation = false

function onPageLoaded() {
  let pageHeight = window.innerHeight

  window.addEventListener('resize', () => {
    listenForPageScroll = false
    enableHandleScroll(false)
    pageHeight = window.innerHeight
    previousScrollY = 0
    disableScrollAnimation = true
    cancelAnimationFrame(animationFrameID)
    window.scrollTo(0, 0)

    setTimeout(() => {
      listenForPageScroll = true
      disableScrollAnimation = false
      enableHandleScroll(true)
    }, 50)
  })

  window.addEventListener('scroll', () => {
    enableHandleScroll(false)

    if (
      listenForPageScroll &&
      Math.abs(window.scrollY - previousScrollY) >= 1
    ) {
      listenForPageScroll = false
      targetY =
        window.scrollY < previousScrollY
          ? Math.trunc(window.scrollY / pageHeight) * pageHeight
          : (Math.trunc(window.scrollY / pageHeight) + 1) * pageHeight
      animateScroll()
    }
    previousScrollY = window.scrollY
  })
}

export function enableHandleScroll(enable: boolean) {
  // @ts-ignore
  document.body.scroll = enable ? 'yes' : 'no'
  document.body.style.overflowY = enable ? 'visible' : 'hidden'
}

export function scrollTo(_targetY: number) {
  targetY = _targetY
  if (!listenForPageScroll) return

  listenForPageScroll = false
  animateScroll()
}

function animateScroll() {
  animationFrameID = requestAnimationFrame(animateScroll)

  const offsetYToAlignment = targetY - window.scrollY

  if (Math.abs(offsetYToAlignment) < 5) {
    disableScrollAnimation = true
    cancelAnimationFrame(animationFrameID)
    window.scrollTo(0, targetY)

    setTimeout(() => {
      listenForPageScroll = true
      disableScrollAnimation = false
      enableHandleScroll(true)
    }, 50)
  }
  if (disableScrollAnimation) return

  if (offsetYToAlignment > 0) {
    window.scrollBy({
      top: Math.ceil(offsetYToAlignment / 10) + 4,
      behavior: 'auto',
    })
  } else
    window.scrollBy({
      top: Math.floor(offsetYToAlignment / 10) - 4,
      behavior: 'auto',
    })
}

export function SnapScroll() {
  useEffect(onPageLoaded, [])

  return <></>
}

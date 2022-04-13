const NUM_OF_PAGES = 6

let listenForPageScroll = true
let animationFrameID = 0
let targetY = 0
let previousScrollY = 0
let disableScrollAnimation = false
let pageHeight = 0

function handleResize() {
  listenForPageScroll = false
  enableHandleScroll(false)
  const previousPageHeight = pageHeight
  pageHeight = window.innerHeight

  const currentSection = Math.round(window.scrollY / previousPageHeight)
  previousScrollY = 0
  disableScrollAnimation = true
  cancelAnimationFrame(animationFrameID)
  window.scrollTo(0, currentSection * pageHeight)

  setTimeout(() => {
    listenForPageScroll = true
    disableScrollAnimation = false
    enableHandleScroll(true)
  }, 50)
}

export function snapScroll() {
  pageHeight = window.innerHeight

  window.addEventListener('resize', handleResize)

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

function enableHandleScroll(enable: boolean) {
  // @ts-ignore
  document.body.scroll = enable ? 'yes' : 'no'
  document.body.style.overflowY = enable ? 'visible' : 'hidden'
}

export function scrollTo(_targetY: number) {
  targetY = _targetY
  if (!listenForPageScroll) return

  enableHandleScroll(false)
  listenForPageScroll = false
  animateScroll()
}

function animateScroll() {
  if (targetY < 0 || targetY > (NUM_OF_PAGES - 1) * window.innerHeight) {
    disableScrollAnimation = true
    listenForPageScroll = true
    disableScrollAnimation = false
    enableHandleScroll(true)
    return
  }

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

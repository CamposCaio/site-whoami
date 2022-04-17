export class ScrollController {
  private numOfPages: number
  private animationFrameID = 0
  private animationTargetPage = 0
  private currentPage = 0
  private currentScrollY = 0
  private previousScrollY = 0
  private isScriptScrolling = false
  private pageHeight: number
  private pages = {
    home: 0,
    about: 1,
    technologies: 3,
    portfolio: 4,
    contact: 5,
  }

  constructor(numOfPages: number) {
    this.numOfPages = numOfPages
    // this.getInitialValues()
  }

  public initialize() {
    this.currentScrollY = window.scrollY
    this.previousScrollY = this.currentScrollY
    this.pageHeight = window.innerHeight
    this.finishScrollTo(Math.round(this.currentScrollY / window.innerHeight))
  }

  private lockClientScroll(lock: boolean) {
    // @ts-ignore
    document.body.scroll = lock ? 'no' : 'yes'
    document.body.style.overflowY = lock ? 'hidden' : 'visible'
  }

  public handleResize() {
    if (this.isScriptScrolling) return
    this.pageHeight = window.innerHeight
    this.scrollTo(this.animationTargetPage)
  }

  public handleScroll() {
    if (this.isScriptScrolling) return
    this.currentScrollY = window.scrollY
    const scrollDirection =
      this.currentScrollY < this.previousScrollY ? 'top' : 'bottom'

    this.previousScrollY = this.currentScrollY
    if (scrollDirection === 'top') this.scrollTo(this.currentPage - 1)
    else if (scrollDirection === 'bottom') this.scrollTo(this.currentPage + 1)
  }

  public scrollTo(page: string | number) {
    if (typeof page === 'string') page = this.pages[page]

    if (page < 0 || page > this.numOfPages) return

    this.lockClientScroll(true)
    cancelAnimationFrame(this.animationFrameID)
    this.animationTargetPage = page as number
    this.isScriptScrolling = true
    this.animateScroll()
  }

  private finishScrollTo(page: number) {
    cancelAnimationFrame(this.animationFrameID)
    window.scrollTo({ top: page * this.pageHeight })
    this.currentPage = page
    this.currentScrollY = window.scrollY
    this.previousScrollY = this.currentScrollY

    setTimeout(() => {
      this.lockClientScroll(false)
      this.isScriptScrolling = false
      if (this.pageHeight !== window.innerHeight) this.handleResize()
    }, 50)
  }

  private animateScroll() {
    this.animationFrameID = requestAnimationFrame(() => {
      this.animateScroll()
    })
    this.currentScrollY = window.scrollY
    const animationTargetY = this.animationTargetPage * this.pageHeight
    const distanceToTargetY = animationTargetY - this.currentScrollY

    this.isScriptScrolling = true
    if (distanceToTargetY * distanceToTargetY < 25)
      this.finishScrollTo(this.animationTargetPage)
    else if (distanceToTargetY > 0)
      window.scrollBy({ top: Math.ceil(distanceToTargetY / 10) + 4 })
    else window.scrollBy({ top: Math.floor(distanceToTargetY / 10) - 4 })
  }
}

// export const scrollController = new ScrollController(5)

// function snapScroll() {
//   window.addEventListener('scroll', () => scrollController.handleScroll())
//   window.addEventListener('resize', () => scrollController.handleResize())
// }

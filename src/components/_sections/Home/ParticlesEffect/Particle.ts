export class Particle {
  size = 2
  x: number
  y: number
  directionX: number
  directionY: number
  color: string
  ctx: CanvasRenderingContext2D

  constructor(
    x: number,
    y: number,
    directionX: number,
    directionY: number,
    particleColor: string,
    ctx: CanvasRenderingContext2D
  ) {
    this.x = x
    this.y = y
    this.directionX = directionX
    this.directionY = directionY
    this.color = particleColor
    this.ctx = ctx
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
  }

  update() {
    this.x += this.directionX
    this.y += this.directionY

    this.draw()
  }
}

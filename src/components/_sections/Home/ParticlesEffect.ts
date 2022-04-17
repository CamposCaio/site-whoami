const NUM_OF_PARTICLES = 150
const MAX_VELOCITY = 1.2
const CONNECT_DISTANCE = 20000
const FPS = 120
const MAX_OPACITY = 0.5

type Particle = {
  x: number
  y: number
  size: number
  stepX: number
  stepY: number
}

export class ParticlesEffect {
  private ctx: CanvasRenderingContext2D
  private previousTimestamp = 0
  private rgbColor: [number, number, number]
  private lastParticlePosition: [number, number]
  private currentMousePosition: [number, number]
  private particles: Particle[] = []
  private particlePointer = 0
  private active = false

  public start(ctx: CanvasRenderingContext2D, hexColor = '') {
    this.ctx = ctx
    hexColor && this.setColor(hexColor)
    this.active = true
    window.requestAnimationFrame(this.animationStep)
  }

  public stop() {
    this.active = false
  }

  public setColor(hexColor: string) {
    this.rgbColor = [
      parseInt(hexColor.slice(1, 3), 16),
      parseInt(hexColor.slice(3, 5), 16),
      parseInt(hexColor.slice(5, 7), 16),
    ]
  }

  public handleMouseMove = (event: MouseEvent) => {
    this.currentMousePosition = [event.x, event.y]
  }

  private animationStep = (timestamp: DOMHighResTimeStamp) => {
    if (timestamp - this.previousTimestamp < 1000 / FPS) {
      window.requestAnimationFrame(this.animationStep)
      return
    }

    this.previousTimestamp = timestamp

    this.updateParticlesPosition()
    this.draw()

    if (this.active) {
      if (this.currentMousePosition !== this.lastParticlePosition) {
        this.newParticle()
        // this.newParticle()
      }
      window.requestAnimationFrame(this.animationStep)
      return
    }
    // this.removeParticle()
    this.removeParticle()

    if (this.particles.length) window.requestAnimationFrame(this.animationStep)
    else this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  }

  private updateParticlesPosition() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].x += this.particles[i].stepX
      this.particles[i].y += this.particles[i].stepY
    }
  }

  private newParticle() {
    if (this.particlePointer >= NUM_OF_PARTICLES) this.particlePointer = 0

    const stepX = Math.random() * MAX_VELOCITY * 2 - MAX_VELOCITY
    const stepY = Math.random() * MAX_VELOCITY * 2 - MAX_VELOCITY

    this.particles[this.particlePointer] = {
      x: this.currentMousePosition[0],
      y: this.currentMousePosition[1],
      size: 1,
      stepX,
      stepY,
    }

    this.particlePointer++

    this.lastParticlePosition = this.currentMousePosition
  }

  private removeParticle() {
    if (this.particlePointer >= this.particles.length) this.particlePointer = 0
    for (let i = this.particlePointer; i < this.particles.length - 1; i++) {
      this.particles[i] = this.particles[i + 1]
    }
    this.particles.pop()
  }

  private draw() {
    const numOfParticles = this.particles.length

    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    for (let i = 0; i < numOfParticles; i++) {
      const particleA = this.particles[i]

      for (let j = i; j < numOfParticles; j++) {
        const particleB = this.particles[j]

        const distance =
          (particleA.x - particleB.x) * (particleA.x - particleB.x) +
          (particleA.y - particleB.y) * (particleA.y - particleB.y)

        if (distance > CONNECT_DISTANCE) continue

        const opacity = 1 - distance / CONNECT_DISTANCE
        const [r, g, b] = this.rgbColor

        this.ctx.strokeStyle = `rgba(${r},${g},${b},${MAX_OPACITY * opacity})`
        this.ctx.beginPath()
        this.ctx.moveTo(particleA.x, particleA.y)
        this.ctx.lineTo(particleB.x, particleB.y)
        this.ctx.stroke()
      }
    }
  }
}

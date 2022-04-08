import React, { useContext, useEffect } from 'react';

import { ThemeContext } from '../../../providers/theme';
import { Particle } from './Particle';
import { Container } from './styles';

// Decrease PARTICLES_MAX_NUMBER for better performance
const PARTICLES_MAX_NUMBER = 200
const PARTICLES_PER_SECOND = 100
const PARTICLES_MAX_VELOCITY = 0.8
const PARTICLES_CONNECT_MAX_DISTANCE = 20000
let hexColor: string
let rgbColor: string //"r,g,b"
let lastParticlePosition = [null, null]
let currentMousePosition = [null, null]
let ctx: CanvasRenderingContext2D
let userAtHomeSection = true

let particles = Array<Particle>(PARTICLES_MAX_NUMBER).fill(undefined)

function updateParticles() {
  particles.shift()
  if (userAtHomeSection && currentMousePosition != lastParticlePosition)
    createParticle()
  else particles.push(undefined)
}

const createParticle = () => {
  let directionX =
    Math.random() * PARTICLES_MAX_VELOCITY * 2 - PARTICLES_MAX_VELOCITY
  let directionY =
    Math.random() * PARTICLES_MAX_VELOCITY * 2 - PARTICLES_MAX_VELOCITY

  particles.push(
    new Particle(
      currentMousePosition[0],
      currentMousePosition[1],
      directionX,
      directionY,
      hexColor,
      ctx
    )
  )

  lastParticlePosition = currentMousePosition
}

function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  for (let i = 0; i < PARTICLES_MAX_NUMBER; i++) {
    if (particles[i]) particles[i].update()
  }
  connect()
}

function connect() {
  for (let a = 0; a < PARTICLES_MAX_NUMBER; a++) {
    if (!particles[a]) continue
    for (let b = a + 1; b < PARTICLES_MAX_NUMBER; b++) {
      if (!particles[b]) continue
      const distance =
        (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
        (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y)

      if (distance > PARTICLES_CONNECT_MAX_DISTANCE) continue

      let opacity = 1 - distance / PARTICLES_CONNECT_MAX_DISTANCE

      ctx.strokeStyle = `rgba(${rgbColor},${opacity})`

      ctx.beginPath()
      ctx.moveTo(particles[a].x, particles[a].y)
      ctx.lineTo(particles[b].x, particles[b].y)
      ctx.stroke()
    }
  }
}

function updateColor(newHexColor: string) {
  hexColor = newHexColor
  rgbColor = getRgbFromHex(hexColor)

  particles.forEach((particle) => {
    if (particle) particle.color = hexColor
  })
}

function getRgbFromHex(hex: string) {
  return `${parseInt(hex.substring(1, 3), 16)},${parseInt(
    hex.substring(3, 5),
    16
  )},${parseInt(hex.substring(5, 7), 16)}`
}

export function ParticlesEffect() {
  const { activeTheme } = useContext(ThemeContext)

  useEffect(() => {
    const canvas = document.getElementById('home__canvas') as HTMLCanvasElement
    ctx = canvas.getContext('2d')

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    updateColor(activeTheme.palette.primary.main)

    window.addEventListener('mousemove', (event) => {
      if (userAtHomeSection) currentMousePosition = [event.x, event.y]
    })

    window.addEventListener('resize', () => {
      canvas.height = window.innerHeight
      canvas.width = window.innerWidth
    })

    window.addEventListener('scroll', () => {
      userAtHomeSection = window.scrollY == 0 ? true : false
    })

    setInterval(updateParticles, 1000 / PARTICLES_PER_SECOND)
    animate()
  }, [])

  useEffect(() => {
    updateColor(activeTheme.palette.primary.main)
  }, [activeTheme])

  return <Container id="home__canvas" />
}

import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../../../providers/theme';
import { Particle } from './Particle';
import { Container } from './styles';

// Decrease PARTICLES_MAX_NUMBER for better performance
const PARTICLES_MAX_NUMBER = 45
const PARTICLES_PER_SECOND = 30
const PARTICLES_MAX_VELOCITY = 2
const PARTICLES_CONNECT_DISTANCE = 20000
let hexColor: string
let rgbColor: string //"r,g,b"
let mousePosition = [null, null]
let ctx: CanvasRenderingContext2D
let intervalCreateParticle: NodeJS.Timer
let isAnimationActive = false
let particles = new Array<Particle>()

function createParticle() {
  let directionX =
    Math.random() * PARTICLES_MAX_VELOCITY * 2 - PARTICLES_MAX_VELOCITY
  let directionY =
    Math.random() * PARTICLES_MAX_VELOCITY * 2 - PARTICLES_MAX_VELOCITY

  particles.push(
    new Particle(
      mousePosition[0],
      mousePosition[1],
      directionX,
      directionY,
      hexColor,
      ctx
    )
  )
  particles.shift()
}

function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  for (let i = 0; i < particles.length; i++) {
    particles[i].update()
  }
  connect()
}

function connect() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      const distance =
        (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
        (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y)

      if (distance > PARTICLES_CONNECT_DISTANCE) continue

      let opacity = 1 - distance / PARTICLES_CONNECT_DISTANCE

      ctx.lineWidth = 1
      ctx.strokeStyle = `rgba(${rgbColor},${opacity})`

      ctx.beginPath()
      ctx.moveTo(particles[a].x, particles[a].y)
      ctx.lineTo(particles[b].x, particles[b].y)
      ctx.stroke()
    }
  }
}

export function ParticlesEffect() {
  const { activeTheme } = useContext(ThemeContext)

  hexColor = activeTheme.palette.primary.main
  rgbColor = `${parseInt(hexColor.substring(1, 3), 16)},${parseInt(
    hexColor.substring(3, 5),
    16
  )},${parseInt(hexColor.substring(5, 7), 16)}`

  useEffect(() => {
    const canvas = document.getElementById('home__canvas') as HTMLCanvasElement
    ctx = canvas.getContext('2d')

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    for (let i = 0; i < PARTICLES_MAX_NUMBER; i++) {
      particles.push(new Particle(null, null, null, null, null, ctx))
    }

    window.addEventListener('mousemove', function (event) {
      mousePosition = [event.x, event.y]
    })

    intervalCreateParticle = setInterval(
      createParticle,
      1000 / PARTICLES_PER_SECOND
    )
    isAnimationActive = true

    window.addEventListener('resize', function () {
      canvas.height = window.innerHeight
      canvas.width = window.innerWidth
    })

    window.addEventListener('mouseout', function () {
      mousePosition = [undefined, undefined]
    })

    document
      .getElementById('container-sections')
      .addEventListener('scroll', function () {
        console.log('scroll!')

        const scrollPosition =
          document.getElementById('container-sections').scrollTop
        if (scrollPosition == 0 && !isAnimationActive) {
          intervalCreateParticle = setInterval(
            createParticle,
            1000 / PARTICLES_PER_SECOND
          )
          isAnimationActive = true
        } else if (scrollPosition != 0 && isAnimationActive) {
          clearInterval(intervalCreateParticle)
          console.log('ok')

          isAnimationActive = false
        }
      })

    animate()
  }, [])

  useEffect(() => {
    hexColor = activeTheme.palette.primary.main
    rgbColor = `${parseInt(hexColor.substring(1, 3), 16)},${parseInt(
      hexColor.substring(3, 5),
      16
    )},${parseInt(hexColor.substring(5, 7), 16)}`

    particles.forEach((particle) => (particle.particleColor = hexColor))
  }, [activeTheme])

  return <Container id="home__canvas" />
}

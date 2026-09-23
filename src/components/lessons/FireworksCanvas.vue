<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasRef = ref(null)
let animId = null
let particles = []
let rockets = []

const colors = [
  '#ffd166', // Gold
  '#06d6a0', // Mint / Emerald
  '#118ab2', // Cyan
  '#ef476f', // Pink / Coral
  '#7209b7', // Purple
  '#f72585', // Magenta
  '#ffffff', // Sparkle white
]

class Rocket {
  constructor(canvas) {
    this.canvas = canvas
    this.x = Math.random() * (canvas.width * 0.8) + canvas.width * 0.1
    this.y = canvas.height
    this.targetY = Math.random() * (canvas.height * 0.45) + canvas.height * 0.1
    this.speed = Math.random() * 4 + 7
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.radius = 3.5
    this.dead = false
  }

  update() {
    this.y -= this.speed
    if (this.y <= this.targetY) {
      this.dead = true
      this.explode()
    }
  }

  draw(ctx) {
    ctx.save()
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.shadowBlur = 10
    ctx.shadowColor = this.color
    ctx.fill()
    ctx.restore()
  }

  explode() {
    const count = 45 + Math.floor(Math.random() * 30)
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.2 - 0.1)
      const speed = Math.random() * 4.5 + 1.5
      particles.push(new Particle(this.x, this.y, angle, speed, this.color))
    }
  }
}

class Particle {
  constructor(x, y, angle, speed, color) {
    this.x = x
    this.y = y
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed
    this.color = color
    this.alpha = 1
    this.decay = Math.random() * 0.015 + 0.012
    this.gravity = 0.09
    this.radius = Math.random() * 2.8 + 1.8
    this.flicker = Math.random() > 0.5
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.vy += this.gravity
    this.vx *= 0.985
    this.vy *= 0.985
    this.alpha -= this.decay
  }

  draw(ctx) {
    if (this.alpha <= 0) return
    ctx.save()
    ctx.globalAlpha = Math.max(0, this.alpha)
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.shadowBlur = 8
    ctx.shadowColor = this.color
    ctx.fill()
    ctx.restore()
  }
}

function initFireworks() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  function resize() {
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  resize()
  window.addEventListener('resize', resize)

  // Launch initial wave of rockets
  for (let i = 0; i < 4; i++) {
    rockets.push(new Rocket(canvas))
  }

  let frameCount = 0

  function loop() {
    frameCount++
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Launch new rockets periodically
    if (frameCount % 24 === 0 && rockets.length < 8) {
      rockets.push(new Rocket(canvas))
    }

    // Update and draw rockets
    for (let i = rockets.length - 1; i >= 0; i--) {
      rockets[i].update()
      rockets[i].draw(ctx)
      if (rockets[i].dead) {
        rockets.splice(i, 1)
      }
    }

    // Update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update()
      particles[i].draw(ctx)
      if (particles[i].alpha <= 0) {
        particles.splice(i, 1)
      }
    }

    animId = requestAnimationFrame(loop)
  }

  animId = requestAnimationFrame(loop)

  return () => {
    window.removeEventListener('resize', resize)
    if (animId) cancelAnimationFrame(animId)
  }
}

let cleanup = null

onMounted(() => {
  cleanup = initFireworks()
})

onBeforeUnmount(() => {
  if (cleanup) cleanup()
  particles = []
  rockets = []
})
</script>

<template>
  <canvas ref="canvasRef" class="fireworks-canvas" aria-hidden="true"></canvas>
</template>

<style scoped>
.fireworks-canvas {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 100;
}
</style>


import type { LevelDef, Vec3 } from './types'

export type LevelIssueTarget =
  | { kind: 'challenge'; id: string; optionIndex?: number }
  | { kind: 'platform'; id: string }
  | { kind: 'obstacle'; id: string }
  | { kind: 'checkpoint'; id: string }
  | { kind: 'goal'; id: 'goal' }
  | { kind: 'start'; id: 'start' }

export interface LevelIssue {
  severity: 'error' | 'warning'
  text: string
  target: LevelIssueTarget
}

function positive(size: Vec3) {
  return size.every((n) => Number.isFinite(n) && n > 0)
}

function hasSupport(level: LevelDef, point: Vec3, maxDrop: number) {
  return level.platforms.some(({ position, size }) => {
    const top = position[1] + size[1] / 2
    const drop = point[1] - top
    return (
      Math.abs(point[0] - position[0]) <= size[0] / 2 + 0.5 &&
      Math.abs(point[2] - position[2]) <= size[2] / 2 + 0.5 &&
      drop >= -0.6 &&
      drop <= maxDrop
    )
  })
}

export function validateLevel(level: LevelDef): LevelIssue[] {
  const issues: LevelIssue[] = []

  level.challenges.forEach((challenge, index) => {
    const name = `Pregunta ${index + 1}`
    const target = { kind: 'challenge' as const, id: challenge.id }
    const words = challenge.options.map((option) => option.word.trim())
    if (challenge.options.length < 2) {
      issues.push({ severity: 'error', text: `${name}: necesita al menos 2 respuestas`, target })
    }
    const emptyIndex = words.findIndex((word) => !word)
    if (emptyIndex >= 0) {
      issues.push({
        severity: 'error',
        text: `${name}: hay una respuesta vacía`,
        target: { ...target, optionIndex: emptyIndex },
      })
    }
    const lower = words.map((word) => word.toLowerCase())
    if (new Set(lower).size !== lower.length) {
      issues.push({ severity: 'error', text: `${name}: hay respuestas repetidas`, target })
    }
    if (!challenge.options.some((option) => option.word === challenge.correctAnswer)) {
      issues.push({ severity: 'error', text: `${name}: ninguna respuesta está marcada como correcta`, target })
    }
    if (challenge.timeLimit != null && !(challenge.timeLimit > 0)) {
      issues.push({ severity: 'error', text: `${name}: los segundos deben ser mayores que 0`, target })
    }
    if (challenge.platformSize && !positive(challenge.platformSize)) {
      issues.push({ severity: 'error', text: `${name}: el tamaño de los pads debe ser positivo`, target })
    }
    if (!challenge.hideSentence && !challenge.sentence?.trim()) {
      issues.push({ severity: 'warning', text: `${name}: no tiene frase`, target })
    }
  })

  level.platforms.forEach((platform, index) => {
    if (!positive(platform.size)) {
      issues.push({
        severity: 'error',
        text: `Suelo ${index + 1}: el tamaño debe ser positivo`,
        target: { kind: 'platform', id: platform.id },
      })
    }
  })

  level.obstacles.forEach((obstacle, index) => {
    if (obstacle.size && !positive(obstacle.size)) {
      issues.push({
        severity: 'error',
        text: `Obstáculo ${index + 1}: el tamaño debe ser positivo`,
        target: { kind: 'obstacle', id: obstacle.id },
      })
    }
  })

  level.checkpoints.forEach((checkpoint, index) => {
    if (checkpoint.width != null && !(checkpoint.width > 1)) {
      issues.push({
        severity: 'error',
        text: `Checkpoint ${index + 1}: el ancho debe ser mayor que 1`,
        target: { kind: 'checkpoint', id: checkpoint.id },
      })
    }
  })

  if (level.goal.size && !positive(level.goal.size)) {
    issues.push({ severity: 'error', text: 'Meta: el tamaño debe ser positivo', target: { kind: 'goal', id: 'goal' } })
  }
  if (!hasSupport(level, level.start, 4)) {
    issues.push({
      severity: 'warning',
      text: 'Inicio: no hay un suelo debajo del personaje',
      target: { kind: 'start', id: 'start' },
    })
  }
  if (!hasSupport(level, level.goal.position, 8)) {
    issues.push({ severity: 'warning', text: 'Meta: no hay un suelo debajo', target: { kind: 'goal', id: 'goal' } })
  }

  return issues
}

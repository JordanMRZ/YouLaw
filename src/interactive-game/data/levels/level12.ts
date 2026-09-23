import type { LevelDef } from '../types'
import { TrackBuilder } from '../trackBuilder'
import { palettes } from '../worlds'

export function createLevel12(): LevelDef {
  return {
    id: 12,
    name: "Take it easy",
    subtitle: "Patience is key.",
    theme: "Moving platforms",
    world: "time",
    hubLabel: "TIME GARDENS",
    parTime: 90,
    start: [0, 4.2, 2.2],
    palette: {
      fog: "#4d0351",
      skyTop: "#680c4e",
      skyBottom: "#ffa5f4",
      ambient: "#ebb2fa",
      ground: "#2a9d8f",
      accent: "#ffd166",
      water: "#264653"
    },
    platforms: [
      {
        id: "p1",
        position: [0, 2, 10],
        size: [18, 0.72, 20],
        kind: "static",
        color: "#800080"
      },
      {
        id: "p6",
        position: [0, 2, 25.5],
        size: [12, 0.72, 10],
        kind: "static",
        color: "#800080"
      },
      {
        id: "p20",
        position: [0, 2, 151.4],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmuebqm5c2",
        kind: "static",
        position: [-0.5, 2, 35],
        size: [8, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmuec3r0d3",
        kind: "static",
        position: [-2, 2, 52],
        size: [7, 0.8, 9.5],
        color: "#800080"
      },
      {
        id: "pmuece6ir6",
        kind: "static",
        position: [-8, 2, 82],
        size: [8, 0.8, 17],
        color: "#800080"
      },
      {
        id: "pmuecgein7",
        kind: "bounce",
        position: [10, 2.5, 83.5],
        size: [8, 0.8, 8],
        color: "#ff00ff"
      },
      {
        id: "pmuech4t98",
        kind: "static",
        position: [9.5, 5.5, 91],
        size: [8, 0.8, 4],
        color: "#800080"
      },
      {
        id: "pmuecof6fb",
        kind: "vanishing",
        position: [-6, 1.5, 94.5],
        size: [8, 0.8, 5],
        color: "#800040"
      },
      {
        id: "pmued1fpak",
        kind: "vanishing",
        position: [-6, 1.5, 101.5],
        size: [8, 0.8, 5],
        color: "#800040"
      },
      {
        id: "pmued3yxxl",
        kind: "static",
        position: [2, 1.5, 109.5],
        size: [11.5, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmuedfsx8o",
        kind: "vanishing",
        position: [1, 1, 122.5],
        size: [3.5, 0.3, 3.5],
        color: "#c9a0dc"
      },
      {
        id: "pmuedjueqp",
        kind: "vanishing",
        position: [4.5, 1, 127],
        size: [3.5, 0.3, 4.5],
        color: "#c9a0dc"
      },
      {
        id: "pmuedmp7zr",
        kind: "static",
        position: [2, 3, 131],
        size: [8, 0.8, 3],
        color: "#800080"
      }
    ],
    challenges: [
      {
        id: "qmuebzc5y2",
        type: "context",
        origin: [-1, 2, 43],
        options: [
          {
            word: "HAD FINISHED",
            offset: [-5.5, 0, 0]
          },
          {
            word: "FINISH",
            offset: [0, 0, 0]
          },
          {
            word: "HAVE FINISHED",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "HAD FINISHED",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "By the time the professor arrived, the students ____ the discussion",
        timeLimit: 15,
        explanation: "La acción se completó antes de otra acción pasada: “had finished"
      },
      {
        id: "qmuedaezbm",
        type: "context",
        origin: [1.5, 1, 117.5],
        options: [
          {
            word: "REVIEW",
            offset: [-5.5, 0, 0]
          },
          {
            word: "REVIEWED",
            offset: [0, 0, 0]
          },
          {
            word: "HAS REVIEWED",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "HAS REVIEWED",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "The comittee ______ the proposal before the deadline.",
        timeLimit: 15
      },
      {
        id: "qmuednl0ts",
        type: "context",
        origin: [2.5, 3, 135.5],
        options: [
          {
            word: "YOU WILL",
            offset: [-5.5, 0, 0]
          },
          {
            word: "WILL",
            offset: [0, 0, 0]
          },
          {
            word: "YOU HAVE",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "YOU WILL",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "If you study every day, ______ the exam",
        timeLimit: 15
      }
    ],
    obstacles: [
      {
        id: "omuec7nbi4",
        kind: "movingBlock",
        position: [0.5, 3.4, 68],
        size: [2.6, 1.6, 2.1],
        speed: 1.2,
        motion: {
          axis: "z",
          amplitude: 7.7,
          speed: 0.6,
          phase: 0
        }
      },
      {
        id: "omuecj4039",
        kind: "barrier",
        position: [-6, 5, 83],
        size: [-3.5, 5, -1.15]
      },
      {
        id: "omuecm2vxa",
        kind: "barrier",
        position: [-10, 5, 87.5],
        size: [4, 5, 0.85]
      },
      {
        id: "omuecsjy8d",
        kind: "movingBlock",
        position: [11, 4.9, 100.5],
        size: [3.6, 1.6, 2.1],
        speed: 1.2,
        motion: {
          axis: "z",
          amplitude: 5.9,
          speed: 0.6,
          phase: 0
        }
      },
      {
        id: "omuedla4hq",
        kind: "movingBlock",
        position: [1, 2.4, 127],
        size: [1.6, 1.6, 2.1],
        speed: 1.2,
        motion: {
          axis: "y",
          amplitude: 2.1,
          speed: 1.2,
          phase: 0
        }
      }
    ],
    coins: [
      {
        id: "c2",
        position: [0, 3.55, 21]
      },
      {
        id: "c3",
        position: [0, 3.55, 23.2]
      },
      {
        id: "c4",
        position: [0, 3.55, 25.4]
      },
      {
        id: "c5",
        position: [0, 3.55, 27.6]
      },
      {
        id: "nmuecve5pe",
        position: [11, 7.2, 96.5]
      },
      {
        id: "nmuecvotxf",
        position: [11, 7.2, 98]
      },
      {
        id: "nmuecvxd4g",
        position: [11, 7.2, 99.5]
      },
      {
        id: "nmuecw9foh",
        position: [11, 7.2, 101]
      },
      {
        id: "nmuecwt7wi",
        position: [11, 7.2, 102.5]
      },
      {
        id: "nmuecxautj",
        position: [11, 7.2, 104]
      }
    ],
    checkpoints: [
      {
        id: "kmuecb02u5",
        position: [-1.5, 4, 49.5],
        width: 8
      },
      {
        id: "kmuedvkgbt",
        position: [2, 3.5, 108.5],
        width: 14.9
      }
    ],
    goal: {
      position: [-1, 3.5, 155],
      size: [8, 4, 1]
    },
    zones: []
  }
}

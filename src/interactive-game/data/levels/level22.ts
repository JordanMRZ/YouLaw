import type { LevelDef } from '../types'

export function createLevel22(): LevelDef {
  return {
    id: 22,
    name: "Skyscraper",
    subtitle: "Keep going up.",
    theme: "Personaliza este tema",
    world: "neon",
    hubLabel: "NEON CITY",
    parTime: 90,
    start: [0, 3.5, -34],
    palette: {
      fog: "#241b4a",
      skyTop: "#12082b",
      skyBottom: "#3a1c71",
      ambient: "#5b2c6f",
      ground: "#2d1b4f",
      accent: "#ff2e97",
      water: "#00d4ff"
    },
    platforms: [
      {
        id: "p1",
        position: [0, 2, -32],
        size: [7, 0.5, 10],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "p20",
        position: [0, 34.5, 33.5],
        size: [7, 0.5, 9],
        kind: "static"
      },
      {
        id: "pmux86r4c2",
        position: [1.5, 3.5, -28.5],
        size: [3.5, 1.5, 2.5],
        kind: "bounce",
        color: "#00ffff"
      },
      {
        id: "pmux8ciw44",
        position: [-2, 6, -28],
        size: [2, 0.5, 2],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmux8fqpb5",
        position: [2, 11, -28],
        size: [2, 0.5, 2],
        kind: "moving",
        color: "#ff2e97",
        motion: {
          axis: "y",
          amplitude: 3,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "pmux8q4757",
        position: [-0.5, 9, -12],
        size: [12.5, 0.5, 6.5],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmux8zb0xb",
        position: [2.5, 11, -9.5],
        size: [3, 1, 2],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmux8zwetc",
        position: [-3.5, 12.5, -9.5],
        size: [3, 1, 2],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmux90co9d",
        position: [2, 15, -9.5],
        size: [3, 1, 2],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmux96suri",
        position: [0, 17.5, 6],
        size: [14.5, 1, 6.5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmux9roleo",
        position: [0, 33.5, 19],
        size: [7, 1.5, 5.5],
        kind: "static",
        color: "#ff2e97"
      }
    ],
    challenges: [
      {
        id: "qmux8nrid6",
        type: "grammar",
        origin: [0, 9, -18],
        options: [
          {
            word: "optionA",
            offset: [-5.5, 0, 0]
          },
          {
            word: "optionB",
            offset: [0, 0, 0]
          },
          {
            word: "optionC",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "optionB",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "She ___ the lesson yesterday.",
        timeLimit: 15
      },
      {
        id: "qmux92e3xf",
        type: "grammar",
        origin: [-0.5, 17, 0],
        options: [
          {
            word: "optionA",
            offset: [-5.5, 0, 0]
          },
          {
            word: "optionB",
            offset: [0, 0, 0]
          },
          {
            word: "optionC",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "optionB",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "She ___ the lesson yesterday.",
        timeLimit: 15
      },
      {
        id: "qmux9smgbp",
        type: "grammar",
        origin: [-0.5, 34.5, 25],
        options: [
          {
            word: "optionA",
            offset: [-5.5, 0, 0]
          },
          {
            word: "optionB",
            offset: [0, 0, 0]
          },
          {
            word: "optionC",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "optionB",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "She ___ the lesson yesterday.",
        timeLimit: 15
      }
    ],
    obstacles: [
      {
        id: "omux8axvm3",
        kind: "barrier",
        position: [0, 5.5, -24],
        size: [10, 7, 5.5]
      },
      {
        id: "omux8tgei8",
        kind: "barrier",
        position: [-0.5, 12, -5.5],
        size: [15, 10.5, 5.5]
      },
      {
        id: "omux9547yg",
        kind: "barrier",
        position: [0, 24.5, 13],
        size: [15, 18, 5.5]
      },
      {
        id: "omux9gcubl",
        kind: "fan",
        position: [0.5, 20, 8.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 1, 0],
        fanForce: 1,
        fanReach: 8,
        fanSpread: 2.4,
        fanHeight: 2.8
      },
      {
        id: "omux9pxban",
        kind: "fan",
        position: [0, 27.5, 8],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 1, 0],
        fanForce: 1,
        fanReach: 8,
        fanSpread: 2.4,
        fanHeight: 2.8
      }
    ],
    coins: [],
    checkpoints: [
      {
        id: "kmux8wa5x9",
        position: [-0.5, 10.5, -14],
        width: 13
      },
      {
        id: "kmux9llz3m",
        position: [0, 19.5, 3],
        width: 13.2
      }
    ],
    goal: {
      position: [0, 36.5, 35.5],
      size: [8, 4, 2]
    },
    zones: []
  }
}

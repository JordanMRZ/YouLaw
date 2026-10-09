import type { LevelDef } from '../types'

export function createLevel26(): LevelDef {
  return {
    id: 26,
    name: "Climbing Session",
    subtitle: "Climb the mountain.",
    theme: "Personaliza este tema",
    world: "mountain",
    hubLabel: "MOUNTAIN RIDGE",
    parTime: 90,
    start: [0, 2.5, 1],
    palette: {
      fog: "#c5d5e4",
      skyTop: "#89c2d9",
      skyBottom: "#f0f4f8",
      ambient: "#d9e8f5",
      ground: "#6b9080",
      accent: "#f7b267",
      water: "#90e0ef"
    },
    platforms: [
      {
        id: "p1",
        position: [0, 2, 3.5],
        size: [7, 0.5, 8],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "p20",
        position: [0, 2, 108.4],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmuymhjpc2",
        position: [0, 2, 11.5],
        size: [5.5, 0.5, 8],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuymq2x26",
        position: [0, 5.5, 22],
        size: [5.5, 0.5, 6.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzk1mb62",
        position: [0, 5.5, 35],
        size: [7, 0.5, 8],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzk7lgb3",
        position: [0, 5.5, 43],
        size: [13.5, 1.5, 8],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzka1jc4",
        position: [0, 6.5, 44],
        size: [8.5, 1.5, 8],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzkaeir5",
        position: [0, 7.5, 45.5],
        size: [8.5, 1.5, 8],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzkecxm8",
        position: [0, 7.5, 60],
        size: [8.5, 1.5, 8],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzkvqnb9",
        position: [0, 7, 63],
        size: [8.5, 1.5, 8],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzkw2sua",
        position: [0, 6.5, 66.5],
        size: [8.5, 1.5, 8],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzl22wlc",
        position: [0, 2.5, 77.5],
        size: [8.5, 7.5, 8],
        kind: "rotating",
        color: "#f7b267",
        rotationSpeed: 0.6
      },
      {
        id: "pmuzleh95f",
        position: [-0.5, 2, 93.5],
        size: [8.5, 1.5, 5.5],
        kind: "static",
        color: "#f7b267"
      }
    ],
    challenges: [
      {
        id: "qmuymtpsc7",
        type: "grammar",
        origin: [0, 5, 28.5],
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
        id: "qmuzkdish7",
        type: "grammar",
        origin: [0.5, 8, 52.5],
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
        id: "qmuzlch84e",
        type: "grammar",
        origin: [1, 4.5, 87.5],
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
        id: "omuymianq3",
        kind: "barrier",
        position: [0, 3, 16],
        size: [6.5, 1.5, 1]
      },
      {
        id: "omuymmj724",
        kind: "barrier",
        position: [0, 3, 17],
        size: [6.5, 3, 1]
      },
      {
        id: "omuymo8u55",
        kind: "barrier",
        position: [0, 3.5, 18],
        size: [6.5, 4, 1]
      }
    ],
    coins: [
      {
        id: "c15",
        position: [0, 3.55, 98.4]
      },
      {
        id: "c16",
        position: [0, 3.55, 100.4]
      },
      {
        id: "c17",
        position: [0, 3.55, 102.4]
      },
      {
        id: "c18",
        position: [0, 3.55, 104.4]
      },
      {
        id: "c19",
        position: [0, 3.55, 106.4]
      }
    ],
    checkpoints: [
      {
        id: "kmuzkawdn6",
        position: [0, 6.5, 32.5],
        width: 8
      },
      {
        id: "kmuzkzl82b",
        position: [0, 9.5, 58],
        width: 9.5
      }
    ],
    goal: {
      position: [0, 3.2, 105.4],
      size: [8, 4, 2]
    },
    zones: []
  }
}

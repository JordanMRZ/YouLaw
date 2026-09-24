import type { LevelDef } from '../types'

export function createLevel14(): LevelDef {
  return {
    id: 14,
    name: "Climbing Time",
    subtitle: "Climb through the wall.",
    theme: "Platforming, context and grammar",
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
        position: [-0.5, 2, 6.5],
        size: [13.5, 1.22, 12.5],
        kind: "static",
        color: "#800080"
      },
      {
        id: "p20",
        position: [0, 2, 119.4],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmufrhus03",
        kind: "static",
        position: [3.5, 4, 11.5],
        size: [4, 2.3, 2.5],
        color: "#800080"
      },
      {
        id: "pmufrkmpk4",
        kind: "bounce",
        position: [-2, 6.5, 11],
        size: [2.5, 0.8, 2.5],
        color: "#ff00ff"
      },
      {
        id: "pmufsc46v2",
        kind: "bounce",
        position: [2, 10.3, 11],
        size: [2.5, 0.8, 2.5],
        color: "#ff00ff"
      },
      {
        id: "pmufscjr13",
        kind: "bounce",
        position: [-3, 12.1, 11],
        size: [2.5, 0.8, 2.5],
        color: "#ff00ff"
      },
      {
        id: "pmufwrhv34",
        kind: "static",
        position: [-1, 14, 28],
        size: [8, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmufwsvnw5",
        kind: "rotating",
        position: [-2, 14, 39],
        size: [8, 0.8, 8],
        color: "#f4a261",
        rotationSpeed: 0.6
      },
      {
        id: "pmufxbu2c7",
        kind: "vanishing",
        position: [-3, 14.5, 49.5],
        size: [5, 0.8, 5.5],
        color: "#c9a0dc"
      },
      {
        id: "pmufxiyuz8",
        kind: "vanishing",
        position: [-3, 14.5, 55.5],
        size: [5, 0.8, 5.5],
        color: "#c9a0dc"
      },
      {
        id: "pmufxr83fa",
        kind: "static",
        position: [-3.5, 14.5, 62],
        size: [8, 1.3, 6],
        color: "#800080"
      },
      {
        id: "pmufye5h8e",
        kind: "bounce",
        position: [-3.5, 16.4, 72],
        size: [5.5, 0.8, 2.5],
        color: "#ff00ff"
      },
      {
        id: "pmufyh6z7g",
        kind: "static",
        position: [-0.5, 19.3, 72],
        size: [3, 1.3, 2.5],
        color: "#800080"
      },
      {
        id: "pmufyjq30h",
        kind: "static",
        position: [-6.5, 19.3, 72],
        size: [3, 1.3, 2.5],
        color: "#800080"
      },
      {
        id: "pmufzk2xaj",
        kind: "moving",
        position: [-5, 17.5, 86],
        size: [8, 0.8, 8],
        color: "#800080",
        motion: {
          axis: "y",
          amplitude: 4.7,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "pmug0u8abn",
        kind: "static",
        position: [-4.5, 13, 93.5],
        size: [7.5, 0.8, 5.5],
        color: "#800080"
      },
      {
        id: "pmug1c0zqu",
        kind: "moving",
        position: [-3, 10.8, 105.5],
        size: [8, 0.8, 8],
        color: "#800080",
        motion: {
          axis: "y",
          amplitude: 4.7,
          speed: 1.2,
          phase: 0
        }
      }
    ],
    challenges: [
      {
        id: "qmufvuwt93",
        type: "grammar",
        origin: [-0.5, 14, 21],
        options: [
          {
            word: "IN",
            offset: [-5.5, 0, 0]
          },
          {
            word: "ON",
            offset: [0, 0, 0]
          },
          {
            word: "AT",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "AT",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "The meeting is ___ 9 AM",
        timeLimit: 15
      },
      {
        id: "qmufy0hmuc",
        type: "grammar",
        origin: [-4, 15, 68],
        options: [
          {
            word: "HAVE SUBMIT",
            offset: [-5.5, 0, 0]
          },
          {
            word: "SUBMITTED",
            offset: [0, 0, 0]
          },
          {
            word: "AT",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "SUBMITTED",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "The students _____ the report before the deadline",
        timeLimit: 15
      },
      {
        id: "qmug0ol9jm",
        type: "grammar",
        origin: [-4.5, 13, 99],
        options: [
          {
            word: "FINISHED",
            offset: [-5.5, 0, 0]
          },
          {
            word: "IS FINISHED",
            offset: [0, 0, 0]
          },
          {
            word: "FINISHES",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "IS FINISHED",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "The project _____ by the end of the week",
        timeLimit: 15
      }
    ],
    obstacles: [
      {
        id: "omufrctmo2",
        kind: "barrier",
        position: [-0.5, 7.5, 15],
        size: [13.5, 12.5, 4.85]
      },
      {
        id: "omufxvokob",
        kind: "barrier",
        position: [-3.5, 17.5, 76.5],
        size: [8, 8.5, 6.35]
      }
    ],
    coins: [
      {
        id: "nmug14li5o",
        position: [-0.5, 4.2, 110]
      },
      {
        id: "nmug15852p",
        position: [-0.5, 4.2, 112.5]
      },
      {
        id: "nmug15q5oq",
        position: [-0.5, 4.2, 115]
      },
      {
        id: "nmug16csjr",
        position: [-0.5, 4.2, 117.5]
      },
      {
        id: "nmug16pl0s",
        position: [-0.5, 4.2, 120.5]
      },
      {
        id: "nmug24lytv",
        position: [3.5, 5.7, 11.5]
      },
      {
        id: "nmug250qmw",
        position: [-2, 7.7, 11]
      },
      {
        id: "nmug25kp2x",
        position: [-2, 9.2, 11]
      },
      {
        id: "nmug25x3cy",
        position: [2, 11.7, 11]
      },
      {
        id: "nmug270f8z",
        position: [2, 13.2, 11]
      },
      {
        id: "nmug28m9810",
        position: [-3, 16.2, 50]
      },
      {
        id: "nmug28w4q11",
        position: [-3, 16.2, 55.5]
      },
      {
        id: "nmug3dtit12",
        position: [-4.5, 23.7, 85.5]
      },
      {
        id: "nmug3encv13",
        position: [-4.5, 22.5, 85.5]
      },
      {
        id: "nmug3f1o414",
        position: [-4.5, 21.3, 85.5]
      },
      {
        id: "nmug3fhw415",
        position: [-4.5, 18.6, 85.5]
      },
      {
        id: "nmug3fsbv16",
        position: [-4.5, 19.9, 85.5]
      }
    ],
    checkpoints: [
      {
        id: "kmufxkkq49",
        position: [-1.5, 16, 27],
        width: 8
      },
      {
        id: "kmufzrrumk",
        position: [-3.5, 23.5, 75.5],
        width: 10.2
      }
    ],
    goal: {
      position: [0, 4.2, 123.9],
      size: [8, 4, 2]
    },
    zones: []
  }
}

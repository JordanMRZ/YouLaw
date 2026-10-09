import type { LevelDef } from '../types'

export function createLevel27(): LevelDef {
  return {
    id: 27,
    name: "Elevated area",
    subtitle: "More high platforms.",
    theme: "Personaliza este tema",
    world: "mountain",
    hubLabel: "MOUNTAIN RIDGE",
    parTime: 90,
    start: [0, 2.5, -19],
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
        position: [0, 2, -19],
        size: [9.5, 0.5, 5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "p20",
        position: [0, 9.5, 98],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmuzmepnp3",
        position: [0, 2, -13.5],
        size: [4, 1, 4],
        kind: "bounce",
        color: "#f7b267"
      },
      {
        id: "pmuzmgv814",
        position: [0, 2.5, -6.5],
        size: [4, 1, 4],
        kind: "bounce",
        color: "#f7b267"
      },
      {
        id: "pmuzmh4k95",
        position: [0, 3.5, 2],
        size: [9.5, 1, 9],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzmrvep7",
        position: [0.5, 3.5, 18],
        size: [9.5, 1, 9],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzn10h49",
        position: [0.5, 6, 26.5],
        size: [5.5, 1, 6.5],
        kind: "moving",
        color: "#f7b267",
        motion: {
          axis: "y",
          amplitude: 3,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "pmuznaw10b",
        position: [0.5, 9, 35],
        size: [4.5, 1, 9],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuznnbwae",
        position: [0.5, 9.5, 49.5],
        size: [9.5, 1, 9],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuznrivlg",
        position: [0.5, 9.5, 59],
        size: [3, 1, 3.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzntfrii",
        position: [0.5, 9.5, 66],
        size: [3, 1, 3.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuznxbjck",
        position: [0.5, 9.5, 73],
        size: [11, 1, 4],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzo25ejm",
        position: [0.5, 9.5, 84],
        size: [11, 1, 4],
        kind: "static",
        color: "#f7b267"
      }
    ],
    challenges: [
      {
        id: "qmuzmnjs76",
        type: "grammar",
        origin: [0.5, 4, 10],
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
        id: "qmuznhmp9d",
        type: "grammar",
        origin: [0.5, 9.5, 42],
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
        id: "qmuznzj9bl",
        type: "grammar",
        origin: [1, 9.5, 78.5],
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
        id: "omuzndhpxc",
        kind: "movingBlock",
        position: [0.5, 11, 35],
        size: [1.6, 1.6, 1.6],
        speed: 2.4,
        motion: {
          axis: "x",
          amplitude: 3.6,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "omuznsg4jh",
        kind: "spinner",
        position: [0.5, 10.5, 66],
        size: [1.6, 1.6, 1.6],
        speed: 1.2
      },
      {
        id: "omuzntw8uj",
        kind: "spinner",
        position: [0.5, 10.5, 59],
        size: [1.6, 1.6, 1.6],
        speed: 1.2
      }
    ],
    coins: [
      {
        id: "nmuzoax65o",
        position: [0.5, 11, 94.5]
      },
      {
        id: "nmuzodigep",
        position: [0.5, 11, 96.5]
      },
      {
        id: "nmuzodxl5q",
        position: [0.5, 11, 98.5]
      },
      {
        id: "nmuzoehb7r",
        position: [0.5, 11, 92.5]
      },
      {
        id: "nmuzomtgrs",
        position: [0.5, 11, 90.5]
      },
      {
        id: "nmuzonkw0t",
        position: [-0.5, 11, 48.5]
      },
      {
        id: "nmuzoosq5u",
        position: [1.5, 11, 50.5]
      },
      {
        id: "nmuzop95sv",
        position: [-0.5, 11, 52.5]
      },
      {
        id: "nmuzoros2w",
        position: [1, 10.5, 33.5]
      },
      {
        id: "nmuzot841x",
        position: [1, 10.5, 31.5]
      },
      {
        id: "nmuzou7nly",
        position: [1, 10.5, 37.5]
      }
    ],
    checkpoints: [
      {
        id: "kmuzmtv6f8",
        position: [0.5, 5.5, 16],
        width: 10.2
      },
      {
        id: "kmuznorbcf",
        position: [0.5, 11.5, 46],
        width: 10.8
      },
      {
        id: "kmuzo3wk7n",
        position: [0.5, 11, 82.5],
        width: 11.5
      }
    ],
    goal: {
      position: [0, 11.5, 102],
      size: [8, 4, 2]
    },
    zones: []
  }
}

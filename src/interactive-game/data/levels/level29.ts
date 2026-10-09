import type { LevelDef } from '../types'

export function createLevel29(): LevelDef {
  return {
    id: 29,
    name: "Multiple choices",
    subtitle: "Multiple paths to choose.",
    theme: "Personaliza este tema",
    world: "mountain",
    hubLabel: "MOUNTAIN RIDGE",
    parTime: 90,
    start: [0, 13.5, -17.5],
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
        id: "p20",
        position: [0, 19.5, 71],
        size: [12, 0.5, 9],
        kind: "static"
      },
      {
        id: "pmuzz6t8i2",
        position: [0, 13, -17],
        size: [12, 0.5, 6.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzzdvac4",
        position: [4, 13, -8.5],
        size: [3.5, 0.5, 10.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzzia526",
        position: [-4, 13, -8.5],
        size: [3.5, 0.5, 10.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzzn9xq7",
        position: [0, 13, -1.5],
        size: [12, 0.5, 3.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv005b6ui",
        position: [0, 13, 9],
        size: [12, 0.5, 4.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv008zjbk",
        position: [3.5, 13, 13.5],
        size: [5, 0.5, 4.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv00h25nl",
        position: [6, 13, 18],
        size: [7, 0.5, 4.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv00tnpts",
        position: [-5, 14, 15.5],
        size: [5, 0.5, 4.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv00w7byt",
        position: [0, 13, 31.5],
        size: [17, 0.5, 4.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv00xwe9u",
        position: [-3.5, 15, 20.5],
        size: [5, 0.5, 4.5],
        kind: "vanishing",
        color: "#fbdcb9"
      },
      {
        id: "pmv00yh7nv",
        position: [-4, 14, 25.5],
        size: [5, 0.5, 4.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv014bqjx",
        position: [-0.5, 13, 42.5],
        size: [11.5, 0.5, 6],
        kind: "static",
        color: "#f7b267"
      }
    ],
    challenges: [
      {
        id: "qmv003redh",
        type: "grammar",
        origin: [-0.5, 13, 3],
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
        id: "qmv00yynuw",
        type: "grammar",
        origin: [-0.5, 13, 36.5],
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
        id: "qmv01v7i316",
        type: "grammar",
        origin: [-0.5, 19.5, 63],
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
        id: "omuzzb9t93",
        kind: "barrier",
        position: [0, 15.5, -8.5],
        size: [5.5, 4.5, 10.5]
      },
      {
        id: "omuzzuvsl8",
        kind: "hammer",
        position: [4, 15, -9],
        size: [1.2, 3.2, 1.2],
        speed: 1.2
      },
      {
        id: "omuzzw5hh9",
        kind: "movingBlock",
        position: [-2.5, 14.5, -5.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.7,
        motion: {
          axis: "x",
          amplitude: 3.2,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "omuzzwsawa",
        kind: "movingBlock",
        position: [-2.5, 14.5, -12],
        size: [1.6, 1.6, 1.6],
        speed: 1.7,
        motion: {
          axis: "x",
          amplitude: 3.2,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "omv0080gzj",
        kind: "barrier",
        position: [0, 16, 20],
        size: [5.5, 7.5, 17]
      },
      {
        id: "omv00okdyn",
        kind: "barrier",
        position: [3, 14, 21.5],
        size: [4, 0.5, 1]
      },
      {
        id: "omv00p10ho",
        kind: "barrier",
        position: [3.5, 15, 23.5],
        size: [4, 0.5, 1]
      },
      {
        id: "omv00st3vq",
        kind: "barrier",
        position: [2.5, 16, 25],
        size: [4, 0.5, 1]
      },
      {
        id: "omv00t02sr",
        kind: "barrier",
        position: [2, 14.5, 27.5],
        size: [4, 0.5, 1]
      },
      {
        id: "omv01ccdxz",
        kind: "barrier",
        position: [-0.5, 16.5, 52.5],
        size: [11, 7.5, 15]
      },
      {
        id: "omv01pxwb12",
        kind: "barrier",
        position: [-1.5, 14, 45],
        size: [2, 2, 1]
      },
      {
        id: "omv01rcik13",
        kind: "barrier",
        position: [0.5, 15, 44.5],
        size: [2, 2, 1]
      },
      {
        id: "omv01ri1h14",
        kind: "barrier",
        position: [2.5, 16.5, 44.5],
        size: [2, 2, 1]
      },
      {
        id: "omv01rvqi15",
        kind: "barrier",
        position: [-1.5, 19, 45],
        size: [2, 2, 1]
      },
      {
        id: "omv021k9k18",
        kind: "movingBlock",
        position: [-1, 22, 56.5],
        size: [1.5, 2.5, 1.5],
        speed: 5.6,
        motion: {
          axis: "x",
          amplitude: 6.3,
          speed: 1.7,
          phase: 0
        }
      },
      {
        id: "omv02312w19",
        kind: "movingBlock",
        position: [-1, 22, 52.5],
        size: [1.5, 2.5, 1.5],
        speed: 5.6,
        motion: {
          axis: "x",
          amplitude: 6.3,
          speed: 1.7,
          phase: 2.8
        }
      },
      {
        id: "omv024fjh1a",
        kind: "movingBlock",
        position: [-1, 22, 48.5],
        size: [1.5, 2.5, 1.5],
        speed: 5.6,
        motion: {
          axis: "x",
          amplitude: 6.3,
          speed: 1.7,
          phase: 0
        }
      }
    ],
    coins: [
      {
        id: "nmuzzxkcbb",
        position: [4, 14, -11]
      },
      {
        id: "nmuzzxu0lc",
        position: [-1.5, 17.2, -10.5]
      },
      {
        id: "nmv0003mmd",
        position: [4, 14, -5.5]
      },
      {
        id: "nmv000meve",
        position: [-4, 14, -7]
      },
      {
        id: "nmv0011mrf",
        position: [-4, 14, -8.5]
      },
      {
        id: "nmv001942g",
        position: [-4, 14, -10]
      },
      {
        id: "nmv028rai1b",
        position: [0, 21, 72]
      },
      {
        id: "nmv0292ec1c",
        position: [0, 21, 70]
      },
      {
        id: "nmv029aja1d",
        position: [0, 21, 68]
      },
      {
        id: "nmv02a5uc1e",
        position: [4, 15, 21.5]
      },
      {
        id: "nmv02akp41f",
        position: [4.5, 16, 23.5]
      },
      {
        id: "nmv02baah1g",
        position: [3.5, 15.5, 27.5]
      },
      {
        id: "nmv02dw7u1h",
        position: [-4, 16, 21]
      },
      {
        id: "nmv02e9hl1i",
        position: [-4, 16, 20]
      },
      {
        id: "nmv02fg901j",
        position: [-1.5, 15.5, 44.5]
      },
      {
        id: "nmv02fn091k",
        position: [0.5, 16.5, 44.5]
      },
      {
        id: "nmv02h3s01l",
        position: [2.5, 18, 44.5]
      }
    ],
    checkpoints: [
      {
        id: "kmv00jxgzm",
        position: [0, 14.5, 7.5],
        width: 14
      },
      {
        id: "kmv015hfty",
        position: [-0.5, 14.5, 40.5],
        width: 15
      }
    ],
    goal: {
      position: [0, 21, 74.5],
      size: [8, 4, 2]
    },
    zones: []
  }
}

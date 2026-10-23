import type { LevelDef } from '../types'

export function createLevel36(): LevelDef {
  return {
    id: 36,
    name: "Minor inconveniences",
    subtitle: "Plantilla editable de layout.",
    theme: "Personaliza este tema",
    world: "chaos",
    hubLabel: "CHAOS FACTORY",
    parTime: 90,
    start: [0, 2.5, -42],
    palette: {
      fog: "#6c584c",
      skyTop: "#bc4749",
      skyBottom: "#f2e8cf",
      ambient: "#e9c46a",
      ground: "#6c584c",
      accent: "#f77f00",
      water: "#264653"
    },
    platforms: [
      {
        id: "p1",
        position: [0, 2, -41.5],
        size: [18, 0.5, 7],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "p20",
        position: [1, 2, 89],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmv6qvwf62",
        position: [0, 2, -33.5],
        size: [9, 0.5, 9],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6qxe1g3",
        position: [0, 2.5, -26.5],
        size: [7, 1, 5.5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6qzmdu4",
        position: [0, 3.5, -21.5],
        size: [7, 1, 5.5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6r594a5",
        position: [0, 4, -14.5],
        size: [7, 0.5, 9],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6reufl7",
        position: [0, 4, -1.5],
        size: [10, 0.5, 5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6rm5ac9",
        position: [0, 4, 9.5],
        size: [14, 0.5, 2.5],
        kind: "rotating",
        color: "#f77f00",
        rotationSpeed: 0.6
      },
      {
        id: "pmv6rtyu7c",
        position: [0, 4, 20.5],
        size: [10, 0.5, 5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6ry42ke",
        position: [0, 3.5, 39.5],
        size: [14, 0.5, 4],
        kind: "moving",
        color: "#f77f00",
        motion: {
          axis: "z",
          amplitude: 3,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "pmv6s3gdrg",
        position: [-2.5, 4, 46],
        size: [5, 0.5, 2.5],
        kind: "vanishing",
        color: "#f77f00"
      },
      {
        id: "pmv6s75xxi",
        position: [4.5, 4, 50.5],
        size: [5, 0.5, 2.5],
        kind: "vanishing",
        color: "#f77f00"
      },
      {
        id: "pmv6sea0tj",
        position: [-2.5, 4, 56],
        size: [5, 0.5, 3],
        kind: "vanishing",
        color: "#f77f00"
      },
      {
        id: "pmv6sie8kk",
        position: [1, 4, 62.5],
        size: [10, 0.5, 5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6sq4jfm",
        position: [1, 4, 74],
        size: [6, 0.5, 5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6tasq0y",
        position: [0, 3.5, 32],
        size: [10, 0.5, 5],
        kind: "static",
        color: "#f77f00"
      }
    ],
    challenges: [
      {
        id: "qmv6r7h556",
        type: "grammar",
        origin: [0, 4, -7],
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
        id: "qmv6rvkbdd",
        type: "grammar",
        origin: [0, 3.5, 26.5],
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
        id: "qmv6sl87vl",
        type: "grammar",
        origin: [1, 4, 68],
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
        id: "omv6roxcia",
        kind: "movingBlock",
        position: [0, 5, 5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 3.8,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "omv6rt062b",
        kind: "movingBlock",
        position: [0, 5, 14],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 3.8,
          speed: 1.2,
          phase: 0
        }
      }
    ],
    coins: [
      {
        id: "nmv6sykaon",
        position: [0, 3, -32]
      },
      {
        id: "nmv6t00pio",
        position: [0, 3, -30.5]
      },
      {
        id: "nmv6t07rep",
        position: [0.5, 4, -27.5]
      },
      {
        id: "nmv6t0fkaq",
        position: [0.5, 4, -26]
      },
      {
        id: "nmv6t104xr",
        position: [0, 5, -23]
      },
      {
        id: "nmv6t1fvls",
        position: [0, 5, -21.5]
      },
      {
        id: "nmv6t6sewt",
        position: [0, 5, -1.5]
      },
      {
        id: "nmv6t7bxou",
        position: [0, 5, 0]
      },
      {
        id: "nmv6t8fxav",
        position: [0, 5, 9]
      },
      {
        id: "nmv6t8svew",
        position: [-0.5, 5, 8]
      },
      {
        id: "nmv6t917tx",
        position: [-0.5, 5, 10]
      },
      {
        id: "nmv6tjqjn10",
        position: [-2.5, 5, 46]
      },
      {
        id: "nmv6tkn6511",
        position: [4.5, 5, 50.5]
      },
      {
        id: "nmv6tmxi612",
        position: [-3, 5, 56]
      },
      {
        id: "nmv6ttxgb13",
        position: [0.5, 5, 73.5]
      },
      {
        id: "nmv6tuaqu14",
        position: [1, 3.5, 83]
      },
      {
        id: "nmv6tutey15",
        position: [1, 3.5, 84.5]
      },
      {
        id: "nmv6tv70e16",
        position: [1, 3.5, 86]
      },
      {
        id: "nmv6tvtn217",
        position: [1, 3.5, 87.5]
      }
    ],
    checkpoints: [
      {
        id: "kmv6rgqay8",
        position: [0, 5.5, -3],
        width: 11
      },
      {
        id: "kmv6tdev9z",
        position: [0, 5, 30],
        width: 10.8
      }
    ],
    goal: {
      position: [1, 3, 97],
      size: [8, 4, 2]
    },
    zones: []
  }
}

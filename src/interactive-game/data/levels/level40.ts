import type { LevelDef } from '../types'

export function createLevel40(): LevelDef {
  return {
    id: 40,
    name: "Ultimate Chaos",
    subtitle: "Plantilla editable de layout.",
    theme: "Personaliza este tema",
    world: "chaos",
    hubLabel: "CHAOS FACTORY",
    parTime: 90,
    start: [0, 4, -49],
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
        position: [0, 2, -49],
        size: [6, 2, 6.5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "p20",
        position: [0, 2, 90],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmv8cmenm2",
        position: [0, 2, -31],
        size: [8, 2, 6.5],
        kind: "moving",
        color: "#f77f00",
        motion: {
          axis: "z",
          amplitude: 11.7,
          speed: 0.5,
          phase: 0
        }
      },
      {
        id: "pmv8ctwst6",
        position: [0, 2, -13],
        size: [6, 2, 6.5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv8ifnjn2",
        position: [0, 2, -1],
        size: [8, 2, 5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv8itwth4",
        position: [0, 2, 13],
        size: [10.5, 2, 3],
        kind: "moving",
        color: "#f77f00",
        motion: {
          axis: "z",
          amplitude: 9.7,
          speed: 0.2,
          phase: 0
        }
      },
      {
        id: "pmv8j84sh9",
        position: [0, 2, 27.5],
        size: [8, 2, 5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv8jf4qfb",
        position: [0, 2, 39],
        size: [9.5, 2, 5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv8jm3ygc",
        position: [-4.5, 2, 46],
        size: [8, 2, 5],
        kind: "bounce",
        color: "#f77f00"
      },
      {
        id: "pmv8jm9g1d",
        position: [4.5, 2, 51.5],
        size: [8, 2, 5],
        kind: "vanishing",
        color: "#f77f00"
      },
      {
        id: "pmv8jq9dxf",
        position: [-4.5, 2, 58],
        size: [8, 2, 5],
        kind: "bounce",
        color: "#f77f00"
      },
      {
        id: "pmv8jud5dg",
        position: [4.5, 2, 64],
        size: [8, 2, 5],
        kind: "vanishing",
        color: "#f77f00"
      },
      {
        id: "pmv8jy6muh",
        position: [-0.5, 2, 70.5],
        size: [17, 2, 5],
        kind: "static",
        color: "#f77f00"
      }
    ],
    challenges: [
      {
        id: "qmv8cues07",
        type: "grammar",
        origin: [0, 2.5, -7],
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
        id: "qmv8jcad9a",
        type: "grammar",
        origin: [0.5, 2.5, 33],
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
        id: "qmv8k1u24i",
        type: "grammar",
        origin: [-0.5, 3, 76],
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
        id: "omv8cmyo23",
        kind: "barrier",
        position: [-3, 8, -40],
        size: [4, 14, 1]
      },
      {
        id: "omv8cspy84",
        kind: "barrier",
        position: [2, 7.5, -28],
        size: [4, 14, 1]
      },
      {
        id: "omv8ivvej5",
        kind: "barrier",
        position: [0, 5, 7],
        size: [3, 9, 1]
      },
      {
        id: "omv8j1qhe6",
        kind: "barrier",
        position: [-3.5, 5, 12],
        size: [3, 9, 1]
      },
      {
        id: "omv8j2a537",
        kind: "barrier",
        position: [0, 5, 16],
        size: [3, 9, 1]
      },
      {
        id: "omv8j38ne8",
        kind: "barrier",
        position: [3.5, 5, 20],
        size: [3, 9, 1]
      }
    ],
    coins: [
      {
        id: "nmv8khyprk",
        position: [0, 3, 93.5]
      },
      {
        id: "nmv8kki7ql",
        position: [0, 3, 91.5]
      },
      {
        id: "nmv8knsp4m",
        position: [0, 3, 89.5]
      },
      {
        id: "nmv8ko3gvn",
        position: [0, 3, 87.5]
      },
      {
        id: "nmv8kqip0o",
        position: [0, 3.5, 26]
      },
      {
        id: "nmv8krqnop",
        position: [0, 3.5, 27.5]
      },
      {
        id: "nmv8ksb1wq",
        position: [0, 3.5, 29]
      },
      {
        id: "nmv8ksx02r",
        position: [0, 3.5, 20]
      },
      {
        id: "nmv8kulu7s",
        position: [0, 3.5, 22]
      },
      {
        id: "nmv8kv6b1t",
        position: [0, 3.5, 18]
      },
      {
        id: "nmv8kvwktu",
        position: [3.5, 3.5, 16]
      },
      {
        id: "nmv8kw5cxv",
        position: [3.5, 3.5, 14]
      },
      {
        id: "nmv8kww5vw",
        position: [3.5, 3.5, 12]
      },
      {
        id: "nmv8kygbvx",
        position: [3.5, 3.5, 9.5]
      },
      {
        id: "nmv8l0t39y",
        position: [0, 3.5, 9.5]
      },
      {
        id: "nmv8l1h6vz",
        position: [-3.5, 3.5, 9.5]
      },
      {
        id: "nmv8l2pf610",
        position: [-3.5, 3.5, 7]
      },
      {
        id: "nmv8l32r011",
        position: [-3.5, 3.5, 4.5]
      },
      {
        id: "nmv8l4h1312",
        position: [1.5, 4, -32.5]
      },
      {
        id: "nmv8l56kj13",
        position: [-1, 4, -32.5]
      },
      {
        id: "nmv8l5jn114",
        position: [-3.5, 4, -32.5]
      },
      {
        id: "nmv8l6yy815",
        position: [-2.5, 4, -26]
      },
      {
        id: "nmv8l7r3s16",
        position: [-2.5, 4, -23.5]
      },
      {
        id: "nmv8l7ye817",
        position: [-2.5, 4, -21]
      }
    ],
    checkpoints: [
      {
        id: "kmv8ir06b3",
        position: [0, 4.5, -3],
        width: 8.9
      },
      {
        id: "kmv8jn24ke",
        position: [0, 4.5, 37],
        width: 10.6
      }
    ],
    goal: {
      position: [0, 3, 99],
      size: [8, 4, 2]
    },
    zones: []
  }
}

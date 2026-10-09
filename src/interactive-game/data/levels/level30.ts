import type { LevelDef } from '../types'

export function createLevel30(): LevelDef {
  return {
    id: 30,
    name: "The Peak",
    subtitle: "Finally, you're close to the top! Keep going!",
    theme: "Personaliza este tema",
    world: "mountain",
    hubLabel: "MOUNTAIN RIDGE",
    parTime: 90,
    start: [0.5, 16, -29.5],
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
        position: [0, 15.5, -30],
        size: [7, 0.5, 4],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv02y9c42",
        position: [-2, 14, -26],
        size: [3.5, 7.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv02zxg43",
        position: [1.5, 12, -26],
        size: [3.5, 9, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv031mws4",
        position: [1.5, 12.5, -24],
        size: [3.5, 9.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv031qxa5",
        position: [-0.5, 16.5, -22],
        size: [3.5, 6, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv031zwj6",
        position: [-2, 14.5, -24],
        size: [3.5, 7.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv032tjv7",
        position: [3, 15.5, -22],
        size: [3.5, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv0346pv8",
        position: [0.5, 17, -20],
        size: [3.5, 7.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv034t3o9",
        position: [4, 16.5, -20.5],
        size: [3.5, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv037wgta",
        position: [-2.5, 17.5, -21],
        size: [3.5, 6, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv038s20b",
        position: [0.5, 17.5, -18],
        size: [10, 7.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv03esmih",
        position: [0.5, 17.5, -8],
        size: [10, 7.5, 6],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv03gp9ej",
        position: [4, 20, -5.5],
        size: [3, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv03ibu9l",
        position: [2, 21, -6],
        size: [3, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv03j1sgm",
        position: [-2, 22, -5.5],
        size: [3, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv03seaaq",
        position: [4.5, 25.5, -3],
        size: [3, 6.5, 2],
        kind: "vanishing",
        color: "#f7b267"
      },
      {
        id: "pmv03tm4nr",
        position: [2.5, 26.5, -3],
        size: [3, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv03try3s",
        position: [-0.5, 27.5, -3],
        size: [3, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv03uxf7u",
        position: [-3, 27.5, -3],
        size: [3, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv03vaggv",
        position: [2.5, 28.5, -1],
        size: [3, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv03xz6vw",
        position: [-0.5, 29.5, -1],
        size: [3, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv03z451y",
        position: [2, 29.5, 1],
        size: [3, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv045tur12",
        position: [2, 30.5, 11.5],
        size: [12, 6.5, 5.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv0461et13",
        position: [5, 31.5, 15],
        size: [3, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv0468ms14",
        position: [2, 32, 14.5],
        size: [3, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv0479e115",
        position: [-1, 33, 16.5],
        size: [5.5, 6.5, 2],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv04c05z16",
        position: [6, 33, 17],
        size: [4, 6.5, 2.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv04eg8817",
        position: [3, 34, 18.5],
        size: [4, 6.5, 2.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv04ihac19",
        position: [7, 36, 19],
        size: [4, 1.5, 2.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv04qbd11c",
        position: [4.5, 37, 21.5],
        size: [4, 6.5, 2.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv04sabv1d",
        position: [0, 41.5, 25],
        size: [4, 2, 2.5],
        kind: "vanishing",
        color: "#f7b267"
      },
      {
        id: "pmv04tllk1e",
        position: [1, 38, 22.5],
        size: [4, 6.5, 2.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv04ul871h",
        position: [2, 39, 27],
        size: [7, 6.5, 2.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv04wbqp1j",
        position: [2, 40, 37],
        size: [7, 6.5, 2.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv04wonb1k",
        position: [3.5, 41, 39],
        size: [7, 6.5, 2.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv04wumj1l",
        position: [0.5, 42, 41],
        size: [7, 6.5, 2.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv04wztx1m",
        position: [5.5, 43, 41],
        size: [3.5, 6.5, 2.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv04xed51n",
        position: [2.5, 44, 43],
        size: [4.5, 6.5, 2.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv050usi1o",
        position: [2, 46.5, 48],
        size: [6.5, 1.5, 8],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmv053bng1p",
        position: [3.5, 39, 35.5],
        size: [7, 6.5, 2.5],
        kind: "static",
        color: "#f7b267"
      }
    ],
    challenges: [
      {
        id: "qmv03e744g",
        type: "grammar",
        origin: [0, 20.5, -14],
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
        id: "qmv040328z",
        type: "grammar",
        origin: [2, 32.5, 5.5],
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
        id: "qmv04vy9e1i",
        type: "grammar",
        origin: [1.5, 41, 31.5],
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
        id: "omv03h3igk",
        kind: "barrier",
        position: [0.5, 23, -4.5],
        size: [10.5, 11, 1.5]
      },
      {
        id: "omv03jbsfn",
        kind: "barrier",
        position: [1.5, 24, -5],
        size: [4.5, 2, 1.5]
      },
      {
        id: "omv03jrrdo",
        kind: "barrier",
        position: [-2, 25, -5],
        size: [2, 2, 1.5]
      },
      {
        id: "omv03k8dep",
        kind: "barrier",
        position: [0, 27.5, -5],
        size: [1.5, 1, 1.5]
      },
      {
        id: "omv040fkb10",
        kind: "hammer",
        position: [2.5, 31.5, -3.5],
        size: [1.2, 3.2, 1.2],
        speed: 1.2
      },
      {
        id: "omv04178811",
        kind: "hammer",
        position: [-0.5, 34.5, -0.5],
        size: [1.2, 3.2, 1.2],
        speed: 1.2
      },
      {
        id: "omv04m1vi1a",
        kind: "barrier",
        position: [0.5, 38, 19.5],
        size: [4, 6, 4]
      },
      {
        id: "omv04p70a1b",
        kind: "barrier",
        position: [3.5, 38, 20],
        size: [4, 2, 1]
      },
      {
        id: "omv04u4kc1g",
        kind: "barrier",
        position: [4, 39, 24.5],
        size: [4, 6, 4]
      },
      {
        id: "omv0549l21q",
        kind: "hammer",
        position: [1, 38, 16.5],
        size: [1.2, 3.2, 1.2],
        speed: 1.2
      },
      {
        id: "omv054k041r",
        kind: "hammer",
        position: [8, 39, 18.5],
        size: [1.2, 3.2, 1.2],
        speed: 1.2
      },
      {
        id: "omv054rax1s",
        kind: "hammer",
        position: [-0.5, 44, 25.5],
        size: [1.2, 3.2, 1.2],
        speed: 1.2
      }
    ],
    coins: [
      {
        id: "nmv03a51cc",
        position: [3, 19.5, -22.5]
      },
      {
        id: "nmv03afkdd",
        position: [4.5, 20.3, -20.5]
      },
      {
        id: "nmv03alube",
        position: [-2.5, 18.5, -26]
      },
      {
        id: "nmv03bc8yf",
        position: [0, 20, -21.5]
      }
    ],
    checkpoints: [
      {
        id: "kmv03fijvi",
        position: [0.5, 22.5, -10],
        width: 11.7
      },
      {
        id: "kmv04gx1318",
        position: [2, 35.5, 9.5],
        width: 13
      }
    ],
    goal: {
      position: [2, 48.5, 49],
      size: [8, 4, 2]
    },
    zones: []
  }
}

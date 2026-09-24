import type { LevelDef } from '../types'

export function createLevel13(): LevelDef {
  return {
    id: 13,
    name: "Watch your step",
    subtitle: "Be careful and plan where you're going.",
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
        id: "pmuejxidr2",
        kind: "static",
        position: [0.5, 3.5, 0],
        size: [8, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmuejy8t33",
        kind: "static",
        position: [0.5, 3.5, 8.5],
        size: [11, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmuek8wbm5",
        kind: "static",
        position: [0.5, 4, 16.5],
        size: [8, 2.8, 8],
        color: "#800080"
      },
      {
        id: "pmuekoqmp8",
        kind: "vanishing",
        position: [0.5, 4.5, 28.5],
        size: [3.5, 0.8, 2],
        color: "#c9a0dc"
      },
      {
        id: "pmuekrun49",
        kind: "static",
        position: [1.5, 2.5, 34.5],
        size: [10.5, 5.3, 7.5],
        color: "#800080"
      },
      {
        id: "pmuekw3y5a",
        kind: "moving",
        position: [-6, 5, 45],
        size: [8, 0.8, 8],
        color: "#400040",
        motion: {
          axis: "x",
          amplitude: 7.1,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "pmuel1hqjc",
        kind: "vanishing",
        position: [-11, 5, 53],
        size: [8, 0.8, 4.5],
        color: "#c9a0dc"
      },
      {
        id: "pmuel659ef",
        kind: "static",
        position: [-6.5, 2, 63],
        size: [14.5, 6.8, 9],
        color: "#800080"
      },
      {
        id: "pmuemdwhh2",
        kind: "static",
        position: [-6.5, 5, 78],
        size: [5, 1.3, 5.5],
        color: "#800080"
      },
      {
        id: "pmuemfqy23",
        kind: "vanishing",
        position: [-6, 12, 90],
        size: [6.5, 0.8, 4.5],
        color: "#c9a0dc"
      },
      {
        id: "pmuemh6tf5",
        kind: "bounce",
        position: [-8.5, 6.5, 83],
        size: [3, 1.3, 3.5],
        color: "#800080"
      },
      {
        id: "pmuemi84r6",
        kind: "bounce",
        position: [-3.5, 9, 83],
        size: [3, 1.3, 3.5],
        color: "#800080"
      },
      {
        id: "pmuemjy107",
        kind: "vanishing",
        position: [-3.5, 12, 95],
        size: [6.5, 0.8, 4.5],
        color: "#c9a0dc"
      },
      {
        id: "pmuemm8cf8",
        kind: "vanishing",
        position: [6, 7.5, 103.5],
        size: [6, 0.8, 6],
        color: "#c9a0dc"
      },
      {
        id: "pmufnuheo3",
        kind: "static",
        position: [1, 3, 111],
        size: [9, 0.8, 11.5],
        color: "#800080"
      },
      {
        id: "pmufow76o5",
        kind: "static",
        position: [0, 3, 130],
        size: [8, 0.8, 12],
        color: "#ffff00"
      }
    ],
    challenges: [
      {
        id: "qmuekgwjd7",
        type: "grammar",
        origin: [0.5, 4.5, 24.5],
        options: [
          {
            word: "HEARD",
            offset: [-5.5, 0, 0]
          },
          {
            word: "HEARS",
            offset: [0, 0, 0]
          },
          {
            word: "HEARING",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "HEARD",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "The court ___  the appeal yesterday",
        timeLimit: 15,
        explanation: "“Yesterday” indica pasado simple: “heard”.\n\n"
      },
      {
        id: "qmuelhqrvi",
        type: "grammar",
        origin: [-7, 5, 72],
        options: [
          {
            word: "START",
            offset: [-5.5, 0, 0]
          },
          {
            word: "STARTED",
            offset: [0, 0, 0]
          },
          {
            word: "STARTS",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "STARTS",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "The lesson ___ at 10:30 everyday",
        timeLimit: 15,
        explanation: "Es un hábito regular, por eso usamos presente simple con “starts”"
      },
      {
        id: "qmufodqij4",
        type: "grammar",
        origin: [1, 3, 120.5],
        options: [
          {
            word: "WE WILL",
            offset: [-5.5, 0, 0]
          },
          {
            word: "GO",
            offset: [0, 0, 0]
          },
          {
            word: "WENT",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "WE WILL",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "If the lesson finisihes early, _____ go home.",
        timeLimit: 15
      }
    ],
    obstacles: [
      {
        id: "omuekc6md6",
        kind: "barrier",
        position: [0.5, 5, 7],
        size: [10.5, 2, 0.85]
      },
      {
        id: "omuele5ych",
        kind: "movingBlock",
        position: [2.5, 3.9, 60],
        size: [2.1, 2.6, 3.6],
        speed: 1.2,
        motion: {
          axis: "z",
          amplitude: 6.7,
          speed: 0.7,
          phase: 0
        }
      },
      {
        id: "omuemg9pi4",
        kind: "barrier",
        position: [-6, 8.5, 86.5],
        size: [11.5, 8, 2.35]
      }
    ],
    coins: [
      {
        id: "nmufqjtzk2",
        position: [0.5, 4.7, 11.5]
      },
      {
        id: "nmufqk79d3",
        position: [1.5, 4.7, 10.5]
      },
      {
        id: "nmufqkh2p4",
        position: [0.5, 4.7, 9.5]
      },
      {
        id: "nmufql5dv5",
        position: [1, 6.7, 32]
      },
      {
        id: "nmufqloeh6",
        position: [1, 6.7, 33]
      },
      {
        id: "nmufqlwgu7",
        position: [1, 6.7, 35.5]
      },
      {
        id: "nmufqmdmm8",
        position: [1, 6.7, 36.5]
      },
      {
        id: "nmufqndb39",
        position: [2.5, 6.7, 63]
      },
      {
        id: "nmufqnvfpa",
        position: [2.5, 6.7, 59.5]
      },
      {
        id: "nmufqo09db",
        position: [2.5, 6.7, 61.5]
      },
      {
        id: "nmufqwy1bc",
        position: [-8.5, 8.2, 82.5]
      },
      {
        id: "nmufqxae7d",
        position: [-7, 9.7, 82.5]
      },
      {
        id: "nmufqxqxbe",
        position: [-5.5, 10.7, 82.5]
      },
      {
        id: "nmufqzu1kf",
        position: [2.5, 6.7, 58]
      },
      {
        id: "nmufr0bnlg",
        position: [2.5, 6.7, 56.5]
      }
    ],
    checkpoints: [
      {
        id: "kmuel8e2cg",
        position: [1.5, 7, 34.5],
        width: 11.4
      },
      {
        id: "kmufnn3ds2",
        position: [-6, 14, 86.5],
        width: 12.8
      }
    ],
    goal: {
      position: [0, 5.2, 134.4],
      size: [8, 4, 2]
    },
    zones: []
  }
}

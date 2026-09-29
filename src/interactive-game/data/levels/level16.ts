import type { LevelDef } from '../types'

export function createLevel16(): LevelDef {
  return {
    id: 16,
    name: "Scrapped Machinery",
    subtitle: "Navigate through the industrial zone.",
    theme: "Vocabulary, moving blocks, rotating platforms",
    world: "industrial",
    hubLabel: "INDUSTRIAL ZONE",
    parTime: 90,
    start: [0, 3.2, 14.2],
    palette: {
      fog: "#c9b59a",
      skyTop: "#e09f3e",
      skyBottom: "#f6e7c1",
      ambient: "#e6d3a3",
      ground: "#8d6e4c",
      accent: "#e85d04",
      water: "#6c757d"
    },
    platforms: [
      {
        id: "p1",
        position: [0, 2, 14],
        size: [9.5, 0.72, 9.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuhg7fme4",
        position: [0, 2, 54.5],
        size: [2.5, 0.72, 11.5],
        kind: "rotating",
        color: "#e85d04",
        rotationSpeed: 0.6
      },
      {
        id: "pmuldoxko3",
        position: [0, 1.9, 29.5],
        size: [6, 0.72, 18.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuldwfpj4",
        position: [0, 2.2, 46],
        size: [12, 0.72, 2.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuldyzza5",
        position: [5, 2.2, 65.5],
        size: [4.5, 0.72, 4.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmule3wts6",
        position: [-3.5, 2.2, 65.5],
        size: [4.5, 0.72, 4.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmulh1rpxg",
        position: [1, 2.2, 71],
        size: [14, 0.72, 4.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmulltgrxl",
        position: [1, 2.2, 84],
        size: [9.5, 0.72, 6.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmulm14uyn",
        position: [0.5, 3, 89.5],
        size: [4, 0.72, 4],
        kind: "vanishing",
        color: "#e85d04"
      },
      {
        id: "pmulm96gpo",
        position: [1, 3.5, 94],
        size: [9.5, 0.72, 4],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmulmsc1iq",
        position: [2, 2.8, 115.5],
        size: [8, 0.72, 1],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuln82p9s",
        position: [1, 3.8, 104],
        size: [9.5, 0.72, 4],
        kind: "static",
        color: "#e85d04"
      }
    ],
    challenges: [
      {
        id: "qmuld7wqj2",
        type: "vocabulary",
        origin: [0, 2, 41.5],
        options: [
          {
            word: "BROKEN",
            offset: [-5.5, 0, 0]
          },
          {
            word: "BOUND",
            offset: [0, 0, 0]
          },
          {
            word: "SILENT",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "BOUND",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "The parties were ______ by the terms of the contract.",
        timeLimit: 15,
        explanation: "“Bound by the terms” significa “obligados por los términos del contrato”."
      },
      {
        id: "qmulh0sz5f",
        type: "vocabulary",
        origin: [0.5, 2, 77.5],
        options: [
          {
            word: "ROOM",
            offset: [-5.5, 0, 0]
          },
          {
            word: "LAWSUIT",
            offset: [0, 0, 0]
          },
          {
            word: "CLAUSE",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "CLAUSE",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "Before signing, the client reviewed the legal ______.",
        timeLimit: 15,
        explanation: "Una “clause” es una cláusula del contrato."
      },
      {
        id: "qmuln4zenr",
        type: "vocabulary",
        origin: [0.5, 3, 99],
        options: [
          {
            word: "HAPPY",
            offset: [-5.5, 0, 0]
          },
          {
            word: "TIRED",
            offset: [0, 0, 0]
          },
          {
            word: "LIABLE",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "LIABLE",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "The company was ______ for the delay in delivery.",
        timeLimit: 15,
        explanation: "“Liable” significa responsable legalmente."
      }
    ],
    obstacles: [
      {
        id: "omulh8r0eh",
        kind: "movingBlock",
        position: [0, 3.4, 25],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 5.3,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "omulh9huki",
        kind: "movingBlock",
        position: [0, 3.2, 28.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 5.3,
          speed: 1.2,
          phase: 2.9
        }
      },
      {
        id: "omulhbi02j",
        kind: "movingBlock",
        position: [0, 3.2, 32],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 5.3,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "omulmr9irp",
        kind: "movingBlock",
        position: [1.5, 3.9, 112],
        size: [1.6, 1.1, 1.6],
        speed: 1.2,
        motion: {
          axis: "z",
          amplitude: 5.1,
          speed: 0.5,
          phase: 0
        }
      }
    ],
    coins: [
      {
        id: "nmule4uwo7",
        position: [0, 2.7, 55]
      },
      {
        id: "nmule5mkg8",
        position: [5, 3, 65.5]
      },
      {
        id: "nmule66b19",
        position: [6, 3, 66.5]
      },
      {
        id: "nmule6xl7a",
        position: [4, 3, 66.5]
      },
      {
        id: "nmule8mt9b",
        position: [5, 3, 67]
      },
      {
        id: "nmuled719c",
        position: [6, 3, 64.5]
      },
      {
        id: "nmuledtl1d",
        position: [5, 3, 64]
      },
      {
        id: "nmuleec9ie",
        position: [4, 3, 64.5]
      },
      {
        id: "nmulnq9gut",
        position: [1.5, 4.7, 109]
      },
      {
        id: "nmulnr3nyu",
        position: [1.5, 4.7, 111]
      },
      {
        id: "nmulnsbr2v",
        position: [1.5, 4.7, 113]
      },
      {
        id: "nmulp3q2tw",
        position: [0, 3.2, 24]
      },
      {
        id: "nmulp4np2x",
        position: [0, 3.2, 27]
      },
      {
        id: "nmulp5nnly",
        position: [0, 3.2, 30.5]
      }
    ],
    checkpoints: [
      {
        id: "kmulhrbamk",
        position: [0, 3.5, 45],
        width: 14.9
      },
      {
        id: "kmullus2em",
        position: [1, 4, 82],
        width: 10.3
      }
    ],
    goal: {
      position: [2, 4.7, 115.4],
      size: [8, 4.5, 2]
    },
    zones: []
  }
}

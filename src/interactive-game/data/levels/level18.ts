import type { LevelDef } from '../types'

export function createLevel18(): LevelDef {
  return {
    id: 18,
    name: "Fan Catastrophe",
    subtitle: "A lot of wind around here, watch out!",
    theme: "Personaliza este tema",
    world: "industrial",
    hubLabel: "INDUSTRIAL ZONE",
    parTime: 90,
    start: [0.5, 2.7, -23.8],
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
        position: [-0.5, 2, -24],
        size: [7, 0.5, 6.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "p20",
        position: [0, 2, 108.4],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmuprwjc12",
        position: [-0.5, 2, -17],
        size: [10, 0.5, 7.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuq2h8r13",
        position: [-0.5, 2.8, -5],
        size: [10.5, 2, 16.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuq2ytno9",
        position: [-2, 2.3, 5],
        size: [3.5, 1.5, 3],
        kind: "bounce",
        color: "#fc8b41"
      },
      {
        id: "pmuq316fqb",
        position: [-0.5, 5.3, 8.5],
        size: [9.5, 0.5, 3],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuvrd42e3",
        position: [-0.5, 5.1, 31],
        size: [9.5, 0.5, 3],
        kind: "moving",
        color: "#e85d04",
        motion: {
          axis: "z",
          amplitude: 9.1,
          speed: 0.4,
          phase: 0
        }
      },
      {
        id: "pmuvridqw4",
        position: [0, 5.1, 18],
        size: [11.5, 0.5, 4],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuvryjla9",
        position: [-0.5, 5.3, 43],
        size: [7, 0.5, 3],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuwq1mnnb",
        position: [-0.5, 5.5, 53],
        size: [9.7, 0.5, 4.7],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuwqcdd4d",
        position: [-0.5, 5.5, 67],
        size: [8.5, 0.5, 13.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuwqyrwpi",
        position: [0, 4.5, 82],
        size: [6, 1.5, 4],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuwr0htmj",
        position: [0, 3, 87],
        size: [6, 1.5, 4],
        kind: "vanishing",
        color: "#fda366"
      },
      {
        id: "pmuwr175jk",
        position: [-0.5, 2.5, 93],
        size: [6, 1.5, 4],
        kind: "static",
        color: "#e85d04"
      }
    ],
    challenges: [
      {
        id: "qmuq304tna",
        type: "grammar",
        origin: [0, 5, 13],
        options: [
          {
            word: "WAS",
            offset: [-5.5, 0, 0]
          },
          {
            word: "IS",
            offset: [0, 0, 0]
          },
          {
            word: "WERE",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "WERE",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "The machines ______ working at 8 o’clock.",
        timeLimit: 15,
        explanation: "Usamos were con sujetos plurales como “the machines”."
      },
      {
        id: "qmuvs56s9a",
        type: "grammar",
        origin: [0.5, 5.5, 47.5],
        options: [
          {
            word: "WORE",
            offset: [-5.5, 0, 0]
          },
          {
            word: "WEAR",
            offset: [0, 0, 0]
          },
          {
            word: "WEARING",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "WEAR",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "Please ______ your safety helmet.",
        timeLimit: 15,
        explanation: "Después de “please” usamos el verbo base para dar una instrucción: “Please wear…”"
      },
      {
        id: "qmuwqy059h",
        type: "grammar",
        origin: [-1, 5, 77],
        options: [
          {
            word: "ARE",
            offset: [-5.5, 0, 0]
          },
          {
            word: "IS",
            offset: [0, 0, 0]
          },
          {
            word: "WERE",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "WERE",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "The machines ______ very loud last night.",
        timeLimit: 15,
        explanation: "“Machines” es plural, así que usamos “were”."
      }
    ],
    obstacles: [
      {
        id: "omuq2w0rp7",
        kind: "barrier",
        position: [2, 6, -3.5],
        size: [5.5, 7, 13.35]
      },
      {
        id: "omuvrqrq36",
        kind: "barrier",
        position: [2.5, 6.5, 29],
        size: [3.5, 4, 0.85]
      },
      {
        id: "omuvrrktx7",
        kind: "barrier",
        position: [-3, 6.5, 32.5],
        size: [3.5, 4, 0.85]
      },
      {
        id: "omuvrschr8",
        kind: "barrier",
        position: [0, 6, 37],
        size: [9, 2.5, 0.85]
      },
      {
        id: "omuwphm0c2",
        kind: "fan",
        position: [-3, 6, -12.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 0, 1],
        fanForce: 1,
        fanReach: 16.1,
        fanSpread: 2.2,
        fanHeight: 2.8
      },
      {
        id: "omuwpwtk5a",
        kind: "fan",
        position: [0, 4, 58],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 1, 0],
        fanForce: 0.6,
        fanReach: 3.5,
        fanSpread: 2.2,
        fanHeight: 1.9
      },
      {
        id: "omuwqf4zee",
        kind: "fan",
        position: [-2, 7, 71.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 0, -1],
        fanForce: 0.1,
        fanReach: 8,
        fanSpread: 2.3,
        fanHeight: 2.8
      },
      {
        id: "omuwqmuvef",
        kind: "barrier",
        position: [2, 7.5, 64],
        size: [3, 3, 7]
      },
      {
        id: "omuwr410xl",
        kind: "fan",
        position: [-6, 3.5, 87],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [1, 0, 0],
        fanForce: 0.1,
        fanReach: 8,
        fanSpread: 5.5,
        fanHeight: 2.8
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
      },
      {
        id: "nmuq2necz4",
        position: [0, 3.2, -18]
      },
      {
        id: "nmuq2nllm5",
        position: [0, 3.2, -16.5]
      },
      {
        id: "nmuwprwye3",
        position: [-2.5, 5, -10]
      },
      {
        id: "nmuwps8xi4",
        position: [-2.5, 5, -8]
      },
      {
        id: "nmuwpsl3d5",
        position: [-2.5, 5, -6]
      },
      {
        id: "nmuwpt7e56",
        position: [-2.5, 5, -4]
      },
      {
        id: "nmuwptnk07",
        position: [-2.5, 5, -2]
      },
      {
        id: "nmuwptw5u8",
        position: [-2.5, 5, 0]
      },
      {
        id: "nmuwpu5jk9",
        position: [-2.5, 5, 2]
      }
    ],
    checkpoints: [
      {
        id: "kmuvrmvgi5",
        position: [0, 6.5, 17],
        width: 12.2
      },
      {
        id: "kmuwq2sq8c",
        position: [-0.5, 7, 51.5],
        width: 9.8
      },
      {
        id: "kmuwsc4pwm",
        position: [0, 6.5, 80.5],
        width: 8
      }
    ],
    goal: {
      position: [0, 3.2, 105.4],
      size: [8, 4, 2]
    },
    zones: []
  }
}

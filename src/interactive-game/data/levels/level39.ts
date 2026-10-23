import type { LevelDef } from '../types'

export function createLevel39(): LevelDef {
  return {
    id: 39,
    name:"Comfort",
    subtitle: "Peace before chaos",
    theme: "Personaliza este tema",
    world: "chaos",
    hubLabel: "CHAOS FACTORY",
    parTime: 90,
    start: [0, 2.5, -44],
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
        position: [0, 1.5, -43.5],
        size: [7.5, 1.5, 9.5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "p20",
        position: [0, 7, 101.5],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmv798tks2",
        position: [0, 1.5, -36],
        size: [7.5, 1.5, 3],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv79btek3",
        position: [-2.5, 1.5, -31.5],
        size: [2.5, 1.5, 6],
        kind: "vanishing",
        color: "#f77f00"
      },
      {
        id: "pmv79d13n4",
        position: [0, 1.5, -27],
        size: [7.5, 1.5, 3],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv79dnsj5",
        position: [2.5, 1.5, -22.5],
        size: [2.5, 1.5, 6],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv79e1k86",
        position: [0, 1.5, -18],
        size: [7.5, 1.5, 3],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv87behd3",
        position: [0, 1.5, -8],
        size: [7.5, 1.5, 4],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv87jggf4",
        position: [0, 6.5, -2.5],
        size: [13, 1.5, 3],
        kind: "moving",
        color: "#f77f00",
        motion: {
          axis: "y",
          amplitude: 3.5,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "pmv87nexy5",
        position: [0, 8.5, 9.5],
        size: [15, 1.5, 5.5],
        kind: "rotating",
        color: "#f77f00",
        rotationSpeed: 0.6
      },
      {
        id: "pmv87vjvv7",
        position: [0, 8.5, 22],
        size: [9, 1.5, 4],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv884d2x9",
        position: [0, 8.5, 33],
        size: [9, 1.5, 5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv88821id",
        position: [-0.5, 8.5, 38.5],
        size: [3.5, 2, 3],
        kind: "bounce",
        color: "#f77f00"
      },
      {
        id: "pmv888uq2e",
        position: [-0.5, 8.5, 44],
        size: [3.5, 2, 3],
        kind: "bounce",
        color: "#f77f00"
      },
      {
        id: "pmv88bkc0f",
        position: [0, 8.5, 50.5],
        size: [7, 1.5, 5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv88hdyhi",
        position: [0, 8.5, 61.5],
        size: [7, 1.5, 5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv89oj20k",
        position: [0, 8.5, 69.5],
        size: [4, 1.5, 3.5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv8a9c0zm",
        position: [0, 8.5, 75.5],
        size: [4, 1.5, 3.5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv8apxpkp",
        position: [0, 6, 81.5],
        size: [4, 3, 3.5],
        kind: "rotating",
        color: "#f77f00",
        rotationSpeed: 0.6
      }
    ],
    challenges: [
      {
        id: "qmv86y9172",
        type: "grammar",
        origin: [-0.5, 2, -13.5],
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
        id: "qmv87xihk8",
        type: "grammar",
        origin: [0, 9, 27],
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
        id: "qmv88czpnh",
        type: "grammar",
        origin: [0, 9, 56],
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
        id: "qmv8arxvvq",
        type: "grammar",
        origin: [0, 7, 87.5],
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
        id: "omv89pj02l",
        kind: "spinner",
        position: [0, 9.5, 69.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2
      },
      {
        id: "omv8aao5rn",
        kind: "spinner",
        position: [0, 9.5, 75.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2
      }
    ],
    coins: [
      {
        id: "nmv8aynb9r",
        position: [0, 8.5, 95.5]
      },
      {
        id: "nmv8ayu1us",
        position: [0, 8.5, 97]
      },
      {
        id: "nmv8az175t",
        position: [0, 8.5, 98.5]
      },
      {
        id: "nmv8aztbiu",
        position: [0, 8.5, 100]
      },
      {
        id: "nmv8b2atnv",
        position: [0, 10, 50.5]
      },
      {
        id: "nmv8b2tcqw",
        position: [-0.5, 10, 44]
      },
      {
        id: "nmv8b3695x",
        position: [-0.5, 10, 38.5]
      },
      {
        id: "nmv8b3h8py",
        position: [-0.5, 11, 40]
      },
      {
        id: "nmv8b3s1mz",
        position: [-0.5, 11, 42.5]
      },
      {
        id: "nmv8bam0a10",
        position: [0, 10, 23]
      },
      {
        id: "nmv8baq9k11",
        position: [0, 10, 22]
      },
      {
        id: "nmv8bav4n12",
        position: [0, 10, 21]
      },
      {
        id: "nmv8bdg5e14",
        position: [0, 11, -2.5]
      },
      {
        id: "nmv8bdses15",
        position: [0, 9, -2.5]
      },
      {
        id: "nmv8be3vf16",
        position: [0, 7, -2.5]
      },
      {
        id: "nmv8ber1b17",
        position: [0, 4.5, -2.5]
      },
      {
        id: "nmv8bl57s19",
        position: [-2.5, 3, -33.5]
      },
      {
        id: "nmv8bm3c11a",
        position: [-2.5, 3, -32]
      },
      {
        id: "nmv8bm8k81b",
        position: [-2.5, 3, -30.5]
      },
      {
        id: "nmv8bo2ud1c",
        position: [2.5, 2.5, -24]
      },
      {
        id: "nmv8bo8x61d",
        position: [2.5, 2.5, -22.5]
      },
      {
        id: "nmv8bog1r1e",
        position: [2.5, 2.5, -21]
      }
    ],
    checkpoints: [
      {
        id: "kmv87sezd6",
        position: [0, 3.5, -9.5],
        width: 8
      },
      {
        id: "kmv884ln3a",
        position: [0, 11, 31.5],
        width: 10
      },
      {
        id: "kmv898qdvj",
        position: [0, 10.5, 60],
        width: 8
      }
    ],
    goal: {
      position: [0, 8.5, 105.5],
      size: [8, 4, 2]
    },
    zones: []
  }
}

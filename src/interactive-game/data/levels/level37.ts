import type { LevelDef } from '../types'

export function createLevel37(): LevelDef {
  return {
    id: 37,
    name: "Dangerous Path",
    subtitle: "Any mistake can be fatal.",
    theme: "Personaliza este tema",
    world: "chaos",
    hubLabel: "CHAOS FACTORY",
    parTime: 90,
    start: [0, 3, -40.5],
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
        position: [0, 2, -40.5],
        size: [4, 1.5, 3.5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "p20",
        position: [0, 8.5, 77],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmv6umlpc2",
        position: [0, 2, -31.5],
        size: [2, 1.5, 13],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6v0gqk6",
        position: [0, 2.5, -24.5],
        size: [6.5, 2.5, 2],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6v5jum8",
        position: [0, 2.5, -13.5],
        size: [8.5, 2.5, 6],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6vi1yoa",
        position: [0, 5.5, -6.5],
        size: [8.5, 1, 3.5],
        kind: "moving",
        color: "#f77f00",
        motion: {
          axis: "y",
          amplitude: 3.2,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "pmv6vsddoc",
        position: [-0.5, 9.5, -1.5],
        size: [8.5, 1, 4],
        kind: "vanishing",
        color: "#f77f00"
      },
      {
        id: "pmv6w37z1e",
        position: [0, 8.5, 3.5],
        size: [8.5, 2.5, 2],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6wjllmg",
        position: [0, 9.5, 15],
        size: [5, 1, 4],
        kind: "vanishing",
        color: "#f77f00"
      },
      {
        id: "pmv6wonedh",
        position: [0, 9.5, 20.5],
        size: [9, 1, 4],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv6x1jlyj",
        position: [0, 9.5, 32.5],
        size: [9, 1, 4],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv73jyjj7",
        position: [0, 9, 57],
        size: [9, 1, 4],
        kind: "static",
        color: "#f77f00"
      }
    ],
    challenges: [
      {
        id: "qmv6v1hf47",
        type: "grammar",
        origin: [0, 3, -20],
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
        id: "qmv6wp4zqi",
        type: "grammar",
        origin: [-0.5, 9, 26.5],
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
        id: "qmv73lknk8",
        type: "grammar",
        origin: [0, 9, 62],
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
        id: "omv6up1qy3",
        kind: "movingBlock",
        position: [0, 4, -35.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 5.2,
          speed: 1.3,
          phase: 0
        }
      },
      {
        id: "omv6uppmb4",
        kind: "movingBlock",
        position: [0, 4, -31.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 5.2,
          speed: 1.3,
          phase: 2.7
        }
      },
      {
        id: "omv6uv6ys5",
        kind: "movingBlock",
        position: [0, 4, -27.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 5.2,
          speed: 1.3,
          phase: 0
        }
      },
      {
        id: "omv6vlludb",
        kind: "barrier",
        position: [2, 7.5, -4],
        size: [4, 11.5, 1]
      },
      {
        id: "omv6vvyh5d",
        kind: "barrier",
        position: [-2.5, 7.5, 1],
        size: [4, 11.5, 1]
      },
      {
        id: "omv6wauikf",
        kind: "movingBlock",
        position: [0, 9.5, 8.5],
        size: [2.5, 1.5, 1.5],
        speed: 1.2,
        motion: {
          axis: "z",
          amplitude: 3.2,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "omv735c5e3",
        kind: "movingBlock",
        position: [0, 9, 44.5],
        size: [6.7, 1.6, 3.2],
        speed: 1.2,
        motion: {
          axis: "z",
          amplitude: 8.7,
          speed: 0.5,
          phase: 0
        }
      },
      {
        id: "omv738qj24",
        kind: "fan",
        position: [-6, 10.5, 38],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [1, 0, 0],
        fanForce: 0.1,
        fanReach: 10,
        fanSpread: 1.8,
        fanHeight: 2.8
      },
      {
        id: "omv739leh5",
        kind: "fan",
        position: [4, 10.5, 42.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [-1, 0, 0],
        fanForce: 0.1,
        fanReach: 10,
        fanSpread: 1.8,
        fanHeight: 2.8
      },
      {
        id: "omv73e25q6",
        kind: "fan",
        position: [-6, 10.5, 47.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [1, 0, 0],
        fanForce: 0.1,
        fanReach: 10,
        fanSpread: 1.8,
        fanHeight: 2.8
      }
    ],
    coins: [
      {
        id: "nmv73o1nz9",
        position: [0, 3.5, -29]
      },
      {
        id: "nmv73op3ba",
        position: [0, 3.5, -33.5]
      },
      {
        id: "nmv73p5nxb",
        position: [0, 3.5, -37]
      },
      {
        id: "nmv73s0cgc",
        position: [0, 4.5, -24.5]
      },
      {
        id: "nmv73skdid",
        position: [0, 4.5, -13]
      },
      {
        id: "nmv73u8l4e",
        position: [0, 10.5, -6.5]
      },
      {
        id: "nmv73um13f",
        position: [0, 7.5, -6.5]
      },
      {
        id: "nmv73uxtqg",
        position: [0, 5, -6.5]
      },
      {
        id: "nmv73z8l8h",
        position: [0, 11, 6]
      },
      {
        id: "nmv73zlqfi",
        position: [0, 11, 8]
      },
      {
        id: "nmv7402u6j",
        position: [0, 11, 10]
      },
      {
        id: "nmv7418mok",
        position: [0, 10, 81.5]
      },
      {
        id: "nmv741maal",
        position: [0, 10, 79.5]
      },
      {
        id: "nmv74227hm",
        position: [0, 10, 77.5]
      },
      {
        id: "nmv742c1zn",
        position: [0, 10, 75.5]
      },
      {
        id: "nmv743fg3o",
        position: [0, 10, 73.5]
      }
    ],
    checkpoints: [
      {
        id: "kmv6v5zcg9",
        position: [0, 5.5, -15.5],
        width: 10
      },
      {
        id: "kmv6xfv20k",
        position: [0.5, 11.5, 31.5],
        width: 8.9
      }
    ],
    goal: {
      position: [0, 10.5, 84],
      size: [8, 4, 2]
    },
    zones: []
  }
}

import type { LevelDef } from '../types'

export function createLevel21(): LevelDef {
  return {
    id: 21,
    name: "Neon Staircase",
    subtitle: "Shiny colors",
    theme: "grammar, vocabulary",
    world: "neon",
    hubLabel: "NEON CITY",
    parTime: 90,
    start: [0, 2.5, -26],
    palette: {
      fog: "#241b4a",
      skyTop: "#12082b",
      skyBottom: "#3a1c71",
      ambient: "#5b2c6f",
      ground: "#2d1b4f",
      accent: "#ff2e97",
      water: "#00d4ff"
    },
    platforms: [
      {
        id: "p1",
        position: [0, 2, -24.5],
        size: [9.5, 0.5, 7],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "p20",
        position: [0, 2, 81.5],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmux53qhf3",
        position: [0, 2, -15],
        size: [2.5, 0.5, 12.5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmux55svv4",
        position: [0, 2, -6.5],
        size: [5, 0.5, 5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmux5mqa87",
        position: [0, 3, 12],
        size: [10.5, 0.5, 5],
        kind: "bounce",
        color: "#c10061"
      },
      {
        id: "pmux5oqlt8",
        position: [0, 5, 18.5],
        size: [10.5, 0.5, 5],
        kind: "bounce",
        color: "#c10061"
      },
      {
        id: "pmux5rf1f9",
        position: [0, 2, 4.5],
        size: [11, 0.5, 5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmux64qzsc",
        position: [-1, 4.5, 33],
        size: [11, 1, 5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmux69bspe",
        position: [-2, 5.5, 40],
        size: [4.5, 2, 5],
        kind: "rotating",
        color: "#00ffff",
        rotationSpeed: 0.6
      },
      {
        id: "pmux6ckphf",
        position: [-1, 8, 46.5],
        size: [10.5, 0.5, 5],
        kind: "bounce",
        color: "#c10061"
      },
      {
        id: "pmux6osp7i",
        position: [-0.5, 8, 71.5],
        size: [4.5, 2, 5],
        kind: "moving",
        color: "#00ffff",
        motion: {
          axis: "z",
          amplitude: 4.6,
          speed: 1.2,
          phase: 0
        },
        rotationSpeed: 0.6
      },
      {
        id: "pmux7sjuv2",
        position: [-1.5, 8.5, 59],
        size: [11, 1, 5],
        kind: "static",
        color: "#ff2e97"
      }
    ],
    challenges: [
      {
        id: "qmux5ccmt6",
        type: "grammar",
        origin: [0, 2, -1],
        options: [
          {
            word: "LEAVES",
            offset: [-5.5, 0, 0]
          },
          {
            word: "LEAVING",
            offset: [0, 0, 0]
          },
          {
            word: "LEFT",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "LEAVES",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "The bus ______ at 7:30 every morning.",
        timeLimit: 15
      },
      {
        id: "qmux60acub",
        type: "grammar",
        origin: [-0.5, 4.5, 26.5],
        options: [
          {
            word: "be",
            offset: [-5.5, 0, 0]
          },
          {
            word: "are",
            offset: [0, 0, 0]
          },
          {
            word: "is",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "is",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "There ______ a coffee shop near the station.",
        timeLimit: 15,
        explanation: "“A coffee shop” es singular, por eso usamos “is”."
      },
      {
        id: "qmux6fp7uh",
        type: "vocabulary",
        origin: [-1, 9.5, 53],
        options: [
          {
            word: "narrow",
            offset: [-5.5, 0, 0]
          },
          {
            word: "expensive",
            offset: [0, 0, 0]
          },
          {
            word: "slow",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "expensive",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "The opposite of “cheap” is ______.",
        timeLimit: 15,
        explanation: "“Expensive” significa caro.\n\n"
      }
    ],
    obstacles: [
      {
        id: "omux5a2ou5",
        kind: "spinner",
        position: [0, 3, -15.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2
      }
    ],
    coins: [
      {
        id: "nmux6re6qj",
        position: [0.5, 3.5, 74]
      },
      {
        id: "nmux6ssoxk",
        position: [0.5, 3.5, 76]
      },
      {
        id: "nmux6t00ol",
        position: [0.5, 3.5, 78]
      },
      {
        id: "nmux6t4yxm",
        position: [0.5, 3.5, 80]
      },
      {
        id: "nmux6tcvqn",
        position: [-1, 10.5, 67]
      },
      {
        id: "nmux6tqnlo",
        position: [-1, 10.5, 64]
      },
      {
        id: "nmux6wpu1p",
        position: [-1.5, 7, 40]
      },
      {
        id: "nmux6xa3tq",
        position: [-1, 5.5, 35]
      },
      {
        id: "nmux6xo9kr",
        position: [0, 3, -6.5]
      },
      {
        id: "nmux6y74gs",
        position: [0, 3, -8]
      },
      {
        id: "nmux6yjg9t",
        position: [0, 3, -9.5]
      }
    ],
    checkpoints: [
      {
        id: "kmux5tlhba",
        position: [0, 3.5, 3],
        width: 11.1
      },
      {
        id: "kmux67t7ld",
        position: [-1, 6.5, 31.5],
        width: 12
      },
      {
        id: "kmux7sxp13",
        position: [-0.5, 10.5, 57],
        width: 8
      }
    ],
    goal: {
      position: [0, 3, 83],
      size: [8, 4, 2]
    },
    zones: []
  }
}

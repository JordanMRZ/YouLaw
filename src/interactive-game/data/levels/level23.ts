import type { LevelDef } from '../types'

export function createLevel23(): LevelDef {
  return {
    id: 23,
    name: "Central Zone",
    subtitle: "The center of the city.",
    theme: "Personaliza este tema",
    world: "neon",
    hubLabel: "NEON CITY",
    parTime: 90,
    start: [0.5, 2.5, 9.5],
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
        position: [0, 2, 10],
        size: [8, 0.5, 8.5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "p20",
        position: [-1, 7.5, 126],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmuy5nyml3",
        position: [0, 9.5, 26.5],
        size: [10, 1, 5.5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuy5voa85",
        position: [0, 8.5, 32.5],
        size: [6, 1, 5.5],
        kind: "vanishing",
        color: "#ce0067"
      },
      {
        id: "pmuy5z4zo6",
        position: [0, 7.5, 39],
        size: [6, 1, 5.5],
        kind: "vanishing",
        color: "#ce0067"
      },
      {
        id: "pmuy62hx37",
        position: [0, 7.5, 61],
        size: [10, 1, 5.5],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmuy699eg8",
        position: [-0.5, 4.5, 47],
        size: [5, 8, 4.5],
        kind: "rotating",
        color: "#ff2e97",
        rotationSpeed: 0.6
      },
      {
        id: "pmuy74p7ve",
        position: [-0.5, 5.5, 75.5],
        size: [6, 1, 5.5],
        kind: "vanishing",
        color: "#ce0067"
      },
      {
        id: "pmuy7fg7bf",
        position: [-0.5, 4.5, 84],
        size: [10, 1, 5.5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuy8dpqcr",
        position: [-1, 5.5, 90.5],
        size: [6, 1, 5.5],
        kind: "vanishing",
        color: "#ce0067"
      },
      {
        id: "pmuy8e4mzs",
        position: [-1, 6.5, 98],
        size: [6, 1, 5.5],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmuy8mg4eu",
        position: [-1, 6.5, 111],
        size: [6, 1, 5.5],
        kind: "static",
        color: "#ff4fa7"
      },
      {
        id: "pmuy8y9p6w",
        position: [18.5, 13, 63],
        size: [10, 27, 7.5],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmuy8ztnwx",
        position: [16.5, 13.5, 73],
        size: [10, 27, 7.5],
        kind: "static",
        color: "#ff399c"
      },
      {
        id: "pmuy92recy",
        position: [-22, 13.5, 67],
        size: [10, 27, 7.5],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmuy93ablz",
        position: [-20.5, 12, 54.5],
        size: [10, 26, 7.5],
        kind: "static",
        color: "#ff359a"
      },
      {
        id: "pmuy955ii10",
        position: [-22.5, 10, 77],
        size: [10, 21, 7.5],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmuy96jie11",
        position: [-22.5, 10, 92.5],
        size: [10, 21, 7.5],
        kind: "static",
        color: "#ff359a"
      },
      {
        id: "pmuy9a06312",
        position: [16.5, 11, 95.5],
        size: [10, 21, 7.5],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmuy9brti13",
        position: [18, 14.5, 84],
        size: [10, 27, 7.5],
        kind: "static",
        color: "#ff399c"
      },
      {
        id: "pmuy9c6hc14",
        position: [-21, 9.5, 105],
        size: [10, 22, 7.5],
        kind: "static",
        color: "#ff359a"
      },
      {
        id: "pmuy9del015",
        position: [16.5, 11, 105.5],
        size: [10, 21, 7.5],
        kind: "static",
        color: "#00ffff"
      }
    ],
    challenges: [
      {
        id: "qmuy53zs02",
        type: "grammar",
        origin: [0, 10, 21],
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
        id: "qmuy6d9dp9",
        type: "grammar",
        origin: [-1, 8, 54],
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
        id: "qmuy8kwzat",
        type: "grammar",
        origin: [-1, 7, 104.5],
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
        id: "omuxapss52",
        kind: "barrier",
        position: [0, 6, 16],
        size: [10.5, 9, 4],
        speed: 1.5
      },
      {
        id: "omuxaqhmr3",
        kind: "fan",
        position: [0.5, 4, 13.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 1, 0],
        fanForce: 1,
        fanReach: 7.9,
        fanSpread: 1,
        fanHeight: 2.8
      },
      {
        id: "omuy6t6q8c",
        kind: "movingBlock",
        position: [-0.5, 8, 68.5],
        size: [1.6, 1.6, 1.6],
        speed: 0.6,
        motion: {
          axis: "z",
          amplitude: 3.2,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "omuy8onoyv",
        kind: "spinner",
        position: [0, 8.5, 39],
        size: [1.6, 1.6, 1.6],
        speed: 1.2
      }
    ],
    coins: [
      {
        id: "nmuy7oxswh",
        position: [0, 8.5, 123]
      },
      {
        id: "nmuy7p44di",
        position: [0, 8.5, 121]
      },
      {
        id: "nmuy7pe8zj",
        position: [0, 8.5, 119.5]
      },
      {
        id: "nmuy7q5aqk",
        position: [0, 8.5, 125]
      },
      {
        id: "nmuy7qwt8l",
        position: [-0.5, 9, 47.5]
      },
      {
        id: "nmuy7rgp2m",
        position: [1, 9, 46.5]
      },
      {
        id: "nmuy7sfk0n",
        position: [-2, 9, 46.5]
      },
      {
        id: "nmuy7uiyxo",
        position: [0.5, 7, 13.5]
      },
      {
        id: "nmuy7uth8p",
        position: [0.5, 8, 13.5]
      },
      {
        id: "nmuy7vqt6q",
        position: [0.5, 9, 13.5]
      }
    ],
    checkpoints: [
      {
        id: "kmuy5u4lr4",
        position: [0, 11.5, 24.5],
        width: 12
      },
      {
        id: "kmuy6wwebd",
        position: [0, 9.5, 59],
        width: 11.5
      },
      {
        id: "kmuy7jt26g",
        position: [-0.5, 6.5, 82.5],
        width: 11
      }
    ],
    goal: {
      position: [-1, 9.5, 131.5],
      size: [8, 4, 2]
    },
    zones: []
  }
}

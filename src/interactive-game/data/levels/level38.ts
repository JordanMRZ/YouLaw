import type { LevelDef } from '../types'

export function createLevel38(): LevelDef {
  return {
    id: 38,
    name: "Mechanical Crisis",
    subtitle: "A level with rotating platforms and obstacles.",
    theme: "Personaliza este tema",
    world: "chaos",
    hubLabel: "CHAOS FACTORY",
    parTime: 90,
    start: [0, 7.5, -39],
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
        position: [0, 4, -39],
        size: [5, 6, 4],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "p20",
        position: [0, 10, 89],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmv76n8pv2",
        position: [0, 6, -35.5],
        size: [9, 2, 3],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv76rnrq3",
        position: [3, 5.5, -28],
        size: [9, 1, 3.5],
        kind: "rotating",
        color: "#f77f00",
        rotationSpeed: 0.6
      },
      {
        id: "pmv76t13z4",
        position: [-6, 5.5, -24],
        size: [9, 1, 3.5],
        kind: "rotating",
        color: "#f77f00",
        rotationSpeed: 0.6
      },
      {
        id: "pmv76u2ni5",
        position: [1, 5.5, -15],
        size: [9, 1, 4],
        kind: "rotating",
        color: "#f77f00",
        rotationSpeed: 0.6
      },
      {
        id: "pmv76usxa6",
        position: [0, 6, -8.5],
        size: [9, 2, 3],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv76x3ct8",
        position: [0, 6, 1.5],
        size: [9, 2, 4],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv76z6fla",
        position: [0, 6.5, 6.5],
        size: [5.5, 2, 4],
        kind: "bounce",
        color: "#f77f00"
      },
      {
        id: "pmv772q7hb",
        position: [0, 7.5, 12],
        size: [5.5, 2, 4],
        kind: "bounce",
        color: "#f77f00"
      },
      {
        id: "pmv7730jrd",
        position: [0, 9, 23.5],
        size: [3, 2, 13],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv77505tf",
        position: [0, 9, 31.5],
        size: [7, 2, 3],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv778d0wh",
        position: [0, 9, 41.5],
        size: [7, 2, 5],
        kind: "static",
        color: "#f77f00"
      },
      {
        id: "pmv77pnfyn",
        position: [-0.5, 9.5, 60.5],
        size: [7, 1, 2.5],
        kind: "moving",
        color: "#f77f00",
        motion: {
          axis: "z",
          amplitude: 4.5,
          speed: 0.9,
          phase: 0
        }
      },
      {
        id: "pmv780936q",
        position: [-0.5, 9, 69],
        size: [7, 2, 5],
        kind: "static",
        color: "#f77f00"
      }
    ],
    challenges: [
      {
        id: "qmv76wknm7",
        type: "grammar",
        origin: [0, 6.5, -4],
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
        id: "qmv776slmg",
        type: "grammar",
        origin: [0, 9.5, 36],
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
        id: "qmv783plvr",
        type: "grammar",
        origin: [-0.5, 10, 74.5],
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
        id: "omv773t70e",
        kind: "fan",
        position: [2, 11, 17.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 0, 1],
        fanForce: 1,
        fanReach: 12.4,
        fanSpread: 5.4,
        fanHeight: 2.8
      },
      {
        id: "omv77ekjgk",
        kind: "barrier",
        position: [-0.5, 9.5, 53.5],
        size: [5.5, 2, 1]
      },
      {
        id: "omv77fv1hl",
        kind: "movingBlock",
        position: [-2.5, 10, 49],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "z",
          amplitude: 3.2,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "omv77npkwm",
        kind: "barrier",
        position: [0.5, 12, 53.5],
        size: [3, 2.5, 1]
      },
      {
        id: "omv77x4egp",
        kind: "barrier",
        position: [-0.5, 11, 62],
        size: [3.5, 2, 1]
      }
    ],
    coins: [
      {
        id: "nmv786iqys",
        position: [0, 11.5, 92.5]
      },
      {
        id: "nmv7877zst",
        position: [0, 11.5, 90.5]
      },
      {
        id: "nmv787gx2u",
        position: [0, 11.5, 88.5]
      },
      {
        id: "nmv787w8iv",
        position: [0, 11.5, 86.5]
      },
      {
        id: "nmv789h41x",
        position: [0, 8.5, 6.5]
      },
      {
        id: "nmv78a249y",
        position: [0, 8, 2]
      },
      {
        id: "nmv78athiz",
        position: [0, 9, 4]
      },
      {
        id: "nmv78c52510",
        position: [0, 9.5, 8.5]
      },
      {
        id: "nmv78cgyj11",
        position: [0, 9.5, 11]
      },
      {
        id: "nmv78doki12",
        position: [0, 10.5, 20]
      },
      {
        id: "nmv78dwca13",
        position: [0, 10.5, 21.5]
      },
      {
        id: "nmv78e40q14",
        position: [0, 10.5, 23]
      },
      {
        id: "nmv78edld15",
        position: [0, 10.5, 24.5]
      },
      {
        id: "nmv78f4qb16",
        position: [-3, 11, 43.5]
      },
      {
        id: "nmv78frj117",
        position: [-2.5, 11, 46]
      },
      {
        id: "nmv78ghn218",
        position: [-2.5, 11, 48]
      },
      {
        id: "nmv78go0819",
        position: [-2.5, 11, 50]
      },
      {
        id: "nmv78gymz1a",
        position: [0, 11, 69.5]
      },
      {
        id: "nmv78hkdy1b",
        position: [0, 11, 68]
      }
    ],
    checkpoints: [
      {
        id: "kmv76xnp19",
        position: [0, 8.5, 0],
        width: 9.9
      },
      {
        id: "kmv77bmd9i",
        position: [0, 11.5, 39.5],
        width: 8
      }
    ],
    goal: {
      position: [0, 11.5, 96],
      size: [8, 4, 2]
    },
    zones: []
  }
}

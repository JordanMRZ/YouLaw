import type { LevelDef } from '../types'
import { TrackBuilder } from '../trackBuilder'
import { palettes } from '../worlds'

export function createLevel11(): LevelDef {
  return {
    id: 11,
    name: "Bouncing Valley",
    subtitle: "Bouncepads everywhere!",
    theme: "Think fast.",
    world: "time",
    hubLabel: "CITY",
    parTime: 150,
    start: [0, 6.2, 2.2],
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
        id: "p1",
        position: [0, 4, 8],
        size: [14, 0.72, 16],
        kind: "static",
        color: "#800080"
      },
      {
        id: "p38",
        position: [0, 14.7, 151.2],
        size: [14, 0.72, 12],
        kind: "static",
        color: "#800080"
      },
      {
        id: "p45",
        position: [0, 14.7, 172.7],
        size: [7.5, 0.72, 29],
        kind: "static"
      },
      {
        id: "pmue7aazs6",
        kind: "static",
        position: [-0.5, 6, 19.5],
        size: [17.5, 0.8, 7],
        color: "#800080"
      },
      {
        id: "pmue7ee4w7",
        kind: "bounce",
        position: [-3.5, 8, 29.5],
        size: [7.5, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmue7fveb8",
        kind: "bounce",
        position: [5, 12, 37],
        size: [8, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmue7gght9",
        kind: "static",
        position: [2, 14, 45.5],
        size: [15.5, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmue7swk4c",
        kind: "static",
        position: [2.5, 14.5, 63],
        size: [8, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmue86tv4n",
        kind: "bounce",
        position: [2.5, 15, 75],
        size: [8, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmue8909oo",
        kind: "bounce",
        position: [2.5, 15, 86.5],
        size: [8, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmue8ase1p",
        kind: "bounce",
        position: [2.5, 15, 98],
        size: [8, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmue94pj9r",
        kind: "bounce",
        position: [2.5, 15, 113],
        size: [8, 0.8, 4],
        color: "#800080"
      },
      {
        id: "pmue964oos",
        kind: "bounce",
        position: [-5.5, 16.5, 119],
        size: [6, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmue97q4gt",
        kind: "static",
        position: [2, 19, 122],
        size: [7.5, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmue9m0tqx",
        kind: "bounce",
        position: [1.5, 19, 138],
        size: [8, 0.8, 8],
        color: "#800080"
      }
    ],
    challenges: [
      {
        id: "qmue7lhcrb",
        type: "grammar",
        origin: [2, 14.5, 54],
        options: [
          {
            word: "STAY",
            offset: [-5.5, 0, 0]
          },
          {
            word: "WE WILL",
            offset: [0, 0, 0]
          },
          {
            word: "STAYED",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "WE WILL",
        platformSize: [4.5, 0.72, 8.1],
        sentence: "If it rains, ____ get inside.",
        timeLimit: 15
      },
      {
        id: "qmue8d6ztq",
        type: "listening",
        origin: [3, 15, 107],
        options: [
          {
            word: "2022",
            offset: [-5.5, 0, 0]
          },
          {
            word: "2020",
            offset: [0, 0, 0]
          },
          {
            word: "2008",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "2022",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "She teaches english since ___",
        timeLimit: 15,
        audioText: "She teaches englih since 2022",
        explanation: "Two thousand twenty two = 2022",
        hideSentence: true
      },
      {
        id: "qmue9au40w",
        type: "grammar",
        origin: [2.5, 19, 130],
        options: [
          {
            word: "EATING",
            offset: [-5.5, 0, 0]
          },
          {
            word: "EAT",
            offset: [0, 0, 0]
          },
          {
            word: "WERE EATING",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "WERE EATING",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "We ______ lunch when the bell rang.",
        timeLimit: 15,
        explanation: "La acción estaba en progreso cuando otra acción ocurrió: “were eating” + “rang”."
      }
    ],
    obstacles: [
      {
        id: "omue7tw1hd",
        kind: "movingBlock",
        position: [2.5, 15.9, 59.5],
        size: [1.6, 1.6, 1.6],
        speed: 3.2,
        motion: {
          axis: "x",
          amplitude: 3.2,
          speed: 1.2,
          phase: 0
        }
      }
    ],
    coins: [
      {
        id: "c39",
        position: [0, 16.75, 159.2]
      },
      {
        id: "c40",
        position: [0, 16.75, 161.2]
      },
      {
        id: "c41",
        position: [0, 16.75, 163.2]
      },
      {
        id: "c42",
        position: [0, 16.75, 165.2]
      },
      {
        id: "c43",
        position: [0, 16.75, 167.2]
      },
      {
        id: "c44",
        position: [0, 16.75, 169.2]
      },
      {
        id: "nmue7uub9e",
        position: [1, 15.2, 44.5]
      },
      {
        id: "nmue7vybvf",
        position: [-0.5, 15.2, 46.5]
      },
      {
        id: "nmue7w5y4g",
        position: [-2, 15.2, 44.5]
      },
      {
        id: "nmue80nbli",
        position: [2.5, 15.2, 46.5]
      },
      {
        id: "nmue81ikkj",
        position: [4, 15.2, 44.5]
      },
      {
        id: "nmue825mnk",
        position: [5.5, 15.2, 46.5]
      },
      {
        id: "nmue82rdrl",
        position: [7, 15.2, 44.5]
      }
    ],
    checkpoints: [
      {
        id: "kmue83anrm",
        position: [3, 16.5, 62],
        width: 8
      },
      {
        id: "kmue98omgu",
        position: [2, 21, 123.5],
        width: 9.4
      }
    ],
    goal: {
      position: [0, 16.9, 170.2],
      size: [8, 4, 2]
    },
    zones: [
      {
        id: "zn2",
        label: "1 BASIC PREPOSITIONS",
        position: [0, 7.4, 18]
      },
      {
        id: "zn11",
        label: "2  GRAMMAR",
        position: [0, 7.6, 39.2]
      },
      {
        id: "zn17",
        label: "3  LISTENING",
        position: [0, 7.6, 62.4]
      },
      {
        id: "zn22",
        label: "4  CONTEXT",
        position: [0, 7.6, 83.6]
      },
      {
        id: "zn27",
        label: "5  FINAL RUN",
        position: [0, 7.6, 102.8]
      }
    ]
  }
}

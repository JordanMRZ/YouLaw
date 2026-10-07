import type { LevelDef } from '../types'

export function createLevel24(): LevelDef {
  return {
    id: 24,
    name: "Main Highway",
    subtitle: "The main road of the city.",
    theme: "Personaliza este tema",
    world: "neon",
    hubLabel: "NEON CITY",
    parTime: 90,
    start: [0, 2.5, -32],
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
        position: [0, 2, -31.5],
        size: [11.5, 0.5, 4.5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "p20",
        position: [0.5, 2, 92.5],
        size: [8.5, 0.5, 22],
        kind: "static"
      },
      {
        id: "pmuya3the2",
        position: [0, 2, -17],
        size: [8.5, 0.5, 25],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuyb396e9",
        position: [0, 2, -2.5],
        size: [8.5, 0.5, 4],
        kind: "vanishing",
        color: "#ffc8e3"
      },
      {
        id: "pmuybehk5a",
        position: [0, 2, 2],
        size: [8.5, 0.5, 5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuybq43mc",
        position: [0.5, 2, 12.5],
        size: [8.5, 0.5, 5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuybua36e",
        position: [0.5, 2, 17],
        size: [8.5, 0.5, 4],
        kind: "vanishing",
        color: "#ffc8e3"
      },
      {
        id: "pmuybwu2lf",
        position: [0.5, 2, 21],
        size: [8.5, 0.5, 4],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuybxqiig",
        position: [0.5, 2, 25],
        size: [8.5, 0.5, 4],
        kind: "vanishing",
        color: "#ffc8e3"
      },
      {
        id: "pmuyby5goh",
        position: [0.5, 2, 30],
        size: [8.5, 0.5, 6],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuyc75asl",
        position: [0.5, 2, 43.5],
        size: [8.5, 0.5, 8],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuyclcdkr",
        position: [1, 2, 64.5],
        size: [8.5, 0.5, 8],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuyhyyft4",
        position: [0.5, 2, 78],
        size: [8.5, 0.5, 7],
        kind: "static",
        color: "#ff2e97"
      }
    ],
    challenges: [
      {
        id: "qmuybo36mb",
        type: "grammar",
        origin: [0, 2, 7],
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
        id: "qmuybyifei",
        type: "grammar",
        origin: [0.5, 2, 36.5],
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
        id: "qmuyhw0ny2",
        type: "grammar",
        origin: [1, 2, 71.5],
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
        id: "omuya5w9b4",
        kind: "barrier",
        position: [4.5, 2.5, -16.5],
        size: [1, 1.5, 25.5]
      },
      {
        id: "omuya97d85",
        kind: "barrier",
        position: [-4.5, 2.5, -13.5],
        size: [1, 1.5, 32]
      },
      {
        id: "omuyacwre6",
        kind: "fan",
        position: [0, 4, -19],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 0, -1],
        fanForce: 0.1,
        fanReach: 10.1,
        fanSpread: 5.5,
        fanHeight: 2.8
      },
      {
        id: "omuyax13u7",
        kind: "hammer",
        position: [3, 5, -10.5],
        size: [1.2, 3.2, 1.2],
        speed: 1.2
      },
      {
        id: "omuyazhl98",
        kind: "hammer",
        position: [-2.5, 5, -10.5],
        size: [1.2, 3.2, 1.2],
        speed: 1.2
      },
      {
        id: "omuybs6end",
        kind: "barrier",
        position: [5, 2.5, 21.5],
        size: [1, 1.5, 23.5]
      },
      {
        id: "omuybyyayj",
        kind: "barrier",
        position: [-4, 2.5, 21.5],
        size: [1, 1.5, 23.5]
      },
      {
        id: "omuyc37hgk",
        kind: "fan",
        position: [1, 4, 25],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 0, -1],
        fanForce: 0.1,
        fanReach: 8,
        fanSpread: 5.5,
        fanHeight: 2.8
      },
      {
        id: "omuyc7nqrm",
        kind: "barrier",
        position: [-4, 2.5, 56.5],
        size: [1, 1.5, 23.5]
      },
      {
        id: "omuyc8tdtn",
        kind: "barrier",
        position: [5, 2.5, 57],
        size: [1, 1.5, 23.5]
      },
      {
        id: "omuycnh7fs",
        kind: "fan",
        position: [0, 1.5, 50.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 1, 0],
        fanForce: 1.5,
        fanReach: 8,
        fanSpread: 2.3,
        fanHeight: 2.8
      },
      {
        id: "omuycp8s8t",
        kind: "fan",
        position: [0, 1.5, 57],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 1, 0],
        fanForce: 1.5,
        fanReach: 8,
        fanSpread: 2.3,
        fanHeight: 2.8
      },
      {
        id: "omuyi626m9",
        kind: "barrier",
        position: [5, 2.5, 86],
        size: [1, 1.5, 23.5]
      },
      {
        id: "omuyi6usga",
        kind: "barrier",
        position: [-4, 2, 85.5],
        size: [1, 1.5, 23.5]
      }
    ],
    coins: [
      {
        id: "nmuyi4ska5",
        position: [0, 3.5, 87.5]
      },
      {
        id: "nmuyi50d96",
        position: [0, 3.5, 89.5]
      },
      {
        id: "nmuyi56597",
        position: [0, 3.5, 91.5]
      },
      {
        id: "nmuyi5htf8",
        position: [0, 3.5, 94]
      },
      {
        id: "nmuyiamhyb",
        position: [0.5, 2.5, 67]
      },
      {
        id: "nmuyiavayc",
        position: [0.5, 2.5, 65]
      },
      {
        id: "nmuyib354d",
        position: [0.5, 2.5, 63]
      },
      {
        id: "nmuyibmque",
        position: [1, 3.5, 30.5]
      },
      {
        id: "nmuyibtbaf",
        position: [1, 3.5, 28.5]
      },
      {
        id: "nmuyiccy4g",
        position: [0, 3.5, -7]
      },
      {
        id: "nmuyiclnrh",
        position: [0, 3.5, -10]
      },
      {
        id: "nmuyicyymi",
        position: [0, 3.5, -12]
      },
      {
        id: "nmuyid5olj",
        position: [0, 3.5, -14.5]
      }
    ],
    checkpoints: [
      {
        id: "kmuych7fwp",
        position: [0.5, 3.5, 42.5],
        width: 9.5
      },
      {
        id: "kmuycia51q",
        position: [0.5, 4, 12],
        width: 9.5
      }
    ],
    goal: {
      position: [0.5, 3, 95.5],
      size: [8, 4, 2]
    },
    zones: []
  }
}

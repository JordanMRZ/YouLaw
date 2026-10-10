import type { LevelDef } from '../types'

export function createLevel34(): LevelDef {
  return {
    id: 34,
    name: "Solid or not?",
    subtitle: "Watch out for the vanishing platforms.",
    theme: "Personaliza este tema",
    world: "sky",
    hubLabel: "SKY ISLANDS",
    parTime: 90,
    start: [0, 13, -38.5],
    palette: {
      fog: "#bde0fe",
      skyTop: "#48cae4",
      skyBottom: "#caf0f8",
      ambient: "#ade8f4",
      ground: "#80ed99",
      accent: "#ffd6a5",
      water: "#0077b6"
    },
    platforms: [
      {
        id: "p1",
        position: [-1, 12.5, -36.5],
        size: [5.5, 0.5, 6.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "p20",
        position: [-2, 2, 104.5],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmv1g5r6e2",
        position: [-0.5, 13.5, -30],
        size: [4, 0.5, 5],
        kind: "bounce",
        color: "#ffd6a5"
      },
      {
        id: "pmv1guvrj2",
        position: [-1, 15.5, -23.5],
        size: [5.5, 0.5, 3],
        kind: "moving",
        color: "#ffd6a5",
        motion: {
          axis: "z",
          amplitude: 5.8,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "pmv1gzax63",
        position: [-1, 15.5, -11],
        size: [5.5, 0.5, 6.5],
        kind: "vanishing",
        color: "#ffd6a5"
      },
      {
        id: "pmv1h12ye4",
        position: [-1, 15.5, -1.5],
        size: [4, 0.5, 8.5],
        kind: "vanishing",
        color: "#ffd6a5"
      },
      {
        id: "pmv1h6diw6",
        position: [-1, 15.5, 5],
        size: [9, 0.5, 4.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv1hw6rf4",
        position: [-1.5, 15.5, 15.5],
        size: [13, 0.5, 5],
        kind: "vanishing",
        color: "#ffd6a5"
      },
      {
        id: "pmv1i047y8",
        position: [-0.5, 4, 17.5],
        size: [13, 0.5, 9],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv1i9zuqb",
        position: [-1.5, 3.5, 31.5],
        size: [3.5, 0.5, 18.5],
        kind: "rotating",
        color: "#ffd6a5",
        rotationSpeed: 0.6
      },
      {
        id: "pmv1id6bgd",
        position: [1, 3.5, 45.5],
        size: [13, 0.5, 5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv1ihc7df",
        position: [1, 3.5, 58.5],
        size: [10.5, 0.5, 7],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv1ij4reh",
        position: [4, 3, 66],
        size: [3, 1.5, 7.5],
        kind: "vanishing",
        color: "#ffd6a5"
      },
      {
        id: "pmv1il4eyi",
        position: [1, 3, 73],
        size: [3, 1.5, 7.5],
        kind: "vanishing",
        color: "#ffd6a5"
      },
      {
        id: "pmv1ilkjqj",
        position: [-2, 3, 80],
        size: [3, 1.5, 7.5],
        kind: "vanishing",
        color: "#ffd6a5"
      },
      {
        id: "pmv1in484l",
        position: [-2, 2.5, 86],
        size: [11.5, 0.5, 2],
        kind: "static"
      }
    ],
    challenges: [
      {
        id: "qmv1h80yo7",
        type: "grammar",
        origin: [-1.5, 15.5, 10.5],
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
        id: "qmv1idu82e",
        type: "grammar",
        origin: [1, 3.5, 51.5],
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
        id: "qmv1imss5k",
        type: "grammar",
        origin: [-2, 2.5, 90],
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
        id: "omv1h3xeq5",
        kind: "fan",
        position: [-1, 16.5, 3.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 0, -1],
        fanForce: 0.1,
        fanReach: 8,
        fanSpread: 5.5,
        fanHeight: 2.8
      },
      {
        id: "omv1ht5fd2",
        kind: "barrier",
        position: [-1.5, 16, 18.5],
        size: [14, 12.5, 1]
      },
      {
        id: "omv1hxh9u5",
        kind: "barrier",
        position: [-0.5, 9.5, 12.5],
        size: [11, 11, 1]
      },
      {
        id: "omv1ibzeic",
        kind: "hammer",
        position: [-1.5, 5.5, 32],
        size: [1.2, 3.2, 1.2],
        speed: 1.2
      },
      {
        id: "omv1iowhpm",
        kind: "movingBlock",
        position: [0.5, 5, 73],
        size: [1.6, 1.6, 1.6],
        speed: 0.6,
        motion: {
          axis: "x",
          amplitude: 5.5,
          speed: 0.5,
          phase: 0
        }
      },
      {
        id: "omv1iqafsn",
        kind: "movingBlock",
        position: [4, 5, 65],
        size: [1.6, 1.6, 1.6],
        speed: 0.6,
        motion: {
          axis: "x",
          amplitude: 5.5,
          speed: 0.5,
          phase: 0
        }
      }
    ],
    coins: [
      {
        id: "c15",
        position: [-2, 3.5, 98.5]
      },
      {
        id: "c16",
        position: [-2, 3.5, 100.5]
      },
      {
        id: "c17",
        position: [-2, 3.5, 102.5]
      },
      {
        id: "c18",
        position: [-2, 3.5, 104.5]
      },
      {
        id: "c19",
        position: [-2, 3.5, 106.5]
      },
      {
        id: "nmv1iuyjqo",
        position: [-0.5, 17, -30]
      },
      {
        id: "nmv1ivaacp",
        position: [-0.5, 17, -28]
      },
      {
        id: "nmv1ivjj9q",
        position: [-0.5, 17, -26]
      },
      {
        id: "nmv1iyg4hr",
        position: [-1, 16.5, -13]
      },
      {
        id: "nmv1iywxns",
        position: [-1, 16.5, -11.5]
      },
      {
        id: "nmv1izdvft",
        position: [-1, 16.5, -10]
      },
      {
        id: "nmv1izv1gu",
        position: [-1, 12.5, 15.5]
      },
      {
        id: "nmv1j02fyv",
        position: [0.5, 15.5, 15]
      },
      {
        id: "nmv1j0le3w",
        position: [-1, 10.5, 15.5]
      },
      {
        id: "nmv1j1dmux",
        position: [-1, 8.5, 15.5]
      },
      {
        id: "nmv1j21mvy",
        position: [-2.5, 4.5, 29.5]
      },
      {
        id: "nmv1j2gwyz",
        position: [-3, 4.5, 31.5]
      },
      {
        id: "nmv1j2uys10",
        position: [-2.5, 4.5, 34]
      },
      {
        id: "nmv1j3mwz11",
        position: [-0.5, 4.5, 34]
      },
      {
        id: "nmv1j3yr512",
        position: [0, 4.5, 31.5]
      },
      {
        id: "nmv1j490y13",
        position: [-0.5, 4.5, 29.5]
      }
    ],
    checkpoints: [
      {
        id: "kmv1i6vup9",
        position: [-0.5, 5.5, 20],
        width: 16
      },
      {
        id: "kmv1ihwa0g",
        position: [1, 5, 55.5],
        width: 13.6
      }
    ],
    goal: {
      position: [-2, 3, 108],
      size: [8, 4, 2]
    },
    zones: []
  }
}

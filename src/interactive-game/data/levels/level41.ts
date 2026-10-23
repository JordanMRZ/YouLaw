import type { LevelDef } from '../types'

export function createLevel41(): LevelDef {
  return {
    id: 41,
    name: "Path to class",
    subtitle: "Plantilla editable de layout.",
    theme: "Personaliza este tema",
    world: "international",
    hubLabel: "INTERNATIONAL SCHOOL",
    parTime: 90,
    start: [0, 2.5, -41],
    palette: {
      fog: "#dce6ef",
      skyTop: "#4c6ef5",
      skyBottom: "#edf2fb",
      ambient: "#d0d9f5",
      ground: "#adb5bd",
      accent: "#3ee0b3",
      water: "#74c0fc"
    },
    platforms: [
      {
        id: "p1",
        position: [0, 2, -41],
        size: [7, 1, 6],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "p20",
        position: [0, 2, 101],
        size: [7, 0.72, 22],
        kind: "static"
      },
      {
        id: "pmv8m2x072",
        position: [0, 2.5, -35],
        size: [11, 2, 6],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8m4b463",
        position: [0, 3, -29],
        size: [11, 3, 6],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8mfbf34",
        position: [0, 3, -20.5],
        size: [6.5, 3, 11.5],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8msr8j7",
        position: [0, 3, -13.5],
        size: [12.5, 3, 3],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8n1dkhb",
        position: [0, 3, -4],
        size: [8, 3, 4],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8nd1y2d",
        position: [0, 2, 0],
        size: [8, 1.5, 4],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8nexvte",
        position: [0, 2, 11],
        size: [8, 1.5, 18],
        kind: "vanishing",
        color: "#3ee0b3"
      },
      {
        id: "pmv8ni42df",
        position: [0, 2, 22],
        size: [3.5, 1.5, 4],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8npd19l",
        position: [0, 2, 32.5],
        size: [7.5, 1.5, 4],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8o0mlsn",
        position: [0, 2, 36.5],
        size: [13.5, 1.5, 4],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8o55t1o",
        position: [0, 2, 40],
        size: [13.5, 1.5, 1.5],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8o5m79p",
        position: [0, 2, 42.5],
        size: [13.5, 1.5, 1.5],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8o5wmiq",
        position: [0, 2, 45],
        size: [13.5, 1.5, 1.5],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8obepxr",
        position: [0, 2, 47.5],
        size: [13.5, 1.5, 1.5],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8obqrks",
        position: [0, 2, 50],
        size: [13.5, 1.5, 1.5],
        kind: "bounce",
        color: "#3ee0b3"
      },
      {
        id: "pmv8oc1lzt",
        position: [0, 3, 56.5],
        size: [6.5, 1.5, 7],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8oi7xiv",
        position: [0, 3, 68],
        size: [9, 1.5, 4],
        kind: "static",
        color: "#3ee0b3"
      },
      {
        id: "pmv8oo9fix",
        position: [-2.5, 3, 73.5],
        size: [5.5, 1.5, 1.5],
        kind: "rotating",
        color: "#3ee0b3",
        rotationSpeed: 0.6
      },
      {
        id: "pmv8or0ouz",
        position: [3.5, 3, 78],
        size: [5.5, 1.5, 1.5],
        kind: "rotating",
        color: "#3ee0b3",
        rotationSpeed: 0.6
      },
      {
        id: "pmv8os7cu10",
        position: [0, 3, 83.5],
        size: [9, 1.5, 3],
        kind: "static",
        color: "#3ee0b3"
      }
    ],
    challenges: [
      {
        id: "qmv8mujjk8",
        type: "grammar",
        origin: [0, 4, -9],
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
        id: "qmv8noi5nk",
        type: "grammar",
        origin: [0, 2, 27],
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
        id: "qmv8oh3z5u",
        type: "grammar",
        origin: [0, 3.5, 63],
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
        id: "qmv8ossbv11",
        type: "grammar",
        origin: [0, 3.5, 87.5],
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
        id: "omv8mjvjo5",
        kind: "barrier",
        position: [0, 5.5, -23],
        size: [6.5, 2, 1]
      },
      {
        id: "omv8ms7f96",
        kind: "barrier",
        position: [0, 5.5, -18],
        size: [6.5, 2, 1]
      },
      {
        id: "omv8mutg19",
        kind: "movingBlock",
        position: [0, 5.5, -20],
        size: [1.6, 1.6, 1.6],
        speed: 3.5,
        motion: {
          axis: "x",
          amplitude: 4.4,
          speed: 1.4,
          phase: 0
        }
      },
      {
        id: "omv8nm8tlh",
        kind: "hammer",
        position: [0.5, 5, 8],
        size: [1.2, 3.2, 1.2],
        speed: 1.2
      },
      {
        id: "omv8nmgg3i",
        kind: "hammer",
        position: [3, 4.5, 14],
        size: [1.2, 3.2, 1.2],
        speed: 1.2
      },
      {
        id: "omv8nmsfbj",
        kind: "hammer",
        position: [-2.5, 4.5, 14],
        size: [1.2, 3.2, 1.2],
        speed: 1.2
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
        id: "nmv8oxauw13",
        position: [0, 4.5, -36]
      },
      {
        id: "nmv8oxn9w14",
        position: [0, 4.5, -34.5]
      },
      {
        id: "nmv8oywen15",
        position: [0.5, 5.5, -30.5]
      },
      {
        id: "nmv8oz1hh16",
        position: [0, 5.5, -28.5]
      },
      {
        id: "nmv8p0nh017",
        position: [0.5, 4, 5.5]
      },
      {
        id: "nmv8p128n18",
        position: [3, 4, 7.5]
      },
      {
        id: "nmv8p3cpt19",
        position: [0.5, 4, 11]
      },
      {
        id: "nmv8p3scv1a",
        position: [0.5, 4, 13]
      },
      {
        id: "nmv8p41vh1b",
        position: [0.5, 4, 15]
      },
      {
        id: "nmv8p51tt1c",
        position: [0.5, 4, 38.5]
      },
      {
        id: "nmv8p5eww1d",
        position: [0.5, 4, 40.5]
      },
      {
        id: "nmv8p5oxb1e",
        position: [0.5, 4, 42.5]
      },
      {
        id: "nmv8p68t31f",
        position: [0.5, 4, 44.5]
      },
      {
        id: "nmv8p6mjc1g",
        position: [0.5, 4, 46.5]
      },
      {
        id: "nmv8p7e121h",
        position: [-2.5, 4, 73.5]
      },
      {
        id: "nmv8p7loe1i",
        position: [3.5, 4, 78]
      }
    ],
    checkpoints: [
      {
        id: "kmv8n50aqc",
        position: [0, 6, -5.5],
        width: 8.9
      },
      {
        id: "kmv8nvtu7m",
        position: [0, 3.5, 31.5],
        width: 8.6
      },
      {
        id: "kmv8ovrb612",
        position: [0, 4.5, 66.5],
        width: 9.7
      }
    ],
    goal: {
      position: [0, 3, 109],
      size: [8, 4, 2]
    },
    zones: []
  }
}

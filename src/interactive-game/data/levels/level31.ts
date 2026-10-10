import type { LevelDef } from '../types'

export function createLevel31(): LevelDef {
  return {
    id: 31,
    name: "Beautifull Sky",
    subtitle: "Complete the challenges while you are in the sky",
    theme: "Personaliza este tema",
    world: "sky",
    hubLabel: "SKY ISLANDS",
    parTime: 90,
    start: [0, 14.5, -32.5],
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
        position: [0, 14, -32.5],
        size: [4.5, 0.5, 6],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "p20",
        position: [0, 13.5, 97.5],
        size: [7, 0.5, 14],
        kind: "static"
      },
      {
        id: "pmv11n6jv2",
        position: [0, 14, -25.5],
        size: [8, 0.5, 8],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv11xanm4",
        position: [0, 14, -11],
        size: [8, 1, 6.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv11zm6s5",
        position: [0, 15.5, -6.5],
        size: [6.5, 1.5, 6.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv124ovs6",
        position: [0, 14.5, -10],
        size: [4.5, 1.5, 2],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv125klf7",
        position: [0, 15.5, 3],
        size: [4.5, 1.5, 6.5],
        kind: "vanishing",
        color: "#ffd6a5"
      },
      {
        id: "pmv1264228",
        position: [0, 12, 12.5],
        size: [5, 1.5, 6.5],
        kind: "vanishing",
        color: "#ffd6a5"
      },
      {
        id: "pmv126exw9",
        position: [0, 13.5, 23],
        size: [5, 1.5, 6.5],
        kind: "vanishing",
        color: "#ffd6a5"
      },
      {
        id: "pmv12go0dc",
        position: [0, 15.5, 39],
        size: [10, 1.5, 6.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv12kkpae",
        position: [0, 15, 52.5],
        size: [10, 2.5, 6.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv12nmdif",
        position: [0, 14.5, 57],
        size: [10, 2, 2.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv12otj9g",
        position: [0, 14, 59.5],
        size: [10, 1.5, 2.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv12x5twl",
        position: [0.5, 15, 75.5],
        size: [10, 1.5, 5.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv135dfom",
        position: [0.5, 13.5, 80],
        size: [10, 1.5, 5.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv135nqdn",
        position: [0.5, 14.5, 77.5],
        size: [7, 1.5, 7],
        kind: "static",
        color: "#ffd6a5"
      }
    ],
    challenges: [
      {
        id: "qmv11u76g3",
        type: "grammar",
        origin: [-0.5, 13.5, -18],
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
        id: "qmv12je51d",
        type: "grammar",
        origin: [0.5, 16, 45.5],
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
        id: "qmv136i01o",
        type: "grammar",
        origin: [0.5, 13.5, 86],
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
        id: "omv12d1ozb",
        kind: "fan",
        position: [0, 11.5, 31],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 1, 0],
        fanForce: 1,
        fanReach: 8,
        fanSpread: 5.5,
        fanHeight: 5.1
      },
      {
        id: "omv12pwouh",
        kind: "movingBlock",
        position: [1, 15.5, 62.5],
        size: [3, 1.5, 2],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 3.2,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "omv12tu3qj",
        kind: "movingBlock",
        position: [1, 15.5, 66.5],
        size: [3, 1.5, 2],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 3.2,
          speed: 1.2,
          phase: 2.7
        }
      },
      {
        id: "omv12uvnuk",
        kind: "movingBlock",
        position: [1, 15.5, 70.5],
        size: [3, 1.5, 2],
        speed: 1.2,
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
        id: "nmv139bw7p",
        position: [-2, 15, -24.5]
      },
      {
        id: "nmv139uezq",
        position: [2, 15, -24.5]
      },
      {
        id: "nmv13a5afr",
        position: [0, 15, -25.5]
      },
      {
        id: "nmv13aspjs",
        position: [2, 15, -26.5]
      },
      {
        id: "nmv13bdigt",
        position: [-2, 15, -26.5]
      },
      {
        id: "nmv13bssvu",
        position: [-1.5, 15.5, -12]
      },
      {
        id: "nmv13cb2rv",
        position: [2, 15.5, -12]
      },
      {
        id: "nmv13cruvw",
        position: [-1.5, 17, -7.5]
      },
      {
        id: "nmv13d2j8x",
        position: [2.5, 17, -7.5]
      },
      {
        id: "nmv13d9t2y",
        position: [1, 17, -5]
      },
      {
        id: "nmv13dybiz",
        position: [0, 13.5, 14]
      },
      {
        id: "nmv13ebmx10",
        position: [0, 13.5, 12.5]
      },
      {
        id: "nmv13f2hl11",
        position: [0, 13.5, 11]
      },
      {
        id: "nmv13fi4z12",
        position: [0.5, 17.5, 31]
      },
      {
        id: "nmv13g0p013",
        position: [0.5, 19.5, 31]
      },
      {
        id: "nmv13gmfb14",
        position: [0.5, 21.5, 31]
      },
      {
        id: "nmv13h37k15",
        position: [0, 17.5, 53]
      },
      {
        id: "nmv13hdh516",
        position: [0, 17.5, 55]
      },
      {
        id: "nmv13hpc917",
        position: [0, 16.5, 57.5]
      },
      {
        id: "nmv13ilwq19",
        position: [1, 16.5, 76]
      },
      {
        id: "nmv13jkxf1a",
        position: [1, 16, 79.5]
      },
      {
        id: "nmv13jvvg1b",
        position: [0.5, 15, 82]
      },
      {
        id: "nmv13omac1c",
        position: [0, 15, 98.5]
      },
      {
        id: "nmv13peux1d",
        position: [0, 15, 96.5]
      },
      {
        id: "nmv13qfw31e",
        position: [0, 15, 94.5]
      }
    ],
    checkpoints: [
      {
        id: "kmv129e0na",
        position: [0, 18, -9],
        width: 7.6
      },
      {
        id: "kmv12qieci",
        position: [0, 18, 50.5],
        width: 11.2
      }
    ],
    goal: {
      position: [0, 15, 102.5],
      size: [8, 4, 2]
    },
    zones: []
  }
}

import type { LevelDef } from '../types'

export function createLevel32(): LevelDef {
  return {
    id: 32,
    name: "Sky Factory",
    subtitle: "Mechanisms floating in the sky!.",
    theme: "Personaliza este tema",
    world: "sky",
    hubLabel: "SKY ISLANDS",
    parTime: 90,
    start: [0.5, 12, -34],
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
        position: [0, 10.5, -33.5],
        size: [11, 0.5, 8],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "p20",
        position: [1.5, 11, 104.5],
        size: [7, 0.5, 15.5],
        kind: "static"
      },
      {
        id: "pmv159wz62",
        position: [0, 10.5, -23.5],
        size: [3.5, 0.5, 8],
        kind: "moving",
        color: "#ffd6a5",
        motion: {
          axis: "x",
          amplitude: 3.7,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "pmv15bkmv3",
        position: [0, 10.5, -13],
        size: [3.5, 0.5, 8],
        kind: "moving",
        color: "#ffd6a5",
        motion: {
          axis: "x",
          amplitude: 3.7,
          speed: 1.2,
          phase: 2.7
        }
      },
      {
        id: "pmv15dsx44",
        position: [0, 10.5, -4],
        size: [9, 0.5, 5.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv15gmcw6",
        position: [0, 10.5, 9],
        size: [9, 0.5, 6.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv15k4wk8",
        position: [0, 10.5, 19],
        size: [3, 0.5, 11],
        kind: "rotating",
        color: "#ffd6a5",
        rotationSpeed: 0.6
      },
      {
        id: "pmv15ld5v9",
        position: [0.5, 10.5, 31],
        size: [3, 0.5, 11],
        kind: "rotating",
        color: "#ffd6a5",
        rotationSpeed: 0.6
      },
      {
        id: "pmv15oiiea",
        position: [0, 10.5, 41.5],
        size: [9, 0.5, 6.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv15pozfb",
        position: [0, 11, 43.5],
        size: [9, 0.5, 6.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv15pwpfc",
        position: [0, 11.5, 46.5],
        size: [9, 0.5, 6.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv15ujq2f",
        position: [1.5, 11, 60],
        size: [9, 0.5, 4.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv164cy0k",
        position: [1.5, 15.5, 65],
        size: [9, 0.5, 5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv1673ixm",
        position: [0, 16.5, 71.5],
        size: [2.5, 0.5, 3.5],
        kind: "vanishing",
        color: "#ffd6a5"
      },
      {
        id: "pmv16a0ejo",
        position: [3.5, 16, 76.5],
        size: [2.5, 0.5, 3.5],
        kind: "vanishing",
        color: "#ffd6a5"
      },
      {
        id: "pmv16als3p",
        position: [2, 14, 81.5],
        size: [6.5, 0.5, 2.5],
        kind: "moving",
        color: "#ffd6a5",
        motion: {
          axis: "y",
          amplitude: 3,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "pmv16cdydq",
        position: [2, 11.5, 86.5],
        size: [3.5, 0.5, 5],
        kind: "static",
        color: "#ffd6a5"
      }
    ],
    challenges: [
      {
        id: "qmv15g9qc5",
        type: "grammar",
        origin: [0, 10.5, 2],
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
        id: "qmv15su6zd",
        type: "grammar",
        origin: [-0.5, 11, 54],
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
        id: "qmv16kfsfr",
        type: "grammar",
        origin: [2, 11.5, 92],
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
        id: "omv15ucyre",
        kind: "barrier",
        position: [1.5, 13.5, 62],
        size: [9, 4.5, 1]
      },
      {
        id: "omv1600vjg",
        kind: "barrier",
        position: [4, 12, 61.5],
        size: [2, 2, 1]
      },
      {
        id: "omv160j86h",
        kind: "barrier",
        position: [-1.5, 12, 61.5],
        size: [1.5, 2, 1]
      },
      {
        id: "omv1617p4i",
        kind: "barrier",
        position: [1, 13, 61.5],
        size: [2, 2, 1]
      },
      {
        id: "omv1630a0j",
        kind: "barrier",
        position: [1, 14, 61.5],
        size: [0.5, 2, 1]
      },
      {
        id: "omv169g6in",
        kind: "spinner",
        position: [0, 17, 71.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2
      }
    ],
    coins: [
      {
        id: "nmv16nw9ks",
        position: [3.5, 17, 76.5]
      },
      {
        id: "nmv16oa98t",
        position: [0, 17.5, 72]
      },
      {
        id: "nmv16srviu",
        position: [1.5, 16.5, 65.5]
      },
      {
        id: "nmv16tbccv",
        position: [0.5, 11.5, -24]
      },
      {
        id: "nmv16vbkzw",
        position: [0, 11.5, -21]
      },
      {
        id: "nmv16viqbx",
        position: [0.5, 12, -12]
      },
      {
        id: "nmv16w8nuy",
        position: [0.5, 12, -16]
      },
      {
        id: "nmv16y4v3z",
        position: [2, 11.5, -3.5]
      },
      {
        id: "nmv16yb4x10",
        position: [3, 11.5, -5.5]
      },
      {
        id: "nmv16yp9811",
        position: [0.5, 11.5, -4.5]
      },
      {
        id: "nmv16yy9j12",
        position: [-1.5, 11.5, -3.5]
      },
      {
        id: "nmv16z72w13",
        position: [-2, 11.5, -5.5]
      },
      {
        id: "nmv16zkf614",
        position: [0.5, 11.5, 8.5]
      },
      {
        id: "nmv1738p815",
        position: [0.5, 11.5, 10.5]
      },
      {
        id: "nmv173gkf16",
        position: [-0.5, 11.5, 19.5]
      },
      {
        id: "nmv173sou17",
        position: [2, 12, 31]
      },
      {
        id: "nmv1747u918",
        position: [1, 12, 41.5]
      },
      {
        id: "nmv175z2719",
        position: [0.5, 12.5, 46]
      },
      {
        id: "nmv176buu1a",
        position: [0.5, 12.5, 48.5]
      },
      {
        id: "nmv1778w51b",
        position: [4, 13.5, 61]
      },
      {
        id: "nmv178ukh1c",
        position: [-1.5, 13.5, 61]
      },
      {
        id: "nmv1790k41d",
        position: [1.5, 16.5, 62.5]
      },
      {
        id: "nmv179ezi1e",
        position: [1, 12.5, 99.5]
      },
      {
        id: "nmv179z301f",
        position: [1, 12.5, 101.5]
      },
      {
        id: "nmv17a6b11g",
        position: [1, 12.5, 103.5]
      },
      {
        id: "nmv17aed51h",
        position: [1, 12.5, 105.5]
      }
    ],
    checkpoints: [
      {
        id: "kmv15hj577",
        position: [0, 12, 6],
        width: 11
      },
      {
        id: "kmv165k9ol",
        position: [1.5, 17, 63.5],
        width: 10
      }
    ],
    goal: {
      position: [1.5, 12, 110.5],
      size: [8, 4, 2]
    },
    zones: []
  }
}

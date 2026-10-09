import type { LevelDef } from '../types'

export function createLevel28(): LevelDef {
  return {
    id: 28,
    name: "High Altitude",
    subtitle: "You're so high now, keep going!",
    theme: "Personaliza este tema",
    world: "mountain",
    hubLabel: "MOUNTAIN RIDGE",
    parTime: 90,
    start: [0, 14.5, -33],
    palette: {
      fog: "#c5d5e4",
      skyTop: "#89c2d9",
      skyBottom: "#f0f4f8",
      ambient: "#d9e8f5",
      ground: "#6b9080",
      accent: "#f7b267",
      water: "#90e0ef"
    },
    platforms: [
      {
        id: "p20",
        position: [0, 34, 83],
        size: [7, 0.5, 14],
        kind: "static"
      },
      {
        id: "pmuzpks7v2",
        position: [0, 8.5, -32.5],
        size: [10, 11, 6],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzprwvt3",
        position: [0, 11.5, -27],
        size: [10, 3, 5.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzq17lm6",
        position: [1.5, 11.5, -21.5],
        size: [6, 3, 5.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzq1wsd7",
        position: [-3, 11.5, -21],
        size: [3, 3, 6.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzqd29ua",
        position: [0, 11.5, -16.5],
        size: [9, 3, 3],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzqexvob",
        position: [0, 11.5, -7.5],
        size: [9, 3, 3],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzqmd9wd",
        position: [0, 11.5, -4.5],
        size: [6, 3, 3],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzqnjg5e",
        position: [0, 13, -0.5],
        size: [6, 3, 5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzqqxzog",
        position: [0, 14.5, 3.5],
        size: [6, 3, 3],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzqt5dxh",
        position: [0, 15.5, 10.5],
        size: [6, 1, 3],
        kind: "moving",
        color: "#f7b267",
        motion: {
          axis: "z",
          amplitude: 3.8,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "pmuzr0js6i",
        position: [0, 15.5, 19.5],
        size: [3.5, 1, 3],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzr7xkhl",
        position: [0, 5.5, 31.5],
        size: [12.5, 17.5, 6],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzrf4jen",
        position: [0, 5.5, 34.5],
        size: [12.5, 17.5, 6],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzrgmmjo",
        position: [0, 6.5, 40.5],
        size: [12.5, 19, 6],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzrhxuvp",
        position: [0, 16, 46],
        size: [12.5, 19, 6],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzrxdbiw",
        position: [0, 16.5, 59.5],
        size: [12.5, 19, 6],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzrywumx",
        position: [0, 14, 66.5],
        size: [12.5, 19, 7.5],
        kind: "static",
        color: "#f7b267"
      },
      {
        id: "pmuzs6toj10",
        position: [0, 17.5, 73],
        size: [12.5, 32.5, 6],
        kind: "static",
        color: "#f7b267"
      }
    ],
    challenges: [
      {
        id: "qmuzqcn6i9",
        type: "grammar",
        origin: [0, 13, -12],
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
        id: "qmuzr5lzak",
        type: "grammar",
        origin: [0, 14.5, 25.5],
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
        id: "qmuzrq5xcv",
        type: "grammar",
        origin: [0, 25.5, 52.5],
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
        id: "omuzpzsgu4",
        kind: "barrier",
        position: [-3, 14, -23.5],
        size: [2.5, 4, 1.5]
      },
      {
        id: "omuzq4w518",
        kind: "barrier",
        position: [1.5, 14, -18.5],
        size: [6.5, 3, 1]
      },
      {
        id: "omuzqgr62c",
        kind: "barrier",
        position: [0, 14.5, -5.5],
        size: [4, 3, 1]
      },
      {
        id: "omuzr2y80j",
        kind: "spinner",
        position: [0, 16.5, 19.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2
      },
      {
        id: "omuzrm2qhq",
        kind: "barrier",
        position: [4, 17.5, 42],
        size: [2.5, 2, 2]
      },
      {
        id: "omuzrn360r",
        kind: "barrier",
        position: [-3, 20, 42],
        size: [4, 8, 2]
      },
      {
        id: "omuzrnj0ps",
        kind: "barrier",
        position: [1, 18.5, 42],
        size: [4, 4.5, 2]
      },
      {
        id: "omuzroi28t",
        kind: "barrier",
        position: [3, 18.5, 42.5],
        size: [2.5, 2, 2]
      },
      {
        id: "omuzroueau",
        kind: "barrier",
        position: [0, 21.5, 43],
        size: [2.5, 2, 2]
      },
      {
        id: "omuzs0k7uy",
        kind: "barrier",
        position: [4, 26, 66.5],
        size: [3, 5, 1]
      },
      {
        id: "omuzs30tqz",
        kind: "barrier",
        position: [-3.5, 25, 69.5],
        size: [5, 4.5, 1.5]
      },
      {
        id: "omuzx7f202",
        kind: "barrier",
        position: [1.5, 24, 70],
        size: [5, 3, 1.5]
      },
      {
        id: "omuzxei6z3",
        kind: "barrier",
        position: [1.5, 27, 70],
        size: [2, 3, 1.5]
      },
      {
        id: "omuzxi8gw4",
        kind: "barrier",
        position: [3, 28.5, 70],
        size: [2, 3, 1.5]
      },
      {
        id: "omuzxifrw5",
        kind: "barrier",
        position: [-4.5, 30.5, 70],
        size: [2, 3, 1.5]
      },
      {
        id: "omuzxj4uk6",
        kind: "barrier",
        position: [-2.5, 29.5, 70],
        size: [2, 1, 1.5]
      },
      {
        id: "omuzxkafx7",
        kind: "barrier",
        position: [-4, 26, 66.5],
        size: [3, 5, 1]
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
        id: "nmuzxo5ye8",
        position: [1.5, 14, -28.5]
      },
      {
        id: "nmuzxod949",
        position: [1.5, 14, -27]
      },
      {
        id: "nmuzxon8oa",
        position: [1.5, 14, -25.5]
      },
      {
        id: "nmuzxq5drb",
        position: [0, 15.5, -1]
      },
      {
        id: "nmuzxqw74c",
        position: [0, 15.5, 0.5]
      },
      {
        id: "nmuzxraa2d",
        position: [0, 17, 2.5]
      },
      {
        id: "nmuzxrrwue",
        position: [0, 17, 4]
      },
      {
        id: "nmuzxt3agf",
        position: [0, 17, 9.5]
      },
      {
        id: "nmuzxtii9g",
        position: [0, 17, 11.5]
      },
      {
        id: "nmuzxtuj7h",
        position: [0, 17, 13]
      },
      {
        id: "nmuzy213gi",
        position: [0, 16, 31.5]
      },
      {
        id: "nmuzy2lsxj",
        position: [0, 16, 33]
      },
      {
        id: "nmuzy2tvvk",
        position: [3, 16, 32.5]
      },
      {
        id: "nmuzy4zt6l",
        position: [3, 16, 34]
      },
      {
        id: "nmuzy5c7im",
        position: [2.5, 21.5, 42]
      },
      {
        id: "nmuzy5jz6n",
        position: [1, 23.5, 42]
      },
      {
        id: "nmuzy5q8po",
        position: [3.5, 20.5, 42.5]
      },
      {
        id: "nmuzy8gjjp",
        position: [2.5, 26.5, 46]
      },
      {
        id: "nmuzy8q0yq",
        position: [-1.5, 26.5, 46]
      },
      {
        id: "nmuzy8zcxr",
        position: [0.5, 26.5, 46]
      },
      {
        id: "nmuzy9f67s",
        position: [3, 30.5, 69.5]
      },
      {
        id: "nmuzy9mrut",
        position: [-1.5, 28, 69.5]
      },
      {
        id: "nmuzya69ku",
        position: [-3, 28, 69.5]
      },
      {
        id: "nmuzyan80v",
        position: [-4.5, 28, 69.5]
      },
      {
        id: "nmuzyb10gw",
        position: [-2.5, 31, 69.5]
      },
      {
        id: "nmuzybvmgx",
        position: [1.5, 29.5, 69.5]
      },
      {
        id: "nmuzyc31qy",
        position: [-4.5, 32.5, 69.5]
      }
    ],
    checkpoints: [
      {
        id: "kmuzqqmkff",
        position: [0, 15.5, -2],
        width: 8
      },
      {
        id: "kmuzrdy0em",
        position: [0, 16, 29.5],
        width: 16
      }
    ],
    goal: {
      position: [0, 35.5, 89],
      size: [8, 4, 2]
    },
    zones: []
  }
}

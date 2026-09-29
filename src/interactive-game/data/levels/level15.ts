import type { LevelDef } from '../types'

export function createLevel15(): LevelDef {
  return {
    id: 15,
    name: "Listening Practice",
    subtitle: "Climb through the wall.",
    theme: "Moving platforms, listening",
    world: "time",
    hubLabel: "TIME GARDENS",
    parTime: 90,
    start: [-1, 5.7, 13.2],
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
        id: "pmuh3l8bf3",
        kind: "static",
        position: [-1, 4.5, 16],
        size: [8, 0.8, 8],
        color: "#800080"
      },
      {
        id: "pmuh56oj6b",
        kind: "static",
        position: [-1, 4.5, 46.5],
        size: [8.5, 0.8, 2.5],
        color: "#800080"
      },
      {
        id: "pmuh5kva7d",
        kind: "static",
        position: [-2, 4.5, 58.5],
        size: [8, 0.8, 6],
        color: "#800080"
      },
      {
        id: "pmuh61ilog",
        kind: "static",
        position: [-1.5, 4.5, 81.5],
        size: [12, 0.8, 6],
        color: "#800080"
      },
      {
        id: "pmuh6pxr6k",
        kind: "bounce",
        position: [-1.5, 4.5, 94],
        size: [4.5, 0.8, 3.5],
        color: "#88d498"
      },
      {
        id: "pmuh6r47ml",
        kind: "static",
        position: [-1.5, 7, 99],
        size: [14.5, 0.8, 4.5],
        color: "#800080"
      },
      {
        id: "pmuh71ykyn",
        kind: "moving",
        position: [-5, 12, 100.5],
        size: [2, 0.8, 3.5],
        color: "#800080",
        motion: {
          axis: "y",
          amplitude: 3.3,
          speed: 0.7,
          phase: 0
        }
      },
      {
        id: "pmuh72v27o",
        kind: "moving",
        position: [2, 18.8, 100],
        size: [2, 0.8, 3.5],
        color: "#800080",
        motion: {
          axis: "y",
          amplitude: 3.3,
          speed: 0.7,
          phase: 0
        }
      },
      {
        id: "pmuh73rp3p",
        kind: "static",
        position: [-1.5, 15.5, 100],
        size: [3.5, 0.8, 2.5],
        color: "#800080"
      },
      {
        id: "pmuh7bfr8s",
        kind: "static",
        position: [-1.5, 22, 123],
        size: [8, 0.8, 8],
        color: "#800080"
      }
    ],
    challenges: [
      {
        id: "qmuh58glhc",
        type: "listening",
        origin: [-1.5, 4.5, 52.5],
        options: [
          {
            word: "GET",
            offset: [-5.5, 0, 0]
          },
          {
            word: "WILL GET",
            offset: [0, 0, 0]
          },
          {
            word: "GOT",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "WILL GET",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "If the students study every day, they ___ better results.",
        timeLimit: 15,
        audioText: "If the students study every day, they will get better results.",
        explanation: "“If + present simple” en la condición y “will + verb” en la consecuencia."
      },
      {
        id: "qmuh639fdi",
        type: "listening",
        origin: [-2, 4.5, 89],
        options: [
          {
            word: "IN",
            offset: [-5.5, 0, 0]
          },
          {
            word: "ON",
            offset: [0, 0, 0]
          },
          {
            word: "AT",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "IN",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "We usually study ___ the evening.",
        timeLimit: 15,
        audioText: "we usually study in the evening",
        explanation: "Con partes del día usamos “in the evening”."
      },
      {
        id: "qmuh762ipq",
        type: "listening",
        origin: [-3, 22, 115.5],
        options: [
          {
            word: "BEFORE",
            offset: [-5.5, 0, 0]
          },
          {
            word: "AFTER",
            offset: [0, 0, 0]
          },
          {
            word: "DURING",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "AFTER",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "We finish the ____ after lunch.",
        timeLimit: 15,
        audioText: "We finish the task after lunch."
      }
    ],
    obstacles: [
      {
        id: "omuh3v9de5",
        kind: "barrier",
        position: [3.5, 7, 30.5],
        size: [4, 9, 1.35]
      },
      {
        id: "omuh3vy966",
        kind: "barrier",
        position: [-5.5, 7, 30.5],
        size: [4, 9, 1.35]
      },
      {
        id: "omuh3y5fb7",
        kind: "movingBlock",
        position: [-1, 3.9, 32.5],
        size: [3.1, 2.1, 2.6],
        speed: 0,
        motion: {
          axis: "z",
          amplitude: 11.1,
          speed: 0.4,
          phase: 0
        }
      },
      {
        id: "omuh4vfsv8",
        kind: "movingBlock",
        position: [3.5, 3.9, 32.5],
        size: [3.1, 2.1, 2.6],
        speed: 0,
        motion: {
          axis: "z",
          amplitude: 11.1,
          speed: 0.4,
          phase: 0
        }
      },
      {
        id: "omuh4y8t49",
        kind: "movingBlock",
        position: [-5.5, 3.9, 32.5],
        size: [3.1, 2.1, 2.6],
        speed: 0,
        motion: {
          axis: "z",
          amplitude: 11.1,
          speed: 0.4,
          phase: 0
        }
      },
      {
        id: "omuh52veoa",
        kind: "barrier",
        position: [-1, 7, 40.5],
        size: [4, 9, 1.35]
      },
      {
        id: "omuh5mfp2e",
        kind: "movingBlock",
        position: [-2, 4.4, 66],
        size: [3.1, 1.6, 2.6],
        speed: 1.2,
        motion: {
          axis: "z",
          amplitude: 3.2,
          speed: 1.1,
          phase: 0
        }
      },
      {
        id: "omuh5tfq1f",
        kind: "movingBlock",
        position: [1.5, 4.4, 73.5],
        size: [3.1, 1.6, 2.6],
        speed: 1.2,
        motion: {
          axis: "z",
          amplitude: 3.2,
          speed: 1.1,
          phase: 2.2
        }
      },
      {
        id: "omuh6tkhcm",
        kind: "barrier",
        position: [-2, 14.5, 106],
        size: [18.5, 15, 9.35]
      }
    ],
    coins: [],
    checkpoints: [
      {
        id: "kmuh6dvuuj",
        position: [-2, 6.5, 56.5],
        width: 9.7
      }
    ],
    goal: {
      position: [-1.5, 24.2, 126.4],
      size: [8, 4, 2]
    },
    zones: []
  }
}

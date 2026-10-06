import type { LevelDef } from '../types'

export function createLevel19(): LevelDef {
  return {
    id: 19,
    name: "Listening Practice 2",
    subtitle: "Fans and listening challenges.",
    theme: "Fans, listening, vocabulary",
    world: "industrial",
    hubLabel: "INDUSTRIAL ZONE",
    parTime: 90,
    start: [0, 4.2, -22.8],
    palette: {
      fog: "#c9b59a",
      skyTop: "#e09f3e",
      skyBottom: "#f6e7c1",
      ambient: "#e6d3a3",
      ground: "#8d6e4c",
      accent: "#e85d04",
      water: "#6c757d"
    },
    platforms: [
      {
        id: "p1",
        position: [0, 2, -22.5],
        size: [13.5, 0.72, 5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "p20",
        position: [0.5, 4, 67],
        size: [7, 0.5, 15],
        kind: "static"
      },
      {
        id: "pmuobc61m2",
        position: [0, 2, -12],
        size: [7, 0.72, 16],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuomfi967",
        position: [0, 1.8, 9],
        size: [8.5, 0.72, 3],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuon853q8",
        position: [0, 1.6, 4],
        size: [8.5, 0.72, 3],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuonbtj1a",
        position: [0, 2.1, 13.5],
        size: [8.5, 0.72, 3],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuonfqt0e",
        position: [0, 2.4, 17.5],
        size: [8.5, 0.72, 4.2],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmupoqirn2",
        position: [0, 2.2, 29],
        size: [8.5, 0.72, 5.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmupoxl2r4",
        position: [0, 3, 36.5],
        size: [8.5, 2.22, 10],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuwuyowc7",
        position: [0, 3.8, 54],
        size: [8.5, 1.2, 10],
        kind: "static",
        color: "#e85d04"
      }
    ],
    challenges: [
      {
        id: "qmuomam885",
        type: "listening",
        origin: [0, 2, -1],
        options: [
          {
            word: "THE HELMET",
            offset: [-5.5, 0, 0]
          },
          {
            word: "THE DOOR",
            offset: [0, 0, 0]
          },
          {
            word: "THE MACHINE",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "THE DOOR",
        platformSize: [4.5, 0.5, 4.5],
        sentence: "",
        timeLimit: 15,
        explanation: "La frase dice “checked the door”: revisó la puerta.",
        audioText: "The worker checked the door before leaving.” What did the worker check?"
      },
      {
        id: "qmuonf80md",
        type: "listening",
        origin: [0.5, 2, 23],
        options: [
          {
            word: "One more",
            offset: [-5.5, 0, 0]
          },
          {
            word: "Three more",
            offset: [0, 0, 0]
          },
          {
            word: "Two more",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "Two more",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "",
        timeLimit: 15,
        audioText: "We need two more boxes.",
        explanation: "“Two more” significa que necesitan dos adicionales."
      },
      {
        id: "qmuwufl5g6",
        type: "listening",
        origin: [0, 3.5, 45.5],
        options: [
          {
            word: "Turn off the machine",
            offset: [-5.5, 0, 0]
          },
          {
            word: "Open the door",
            offset: [0, 0, 0]
          },
          {
            word: "Move the boxes",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "Turn off the machine",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "",
        timeLimit: 15,
        audioText: "“The machine is too hot. Turn it off.” ",
        explanation: "“Turn it off” significa apagarla; “it” se refiere a la máquina."
      }
    ],
    obstacles: [
      {
        id: "omuokyklr2",
        kind: "barrier",
        position: [-1.5, 4, -16],
        size: [4, 5, 0.85]
      },
      {
        id: "omuolrcu63",
        kind: "barrier",
        position: [1.5, 4, -13],
        size: [4, 5, 0.85]
      },
      {
        id: "omuols4i34",
        kind: "barrier",
        position: [-1.5, 4, -9.5],
        size: [4, 5, 0.85]
      },
      {
        id: "omupp35c15",
        kind: "barrier",
        position: [0, 4.5, 33],
        size: [8.5, 1, 0.5]
      },
      {
        id: "omupp40rt6",
        kind: "barrier",
        position: [0, 4.5, 35.5],
        size: [9, 1, 0.5]
      },
      {
        id: "omupp5gbv7",
        kind: "barrier",
        position: [0, 4.5, 38],
        size: [9, 1, 0.5]
      },
      {
        id: "omuwt1xe82",
        kind: "fan",
        position: [-0.5, 3.9, -23],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 0, 1],
        fanForce: 0.1,
        fanReach: 11.7,
        fanSpread: 5.5,
        fanHeight: 2.8
      },
      {
        id: "omuwt6g4j3",
        kind: "fan",
        position: [-8.5, 2.5, 9],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [1, 0, 0],
        fanForce: 0.1,
        fanReach: 12.8,
        fanSpread: 2,
        fanHeight: 2.8
      },
      {
        id: "omuwt80nq4",
        kind: "fan",
        position: [-6.5, 4, 13.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [1, 0, 0],
        fanForce: 0.1,
        fanReach: 12.8,
        fanSpread: 2,
        fanHeight: 2.8
      },
      {
        id: "omuwu2v6e5",
        kind: "fan",
        position: [-0.5, 5.5, 31.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 0, 1],
        fanForce: 0.2,
        fanReach: 8,
        fanSpread: 5.5,
        fanHeight: 2.8
      },
      {
        id: "omuwv442h9",
        kind: "fan",
        position: [0, 6, 53],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 0, 1],
        fanForce: 1.8,
        fanReach: 18.7,
        fanSpread: 5.5,
        fanHeight: 2.8
      }
    ],
    coins: [
      {
        id: "c19",
        position: [0, 3.55, 106.4]
      },
      {
        id: "nmuwv5m5ra",
        position: [0, 6, 58]
      },
      {
        id: "nmuwv62gob",
        position: [0, 6, 60]
      },
      {
        id: "nmuwv6covc",
        position: [0, 6, 62]
      },
      {
        id: "nmuwv6p6ad",
        position: [0, 6, 64]
      },
      {
        id: "nmuwv6vvde",
        position: [0, 6, 66]
      },
      {
        id: "nmuwv8octf",
        position: [-0.5, 5, 34.5]
      },
      {
        id: "nmuwv92lgg",
        position: [-0.5, 5, 37]
      },
      {
        id: "nmuwv99qzh",
        position: [-0.5, 5, 39.5]
      },
      {
        id: "nmuwvax9oi",
        position: [0, 3, 9]
      },
      {
        id: "nmuwvbo38j",
        position: [0, 3.5, 13]
      },
      {
        id: "nmuwvc0bkk",
        position: [0, 4, 17]
      }
    ],
    checkpoints: [
      {
        id: "kmuon8m2l9",
        position: [0, 3, 3],
        width: 9.4
      },
      {
        id: "kmupovwzl3",
        position: [0, 4, 27.5],
        width: 9.5
      },
      {
        id: "kmuwuzroe8",
        position: [0, 6, 49.5],
        width: 9.4
      }
    ],
    goal: {
      position: [0.5, 6, 70.5],
      size: [8, 4, 2]
    },
    zones: []
  }
}

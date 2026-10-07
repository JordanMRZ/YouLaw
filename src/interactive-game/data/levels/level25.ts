import type { LevelDef } from '../types'

export function createLevel25(): LevelDef {
  return {
    id: 25,
    name: "Under Construction",
    subtitle: "Zone under construction, a lot of cliffs.",
    theme: "Personaliza este tema",
    world: "neon",
    hubLabel: "NEON CITY",
    parTime: 90,
    start: [0.5, 3, 4],
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
        position: [0, 2, 4.5],
        size: [5.5, 1, 6.5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "p20",
        position: [0, 2, 98],
        size: [7, 0.5, 15.5],
        kind: "static"
      },
      {
        id: "pmuyiynb23",
        position: [0.5, 2, 15.5],
        size: [15.5, 1, 15.5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuyjq4ys9",
        position: [0, 3, 10.5],
        size: [5, 1.5, 2.5],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmuyjrfq7a",
        position: [0, 3.5, 13],
        size: [5, 2, 2.5],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmuyk369fc",
        position: [0.5, 3.5, 21.5],
        size: [5, 2, 2.5],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmuykbc69d",
        position: [0.5, 3, 24],
        size: [5, 0.5, 2.5],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmuykbrane",
        position: [0.5, 2, 31],
        size: [9.5, 1, 15.5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuykq7o7i",
        position: [0.5, 2, 43.5],
        size: [7, 1, 10],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuykwhtul",
        position: [0.5, 2, 51.5],
        size: [15, 1, 6],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuyl3c4to",
        position: [0.5, 2, 68],
        size: [15, 1, 14.5],
        kind: "static",
        color: "#ff2e97"
      },
      {
        id: "pmuyl9x1ar",
        position: [-0.5, 3, 66],
        size: [7, 0.5, 3],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmuylhtq9s",
        position: [-0.5, 4, 69],
        size: [7, 2, 3],
        kind: "static",
        color: "#00ffff"
      },
      {
        id: "pmuyln4lpu",
        position: [-0.5, 2, 79],
        size: [4, 6.5, 4],
        kind: "rotating",
        color: "#00ffff",
        rotationSpeed: 0.6
      }
    ],
    challenges: [
      {
        id: "qmuyjyuxlb",
        type: "grammar",
        origin: [0.5, 5, 17.5],
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
        id: "qmuyl1lpzm",
        type: "grammar",
        origin: [0.5, 2, 58],
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
        id: "qmuylreobw",
        type: "grammar",
        origin: [-1, 3, 85.5],
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
        id: "omuyjow2i8",
        kind: "barrier",
        position: [0.5, 4, 14.5],
        size: [15.5, 3, 1]
      },
      {
        id: "omuykggoxf",
        kind: "movingBlock",
        position: [0.5, 4, 31.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 7.1,
          speed: 1.2,
          phase: 0
        }
      },
      {
        id: "omuykjjpsh",
        kind: "movingBlock",
        position: [0.5, 4, 36],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 7.1,
          speed: 1.2,
          phase: 2.6
        }
      },
      {
        id: "omuykst6mj",
        kind: "fan",
        position: [1, 3.5, 40.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 0, 1],
        fanForce: 1,
        fanReach: 8,
        fanSpread: 5.5,
        fanHeight: 2.8
      },
      {
        id: "omuyllcfat",
        kind: "barrier",
        position: [-0.5, 4, 72.5],
        size: [8.5, 2, 3.5]
      }
    ],
    coins: [
      {
        id: "c15",
        position: [0, 3.5, 91]
      },
      {
        id: "c16",
        position: [0, 3.5, 93.5]
      },
      {
        id: "c17",
        position: [0, 3.5, 96]
      },
      {
        id: "c18",
        position: [0, 3.5, 98.5]
      }
    ],
    checkpoints: [
      {
        id: "kmuykiowsg",
        position: [0.5, 4, 28.5],
        width: 11.2
      },
      {
        id: "kmuyl78c5p",
        position: [0.5, 4, 62],
        width: 17.4
      }
    ],
    goal: {
      position: [0, 3, 102.5],
      size: [8, 4, 2]
    },
    zones: []
  }
}

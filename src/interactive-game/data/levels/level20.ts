import type { LevelDef } from '../types'

export function createLevel20(): LevelDef {
  return {
    id: 20,
    name: "Emergency Maintenance",
    subtitle: "Stay cautious of the winds from the fans and know how to respond.",
    theme: "Vocabulary, Grammar, Fans, Listening",
    world: "industrial",
    hubLabel: "INDUSTRIAL ZONE",
    parTime: 90,
    start: [-2.5, 2.5, 2],
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
        position: [-2.5, 2, 3],
        size: [8, 0.5, 9.5],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuwx3nts7",
        position: [-3, 1.5, 35],
        size: [7.7, 0.7, 7.7],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmuwxl1n8b",
        position: [-2.5, 7, 63],
        size: [7.2, 6.5, 6.2],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmux1uah62",
        position: [-2.5, 2, 48],
        size: [7.5, 0.5, 4],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmux2y8z46",
        position: [-3.5, 7, 82.5],
        size: [7, 4, 6],
        kind: "rotating",
        color: "#e85d04",
        rotationSpeed: 0.6
      },
      {
        id: "pmux34fgm7",
        position: [-2.5, 10.5, 74.5],
        size: [7.5, 0.5, 4],
        kind: "static",
        color: "#e85d04"
      },
      {
        id: "pmux373wua",
        position: [-3.5, 5.5, 102.5],
        size: [9, 0.5, 11.5],
        kind: "static",
        color: "#e85d04"
      }
    ],
    challenges: [
      {
        id: "qmuwx602i8",
        type: "context",
        origin: [-3, 1.5, 43.5],
        options: [
          {
            word: "I can help you",
            offset: [-5.5, 0, 0]
          },
          {
            word: "It is tuesday",
            offset: [0, 0, 0]
          },
          {
            word: "The machine is blue",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "I can help you",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "Your coworker says: “This box is very heavy.” What can you say?",
        timeLimit: 15,
        explanation: "La caja pesada es un problema; ofrecer ayuda es una respuesta adecuada."
      },
      {
        id: "qmux274ni5",
        type: "listening",
        origin: [-2, 10, 69],
        options: [
          {
            word: "the machine is tired",
            offset: [-5.5, 0, 0]
          },
          {
            word: "the machine is NOT working",
            offset: [0, 0, 0]
          },
          {
            word: "the machine is working",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "the machine is NOT working",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "",
        timeLimit: 15,
        audioText: "The machine is not working today."
      },
      {
        id: "qmux46u0p3",
        type: "vocabulary",
        origin: [-3.5, 8, 90.5],
        options: [
          {
            word: "ears",
            offset: [-5.5, 0, 0]
          },
          {
            word: "hands",
            offset: [0, 0, 0]
          },
          {
            word: "feet",
            offset: [5.5, 0, 0]
          }
        ],
        correctAnswer: "hands",
        platformSize: [4.5, 0.72, 4.6],
        sentence: "Workers wear gloves to protect their ______.",
        timeLimit: 15
      }
    ],
    obstacles: [
      {
        id: "omuwws28k2",
        kind: "movingBlock",
        position: [-2.5, 2, 19.5],
        size: [6, 0.5, 3],
        speed: 1.2,
        motion: {
          axis: "z",
          amplitude: 9.3,
          speed: 0.6,
          phase: 0
        }
      },
      {
        id: "omuwwx8je3",
        kind: "fan",
        position: [-6.5, 3, 12],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [1, 0, 0],
        fanForce: 0.1,
        fanReach: 7.9,
        fanSpread: 1.5,
        fanHeight: 2.8
      },
      {
        id: "omuwx1bzq4",
        kind: "fan",
        position: [2, 3, 24],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [-1, 0, 0],
        fanForce: 0.1,
        fanReach: 7.9,
        fanSpread: 1.5,
        fanHeight: 2.8
      },
      {
        id: "omuwxhyih9",
        kind: "fan",
        position: [-2.5, 2, 52.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 1, 0],
        fanForce: 0.8,
        fanReach: 7.9,
        fanSpread: 2.6,
        fanHeight: 2.8
      },
      {
        id: "omuwxkqila",
        kind: "fan",
        position: [-2.5, 6, 57.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 1, 0],
        fanForce: 0.7,
        fanReach: 7.9,
        fanSpread: 2.4,
        fanHeight: 2.8
      },
      {
        id: "omux3gqhxf",
        kind: "spinner",
        position: [-2.5, 10.5, 63],
        size: [1.6, 1.6, 1.6],
        speed: 1.2
      }
    ],
    coins: [
      {
        id: "nmux3es74b",
        position: [-2.5, 5, 52.5]
      },
      {
        id: "nmux3f6vbc",
        position: [-2.5, 7, 52.5]
      },
      {
        id: "nmux3fps2d",
        position: [-2.5, 8.5, 57.5]
      },
      {
        id: "nmux3g6ixe",
        position: [-2.5, 11, 57.5]
      },
      {
        id: "nmux3j7gag",
        position: [-3, 9.5, 82]
      },
      {
        id: "nmux3jft2h",
        position: [-2.5, 10, 84]
      },
      {
        id: "nmux3joaii",
        position: [-4.5, 9.5, 84]
      },
      {
        id: "nmux3l05ij",
        position: [-3.5, 7, 102.5]
      },
      {
        id: "nmux3lfe2k",
        position: [-3.5, 6.5, 99.5]
      }
    ],
    checkpoints: [
      {
        id: "kmux1wq5l3",
        position: [-2.5, 3.5, 46.5],
        width: 8
      },
      {
        id: "kmux34zsb9",
        position: [-2.5, 12, 73],
        width: 8
      }
    ],
    goal: {
      position: [-3.5, 7.5, 105.5],
      size: [8, 4, 2]
    },
    zones: []
  }
}

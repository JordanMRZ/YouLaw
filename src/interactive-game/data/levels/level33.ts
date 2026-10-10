import type { LevelDef } from '../types'

export function createLevel33(): LevelDef {
  return {
    id: 33,
    name: "Strong Winds",
    subtitle: "Always beware of fans.",
    theme: "Personaliza este tema",
    world: "sky",
    hubLabel: "SKY ISLANDS",
    parTime: 90,
    start: [-2, 2.5, -24.5],
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
        position: [-2.5, 2, -23.5],
        size: [7, 0.5, 6.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "p14",
        position: [-1, 14, 96],
        size: [13.5, 0.5, 1.5],
        kind: "moving",
        color: "#ffd6a5",
        motion: {
          axis: "z",
          amplitude: 9.9,
          speed: 0.6,
          phase: 0
        }
      },
      {
        id: "pmv1c9fjp2",
        position: [-3, 2, -11],
        size: [6.5, 0.5, 11],
        kind: "rotating",
        color: "#ffd6a5",
        rotationSpeed: 0.6
      },
      {
        id: "pmv1cd4123",
        position: [-2, 2, 1.5],
        size: [5.5, 1, 5.5],
        kind: "bounce",
        color: "#ffd6a5",
        rotationSpeed: 0.6
      },
      {
        id: "pmv1cerxy4",
        position: [-2, 3, 8.5],
        size: [5.5, 1, 5.5],
        kind: "bounce",
        color: "#ffd6a5",
        rotationSpeed: 0.6
      },
      {
        id: "pmv1cgfzn5",
        position: [-2, 3, 15],
        size: [11, 0.5, 4.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv1cna8p7",
        position: [-2, 3, 27.5],
        size: [11, 0.5, 4.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv1d3xwxe",
        position: [-0.5, 13, 42.5],
        size: [11, 0.5, 4.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv1dbavch",
        position: [-0.5, 13, 64.5],
        size: [11, 0.5, 4.5],
        kind: "moving",
        color: "#ffd6a5",
        motion: {
          axis: "z",
          amplitude: 7.8,
          speed: 0.7,
          phase: 0
        }
      },
      {
        id: "pmv1dzh5hk",
        position: [-0.5, 13, 77.5],
        size: [16, 0.5, 5.5],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv1e81zrm",
        position: [-1, 10, 103],
        size: [8.5, 0.5, 3],
        kind: "static",
        color: "#ffd6a5"
      },
      {
        id: "pmv1eodi7n",
        position: [-0.5, 13, 53],
        size: [11, 0.5, 4.5],
        kind: "static",
        color: "#ffd6a5"
      }
    ],
    challenges: [
      {
        id: "qmv1cjr486",
        type: "grammar",
        origin: [-2, 2.5, 21.5],
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
        id: "qmv1d7wjbg",
        type: "grammar",
        origin: [-0.5, 13, 47.5],
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
        id: "qmv1e2vj6l",
        type: "grammar",
        origin: [-0.5, 13.5, 83.5],
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
        id: "omv1cr75j9",
        kind: "fan",
        position: [-1, 3, 31],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 1, 0],
        fanForce: 1,
        fanReach: 8.2,
        fanSpread: 2,
        fanHeight: 2.8
      },
      {
        id: "omv1ct7pva",
        kind: "fan",
        position: [-1, 4, 33.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 1, 0],
        fanForce: 1,
        fanReach: 8.2,
        fanSpread: 2,
        fanHeight: 2.8
      },
      {
        id: "omv1ctkt6b",
        kind: "fan",
        position: [-0.5, 5, 36],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 1, 0],
        fanForce: 1,
        fanReach: 8.2,
        fanSpread: 2,
        fanHeight: 2.8
      },
      {
        id: "omv1cy6okd",
        kind: "barrier",
        position: [-0.5, 11.5, 38.5],
        size: [4.5, 3.5, 2.5]
      },
      {
        id: "omv1dipjci",
        kind: "fan",
        position: [-9, 14.5, 62],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [1, 0, 0],
        fanForce: 0.2,
        fanReach: 14.7,
        fanSpread: 1.6,
        fanHeight: 2.8
      },
      {
        id: "omv1dlpr6j",
        kind: "fan",
        position: [-8.5, 14.5, 69],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [1, 0, 0],
        fanForce: 0.2,
        fanReach: 15.1,
        fanSpread: 1.6,
        fanHeight: 2.8
      }
    ],
    coins: [
      {
        id: "nmv1f3107p",
        position: [-2.5, 3, -14.5]
      },
      {
        id: "nmv1f3xy0q",
        position: [-2.5, 3, -12]
      },
      {
        id: "nmv1f48hpr",
        position: [-2.5, 3, -9.5]
      },
      {
        id: "nmv1f59a2s",
        position: [-2, 4, 3]
      },
      {
        id: "nmv1f5q7rt",
        position: [-2, 5.5, 4]
      },
      {
        id: "nmv1f5zb5u",
        position: [-2, 6.5, 5.5]
      },
      {
        id: "nmv1f6faxv",
        position: [-2, 5.5, 7]
      },
      {
        id: "nmv1f7up1x",
        position: [-0.5, 8.5, 31.5]
      },
      {
        id: "nmv1f8tf3y",
        position: [-0.5, 10.5, 32.5]
      },
      {
        id: "nmv1faispz",
        position: [-0.5, 12, 34]
      },
      {
        id: "nmv1fcmnh10",
        position: [0, 14, 62]
      },
      {
        id: "nmv1fcv6r11",
        position: [1.5, 14, 65]
      },
      {
        id: "nmv1fd4w712",
        position: [-1, 13.5, 69]
      },
      {
        id: "nmv1fe1lt13",
        position: [-1, 15, 87.5]
      },
      {
        id: "nmv1feed814",
        position: [-1, 15, 89.5]
      },
      {
        id: "nmv1feu5f15",
        position: [-1, 15, 91.5]
      },
      {
        id: "nmv1ffgzm16",
        position: [-1, 15, 93.5]
      },
      {
        id: "nmv1ffr8h17",
        position: [-1, 15, 95.5]
      },
      {
        id: "nmv1fg0tf18",
        position: [-1, 15, 97.5]
      },
      {
        id: "nmv1fgl5419",
        position: [-1, 15, 99.5]
      }
    ],
    checkpoints: [
      {
        id: "kmv1cqup58",
        position: [-1, 4.5, 26],
        width: 8
      },
      {
        id: "kmv1eqabpo",
        position: [-0.5, 14.5, 51.5],
        width: 12
      }
    ],
    goal: {
      position: [-1, 14, 103.5],
      size: [8, 9.5, 2]
    },
    zones: []
  }
}

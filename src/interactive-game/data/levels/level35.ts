import type { LevelDef } from '../types'

export function createLevel35(): LevelDef {
  return {
    id: 35,
    name: "Rainbow Road",
    subtitle: "Yes, this is a Mario Kart reference.",
    theme: "Personaliza este tema",
    world: "sky",
    hubLabel: "SKY ISLANDS",
    parTime: 90,
    start: [0, 13.5, -34.5],
    palette: {
      fog: "#29343e",
      skyTop: "#001021",
      skyBottom: "#171818",
      ambient: "#ade8f4",
      ground: "#80ed99",
      accent: "#ffd6a5",
      water: "#090909"
    },
    platforms: [
      {
        id: "p1",
        position: [0, 13, -35],
        size: [6, 0.5, 3.5],
        kind: "static",
        color: "#ff0000"
      },
      {
        id: "pmv1jijkb3",
        position: [0, 13, -31],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#ff8040"
      },
      {
        id: "pmv1jl53y4",
        position: [0, 13, -26.5],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#ffff00"
      },
      {
        id: "pmv1jlh5y5",
        position: [0, 13, -17.5],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#8000ff"
      },
      {
        id: "pmv1jmvjm6",
        position: [0, 13, -22],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#ff0080"
      },
      {
        id: "pmv1jtwfzb",
        position: [0, 13, -6.5],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#800080"
      },
      {
        id: "pmv1jufiwc",
        position: [0, 13.5, -2.5],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#0000a0"
      },
      {
        id: "pmv1juw5zd",
        position: [0, 14, 1.5],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#0000ff"
      },
      {
        id: "pmv1jvugae",
        position: [0, 14, 9.5],
        size: [10, 1, 2.5],
        kind: "rotating",
        color: "#008040",
        rotationSpeed: 0.6
      },
      {
        id: "pmv1jx26jf",
        position: [-9.5, 14, 17.5],
        size: [10, 1, 2.5],
        kind: "rotating",
        color: "#ff8000",
        rotationSpeed: 0.6
      },
      {
        id: "pmv1jxib7g",
        position: [6.5, 14, 21],
        size: [4, 0.5, 11],
        kind: "vanishing",
        color: "#008000"
      },
      {
        id: "pmv1k37fdl",
        position: [-1.5, 14, 29],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#800000"
      },
      {
        id: "pmv1k5399n",
        position: [-2.5, 14, 40.5],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#ff0080"
      },
      {
        id: "pmv1k8askp",
        position: [-2.5, 14.5, 45],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#800040"
      },
      {
        id: "pmv1k8patq",
        position: [-2.5, 15, 49.5],
        size: [10, 0.5, 4.5],
        kind: "vanishing",
        color: "#8080ff"
      },
      {
        id: "pmv1k93kwr",
        position: [-2.5, 15.5, 55],
        size: [10, 0.5, 7],
        kind: "vanishing",
        color: "#004080"
      },
      {
        id: "pmv1k9uxjs",
        position: [-2.5, 16, 60.5],
        size: [10, 0.5, 4.5],
        kind: "bounce",
        color: "#004080"
      },
      {
        id: "pmv1kaow0t",
        position: [-2.5, 17, 67.5],
        size: [10, 0.5, 4.5],
        kind: "bounce",
        color: "#008080"
      },
      {
        id: "pmv1kaxh2u",
        position: [-2.5, 19, 74],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#00ff00"
      },
      {
        id: "pmv1kefl6x",
        position: [-2, 15.5, 103.5],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#00ff00"
      },
      {
        id: "pmv1kf10jy",
        position: [-2, 15.5, 99],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#ff8040"
      },
      {
        id: "pmv1kfgiiz",
        position: [-2, 15.5, 94.5],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#804040"
      },
      {
        id: "pmv1kgo1w10",
        position: [-2, 15.5, 90],
        size: [10, 0.5, 4.5],
        kind: "static",
        color: "#ff00ff"
      }
    ],
    challenges: [
      {
        id: "qmv1jt0e9a",
        type: "grammar",
        origin: [0.5, 13, -12.5],
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
        id: "qmv1k3us8m",
        type: "grammar",
        origin: [-2, 14, 34.5],
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
        id: "qmv1kbegpv",
        type: "grammar",
        origin: [-2.5, 19, 79],
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
        id: "omv1jolro8",
        kind: "movingBlock",
        position: [0, 14.5, -22.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 4.8,
          speed: 1.6,
          phase: 0
        }
      },
      {
        id: "omv1joz539",
        kind: "movingBlock",
        position: [0, 14.5, -31.5],
        size: [1.6, 1.6, 1.6],
        speed: 1.2,
        motion: {
          axis: "x",
          amplitude: 4.8,
          speed: 1.6,
          phase: 0
        }
      },
      {
        id: "omv1k0346i",
        kind: "barrier",
        position: [4.5, 15, 18.5],
        size: [3, 3.5, 1]
      },
      {
        id: "omv1k0e5uj",
        kind: "barrier",
        position: [9, 15, 22],
        size: [3, 3.5, 1]
      },
      {
        id: "omv1kd9e9w",
        kind: "fan",
        position: [-1.5, 18.5, 82.5],
        size: [2.4, 2.2, 2.4],
        speed: 1.2,
        fanBlow: [0, 0, 1],
        fanForce: 1,
        fanReach: 20.2,
        fanSpread: 6,
        fanHeight: 2.8
      }
    ],
    coins: [
      {
        id: "nmv1kiazc11",
        position: [0, 14, -19]
      },
      {
        id: "nmv1kixn912",
        position: [0, 14, -20.5]
      },
      {
        id: "nmv1kjmwn13",
        position: [0, 14, -24.5]
      },
      {
        id: "nmv1kk7bw14",
        position: [0, 14, -26.5]
      },
      {
        id: "nmv1kkgky15",
        position: [0, 15.5, 9.5]
      },
      {
        id: "nmv1kndgu16",
        position: [7, 15, 19.5]
      },
      {
        id: "nmv1knmzs17",
        position: [7, 15, 17.5]
      },
      {
        id: "nmv1ko5q018",
        position: [7, 15, 21.5]
      },
      {
        id: "nmv1korzb19",
        position: [-2, 15.5, 9.5]
      },
      {
        id: "nmv1kp2qm1a",
        position: [-9.5, 15.5, 18.5]
      },
      {
        id: "nmv1kpqme1b",
        position: [-8, 15.5, 15]
      },
      {
        id: "nmv1kq87e1c",
        position: [-1, 16, 45]
      },
      {
        id: "nmv1kqktf1d",
        position: [-1.5, 16.5, 49]
      },
      {
        id: "nmv1kqrqb1e",
        position: [-1, 17, 54.5]
      },
      {
        id: "nmv1krbva1f",
        position: [-1, 17.5, 60]
      },
      {
        id: "nmv1krwk61g",
        position: [-1.5, 18, 67.5]
      },
      {
        id: "nmv1ks4pa1h",
        position: [-1.5, 20, 74.5]
      },
      {
        id: "nmv1ksp6j1i",
        position: [-1, 17, 91.5]
      },
      {
        id: "nmv1ksy6r1j",
        position: [-1, 17, 94.5]
      },
      {
        id: "nmv1kt7m11k",
        position: [-1, 17, 97.5]
      },
      {
        id: "nmv1ktk3k1l",
        position: [-1, 17, 100]
      }
    ],
    checkpoints: [
      {
        id: "kmv1k0sdsk",
        position: [0, 15, -4],
        width: 11.6
      },
      {
        id: "kmv1k5ee9o",
        position: [-2.5, 15.5, 39.5],
        width: 10.9
      }
    ],
    goal: {
      position: [-2, 17.5, 105.5],
      size: [8, 4, 2]
    },
    zones: []
  }
}

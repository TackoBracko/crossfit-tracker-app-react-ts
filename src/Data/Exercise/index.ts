export const crossfitData = [
  {
    id: 1,
    title: "Weightlifting",
    icon: "assets/CategoryIcons/Lifting.svg",
    categoryDescription:
      "Build strength and power through precise, goal-oriented weightlifting exercises designed to improve technique and muscle growth.",
    exercises: [
      {
        id: 0,
        name: "Clean",
        picture: "/assets/ExercisePicture/SquatClean.jpg",
        video: "Ty14ogq_Vok",
        description:
          "The clean is a powerful weightlifting movement where the barbell is lifted from the ground to the front rack in a single explosive motion.",
        hasWeight: true,
        subExercises: [
          {
            id: 0,
            name: "Power Clean",
            description:
              "Variation of the clean caught above parallel, emphasizing hip extension and speed.",
            picture: "/assets/ExercisePicture/PowerClean.jpg",
            video: "KwYJTpQ_x5A",
            hasWeight: true,
          },
          {
            id: 1,
            name: "Squat Clean",
            description:
              "Full clean where the bar is received in a full squat before standing.",
            picture: "/assets/ExercisePicture/SquatClean.jpg",
            video: "Ty14ogq_Vok",
            hasWeight: true,
          },
          {
            id: 2,
            name: "Hang Power Clean",
            description:
              "Clean variation from hang position caught above parallel.",
            picture: "/assets/ExercisePicture/HangPowerClean.jpg",
            video: "0aP3tgKZcHQ",
            hasWeight: true,
          },
          {
            id: 3,
            name: "Hang Squat Clean",
            description: "Clean from hang position received in a full squat.",
            picture: "/assets/ExercisePicture/HangSquatClean.jng",
            video: "DaKC_BEN5bk",
            hasWeight: true,
          },
        ],
      },

      {
        id: 1,
        name: "Snatch",
        picture: "/assets/ExercisePicture/SquatSnatch.jpg",
        video: "GhxhiehJcQY",
        description:
          "The snatch lifts a barbell from ground to overhead in one smooth, explosive motion.",
        hasWeight: true,
        subExercises: [
          {
            id: 0,
            name: "Power Snatch",
            description:
              "Snatch variation caught above parallel requiring high pull and fast turnover.",
            picture: "/assets/ExercisePicture/PowerSnatch.jpg",
            video: "TL8SMp7RdXQ",
            hasWeight: true,
          },
          {
            id: 1,
            name: "Squat Snatch",
            description:
              "Full snatch caught in a deep overhead squat before standing.",
            picture: "/assets/ExercisePicture/SquatSnatch.jpg",
            video: "GhxhiehJcQY",
            hasWeight: true,
          },
          {
            id: 2,
            name: "Hang Power Snatch",
            description:
              "Performed from hang position and caught above parallel.",
            picture: "/assets/ExercisePicture/HangPowerSnatch.jpg",
            video: "bJYzOo1cNqY",
            hasWeight: true,
          },
          {
            id: 3,
            name: "Hang Squat Snatch",
            description: "Hang snatch variation caught in a full squat.",
            picture: "/assets/ExercisePicture/HangSquatSnatch.jpg",
            video: "IucshEToDyM",
            hasWeight: true,
          },
        ],
      },

      {
        id: 2,
        name: "Clean and Jerk",
        description:
          "Two-part lift combining a clean to the front rack and an explosive overhead jerk.",
        picture: "/assets/ExercisePicture/CleanAndJerk.jpg",
        video: "PjY1rH4_MOA",
        hasWeight: true,
      },

      {
        id: 3,
        name: "Back Squat",
        description:
          "Foundational strength movement emphasizing hip and knee extension under load.",
        picture: "/assets/ExercisePicture/BackSquat.png",
        video: "ultWZbUMPL8",
        hasWeight: true,
      },

      {
        id: 4,
        name: "Front Squat",
        description:
          "A squat performed with the bar in the front rack position, challenging posture and core.",
        picture: "/assets/ExercisePicture/FrontSquat.jpg",
        video: "uYumuL_G_V0",
        hasWeight: true,
      },

      {
        id: 5,
        name: "Deadlift",
        description:
          "A compound lift where the barbell is lifted from ground to standing, engaging posterior chain.",
        picture: "/assets/ExercisePicture/DeadLift.jpg",
        video: "1ZXobu7JvvE",
        hasWeight: true,
      },

      {
        id: 6,
        name: "Bench Press",
        description:
          "Horizontal pressing movement targeting chest, triceps, and shoulders.",
        picture: "/assets/ExercisePicture/BenchPress.jpg",
        video: "SCVCLChPQFY",
        hasWeight: true,
      },
    ],
  },

  {
    id: 2,
    title: "Legs",
    categoryDescription:
      "Boost lower-body strength and mobility with targeted exercises that enhance endurance, stability and power.",
    icon: "assets/CategoryIcons/Legs.svg",
    exercises: [
      {
        id: 0,
        name: "Back Squat",
        description:
          "Requires strong synergy of lower body and core. Builds strength, mobility, and stability.",
        picture: "/assets/ExercisePicture/BackSquat.png",
        video: "ultWZbUMPL8",
        hasWeight: true,
      },
      {
        id: 1,
        name: "Front Squat",
        description:
          "Front-rack squat variation improving posture, core stability, and leg strength.",
        picture: "/assets/ExercisePicture/FrontSquat.jpg",
        video: "uYumuL_G_V0",
        hasWeight: true,
      },
      {
        id: 2,
        name: "Overhead Squat",
        description:
          "Ultimate test of mobility, balance, and core stability performed with the bar overhead.",
        picture: "/assets/ExercisePicture/OverheadSquat.jpg",
        video: "pn8mqlG0nkE",
        hasWeight: true,
      },
      {
        id: 3,
        name: "Goblet Squat",
        description:
          "Weighted squat with kettlebell(s) held at chest, builds legs and core.",
        picture: "/assets/ExercisePicture/GobletSquat.png",
        video: "f-Vf2yRRqOg",
        hasWeight: true,
      },
      {
        id: 4,
        name: "Lunges",
        description:
          "Develops unilateral strength, balance, and postural control.",
        picture: "/assets/ExercisePicture/Lunges.jpg",
        video: "DlhojghkaQ0",
        hasWeight: true,
      },
      {
        id: 5,
        name: "Box Jumps",
        description:
          "Plyometric jump to a box, builds power, explosiveness, and athletic performance.",
        picture: "/assets/ExercisePicture/BoxJumps.jpg",
        video: "NBY9-kTuHEk",
        hasWeight: false,
      },
      {
        id: 6,
        name: "Wall Ball",
        description:
          "Combines front squat and powerful throw of a medicine ball to a wall target.",
        picture: "/assets/ExercisePicture/WallBall.png",
        video: "EqjGKsiIMCE",
        hasWeight: false,
      },
      {
        id: 7,
        name: "Squat Clean",
        description: "Clean received in a full squat before standing.",
        picture: "/assets/ExercisePicture/SquatClean.jpg",
        video: "Ty14ogq_Vok",
        hasWeight: true,
      },
      {
        id: 8,
        name: "Squat Snatch",
        description: "Snatch variation received in a deep overhead squat.",
        picture: "/assets/ExercisePicture/SquatSnatch.jpg",
        video: "GhxhiehJcQY",
        hasWeight: true,
      },
      {
        id: 9,
        name: "Deadlift",
        description:
          "Lift barbell from ground to standing. Strengthens glutes, hamstrings, and back.",
        picture: "/assets/ExercisePicture/DeadLift.jpg",
        video: "1ZXobu7JvvE",
        hasWeight: true,
      },
      {
        id: 10,
        name: "Pistols",
        description:
          "Single-leg squat testing strength, balance, and mobility.",
        picture: "/assets/ExercisePicture/Pistols.png",
        video: "keSzg7MaoVQ",
        hasWeight: false,
      },
      {
        id: 11,
        name: "Step-Ups",
        description:
          "Unilateral strength exercise stepping onto a box using one leg.",
        picture: "/assets/ExercisePicture/StepUps.jpg",
        video: "5qjqDHOUh-A",
        hasWeight: true,
      },
      {
        id: 12,
        name: "Thruster",
        description:
          "Full-body movement combining front squat and overhead press.",
        picture: "/assets/ExercisePicture/Thruster.jpg",
        video: "L219ltL15zk",
        hasWeight: true,
      },
      {
        id: 13,
        name: "Kettlebell Swings (American or Russian)",
        description:
          "Hip-hinge movement swinging kettlebell to chest height or overhead.",
        picture: "/assets/ExercisePicture/Swing.jpg",
        video: "mKDIuUbH94Q",
        hasWeight: true,
      },
    ],
  },

  {
    id: 3,
    title: "Arms",
    categoryDescription:
      "Build upper body strength and definition with dynamic arm workouts tailored for all fitness levels.",
    icon: "assets/CategoryIcons/Arms.svg",
    exercises: [
      {
        id: 0,
        name: "Pull-Ups (strict pull-ups)",
        description:
          "A strict pull-up is performed from a dead hang on a bar, pulling the chin above the bar without using momentum. It develops raw upper-body strength and control.",
        picture: "/assets/ExercisePicture/StrictPullUps.jpg",
        video: "HRV5YKKaeVw",
        hasWeight: false,
      },
      {
        id: 1,
        name: "Chest-to-Bar Pull-Ups",
        description:
          "An advanced pull-up variation where the athlete pulls high enough for the chest to touch the bar. Can be strict or kipping.",
        picture: "/assets/ExercisePicture/ChestToBar.jpg",
        video: "AyPTCEXTjOo",
        hasWeight: false,
      },
      {
        id: 2,
        name: "Muscle-Ups",
        description:
          "A high-skill movement transitioning from a pull-up into a dip above the bar or rings. Builds pulling power, pressing strength, and coordination.",
        picture: "/assets/ExercisePicture/MuscleUps.png",
        video: "OCg3UXgzftc",
        hasWeight: false,
      },
      {
        id: 3,
        name: "Rope Climb",
        description:
          "Climbing a vertical rope using both arms and legs. Builds grip strength, pulling power, coordination, and endurance.",
        picture: "/assets/ExercisePicture/RopeClimb.jpg",
        video: "Pa4QUC9AvuA",
        hasWeight: false,
      },
      {
        id: 4,
        name: "Barbell Rows",
        description:
          "A bent-over pulling movement targeting the lats, traps, rear delts, and biceps while engaging the core.",
        picture: "/assets/ExercisePicture/BarbellRow.webp",
        video: "9Gf-Ourup_k",
        hasWeight: true,
      },
      {
        id: 5,
        name: "Dumbbell Rows",
        description:
          "A unilateral rowing motion improving back strength, balance, and core stability.",
        picture: "/assets/ExercisePicture/DumbbellRow.png",
        video: "xl1YiqQY2vA",
        hasWeight: true,
      },
      {
        id: 6,
        name: "Push-Ups",
        description:
          "A classic bodyweight movement training the chest, shoulders, triceps, and core.",
        picture: "/assets/ExercisePicture/PushUps.jpg",
        video: "0pkjOk0EiAk",
        hasWeight: false,
      },
      {
        id: 7,
        name: "Handstand Push-Ups",
        description:
          "Advanced overhead pressing movement performed upside-down. Builds shoulder, tricep, and core strength.",
        picture: "/assets/ExercisePicture/HandStandPushUps.jpg",
        video: "9wIkPCS4Mbo",
        hasWeight: false,
      },
      {
        id: 8,
        name: "Dips",
        description:
          "A bodyweight movement performed on parallel bars that targets the triceps, chest, and shoulders.",
        picture: "/assets/ExercisePicture/Dips.jpeg",
        video: "o2qX3Zb5mvg",
        hasWeight: false,
      },
      {
        id: 9,
        name: "Bench Press",
        description:
          "Classic horizontal pressing movement used to develop upper-body strength and muscle mass.",
        picture: "/assets/ExercisePicture/BenchPress.jpg",
        video: "SCVCLChPQFY",
        hasWeight: true,
      },
      {
        id: 10,
        name: "Strict Press",
        description:
          "Barbell overhead press performed without leg drive, isolating upper-body strength.",
        picture: "/assets/ExercisePicture/StrictPress.jpeg",
        video: "5yWaNOvgFCM",
        hasWeight: true,
      },
      {
        id: 11,
        name: "Push Press",
        description:
          "Overhead press assisted by a dip and drive from the legs, allowing heavier loads than the strict press.",
        picture: "/assets/ExercisePicture/PushPress.jpg",
        video: "iaBVSJm78ko",
        hasWeight: true,
      },
      {
        id: 12,
        name: "Push Jerk",
        description:
          "Dynamic overhead movement where the bar is driven upward and received in a partial squat. Uses speed, power, and coordination.",
        picture: "/assets/ExercisePicture/PushJerk.jpg",
        video: "VrHNJXoSyXw",
        hasWeight: true,
      },
      {
        id: 13,
        name: "Wall Walk",
        description:
          "A controlled movement where the athlete walks their feet up a wall and hands toward the wall into an inverted position. Builds strength, stability, and confidence upside-down.",
        picture: "/assets/ExercisePicture/WallWalk.jpg",
        video: "2TnX8j29tRY",
        hasWeight: false,
      },
    ],
  },
  {
    id: 4,
    title: "Back",
    categoryDescription:
      "Strengthen your posture and build a powerful back with exercises designed to improve stability, mobility and upper body balance.",
    icon: "assets/CategoryIcons/Back.svg",
    exercises: [
      {
        id: 0,
        name: "Deadlift",
        description:
          "A foundational lift where the barbell is lifted from the ground to standing. Builds posterior chain strength, including hamstrings, glutes, and back.",
        picture: "/assets/ExercisePicture/DeadLift.jpg",
        video: "1ZXobu7JvvE",
        hasWeight: true,
      },
      {
        id: 1,
        name: "Pull-Ups (strict pull-ups)",
        description:
          "A strict pull-up is performed from a dead hang, pulling the chin above the bar without using momentum. Builds upper-body pulling strength and control.",
        picture: "/assets/ExercisePicture/StrictPullUps.jpg",
        video: "HRV5YKKaeVw",
        hasWeight: false,
      },
      {
        id: 2,
        name: "Chest-to-Bar Pull-Ups",
        description:
          "An advanced variation where the athlete pulls high enough for the chest to touch the bar. Can be strict or kipping.",
        picture: "/assets/ExercisePicture/ChestToBar.jpg",
        video: "AyPTCEXTjOo",
        hasWeight: false,
      },
      {
        id: 3,
        name: "Muscle-Ups",
        description:
          "A high-skill movement transitioning from a pull-up into a dip above the bar or rings. Develops powerful pulling and pressing strength.",
        picture: "/assets/ExercisePicture/MuscleUps.png",
        video: "OCg3UXgzftc",
        hasWeight: false,
      },
      {
        id: 4,
        name: "Rope Climb",
        description:
          "Climbing a vertical rope using coordinated pulling power and leg technique (J-hook or S-hook). Trains grip, arms, back, and total-body strength.",
        picture: "/assets/ExercisePicture/RopeClimb.jpg",
        video: "Pa4QUC9AvuA",
        hasWeight: false,
      },
      {
        id: 5,
        name: "Barbell Rows",
        description:
          "A bent-over pulling movement strengthening the lats, traps, rear delts, and biceps while engaging the core.",
        picture: "/assets/ExercisePicture/BarbellRow.webp",
        video: "9Gf-Ourup_k",
        hasWeight: true,
      },
      {
        id: 6,
        name: "Dumbbell Rows",
        description:
          "Unilateral pulling exercise that improves back strength, balance, and core stability.",
        picture: "/assets/ExercisePicture/DumbbellRow.png",
        video: "xl1YiqQY2vA",
        hasWeight: true,
      },
      {
        id: 7,
        name: "Wall Walk",
        description:
          "A controlled movement walking feet up a wall while hands move toward the wall, transitioning into an inverted position. Builds upper-body strength and core stability.",
        picture: "/assets/ExercisePicture/WallWalk.jpg",
        video: "2TnX8j29tRY",
        hasWeight: false,
      },
    ],
  },
  {
    id: 5,
    title: "Shoulders",
    categoryDescription:
      "Strengthen and sculpt your shoulders with exercises designed to improve mobility, stability and upper body power.",
    icon: "assets/CategoryIcons/Shoulders.svg",
    exercises: [
      {
        id: 0,
        name: "Kettlebell Swings (American or Russian)",
        description:
          "A hip-hinge power movement swinging a kettlebell to chest height (Russian) or overhead (American). Builds explosive power and posterior chain strength.",
        picture: "/assets/ExercisePicture/Swing.jpg",
        video: "mKDIuUbH94Q",
        hasWeight: true,
      },
      {
        id: 1,
        name: "Handstand Push-Ups",
        description:
          "Advanced overhead pressing movement performed upside-down. Builds shoulder, tricep, and core strength.",
        picture: "/assets/ExercisePicture/HandStandPushUps.jpg",
        video: "9wIkPCS4Mbo",
        hasWeight: false,
      },
      {
        id: 2,
        name: "Split Jerk",
        description:
          "Dynamic Olympic lift propelling the bar overhead with a powerful leg drive followed by a split stance for stability.",
        picture: "/assets/ExercisePicture/SplitJerk.png",
        video: "GUDkOtraHHY",
        hasWeight: true,
      },
      {
        id: 3,
        name: "Push Jerk",
        description:
          "Overhead lift using a dip and drive followed by receiving the bar in a partial squat. Allows heavier loads through speed and coordination.",
        picture: "/assets/ExercisePicture/PushJerk.jpg",
        video: "VrHNJXoSyXw",
        hasWeight: true,
      },
      {
        id: 4,
        name: "Push Press",
        description:
          "Overhead press assisted by leg drive, combining upper-body strength with lower-body power.",
        picture: "/assets/ExercisePicture/PushPress.jpg",
        video: "iaBVSJm78ko",
        hasWeight: true,
      },
      {
        id: 5,
        name: "Bench Press",
        description:
          "Classic horizontal pressing movement for building upper-body strength, especially chest, shoulders, and triceps.",
        picture: "/assets/ExercisePicture/BenchPress.jpg",
        video: "SCVCLChPQFY",
        hasWeight: true,
      },
      {
        id: 6,
        name: "Dips",
        description:
          "Bodyweight movement on parallel bars targeting triceps, chest, and shoulders.",
        picture: "/assets/ExercisePicture/Dips.png",
        video: "o2qX3Zb5mvg",
        hasWeight: false,
      },
      {
        id: 7,
        name: "Overhead Squat",
        description:
          "A demanding squat with the barbell held overhead. Builds mobility, balance, core and shoulder stability.",
        picture: "/assets/ExercisePicture/OverheadSquat.jpg",
        video: "pn8mqlG0nkE",
        hasWeight: true,
      },
      {
        id: 8,
        name: "Thruster",
        description:
          "Full-body movement combining a front squat with an overhead press. Builds power, conditioning, and shoulder strength.",
        picture: "/assets/ExercisePicture/Thruster.jpg",
        video: "L219ltL15zk",
        hasWeight: true,
      },
    ],
  },
  {
    id: 6,
    title: "Gymnastics",
    categoryDescription:
      "Master body control, flexibility and strength with gymnastics-inspired movements that challenge your coordination and skill.",
    icon: "assets/CategoryIcons/Gymnastics.svg",
    exercises: [
      {
        id: 0,
        name: "Kipping Pull-Ups",
        description:
          "A dynamic pull-up variation using a controlled swinging kip to generate momentum. Allows higher repetition sets while training shoulders, back, and core.",
        picture: "/assets/ExercisePicture/KippingPullUps.jpg",
        video: "lzRo-4pq_AY",
        hasWeight: false,
      },
      {
        id: 1,
        name: "Chest-to-Bar Pull-Ups",
        description:
          "Advanced pull-up variation where the chest touches the bar. Requires greater pulling strength and range of motion.",
        picture: "/assets/ExercisePicture/ChestToBar.jpg",
        video: "AyPTCEXTjOo",
        hasWeight: false,
      },
      {
        id: 2,
        name: "Butterfly Pull-Ups",
        description:
          "Highly efficient cyclical pull-up technique using a continuous circular motion. Ideal for high-repetition workouts.",
        picture: "/assets/ExercisePicture/ButterflyPullUps.jpg",
        video: "U_MhBXnlInE",
        hasWeight: false,
      },
      {
        id: 3,
        name: "Muscle-Ups",
        description:
          "A high-skill movement transitioning from a pull-up into a dip above the bar or rings. Builds pulling and pressing strength.",
        picture: "/assets/ExercisePicture/MuscleUps.png",
        video: "OCg3UXgzftc",
        hasWeight: false,
      },
      {
        id: 4,
        name: "Toes-to-Bar",
        description:
          "Dynamic core and hip-flexor exercise bringing the toes to the pull-up bar using a controlled kipping motion.",
        picture: "/assets/ExercisePicture/ToesToBar.jpg",
        video: "6dHvTlsMvNY",
        hasWeight: false,
      },
      {
        id: 5,
        name: "Handstand Push-Ups",
        description:
          "Advanced overhead pressing movement performed upside-down. Builds shoulder, tricep, and core strength.",
        picture: "/assets/ExercisePicture/HandStandPushUps.jpg",
        video: "9wIkPCS4Mbo",
        hasWeight: false,
      },
      {
        id: 6,
        name: "Handstand Walk",
        description:
          "Walking forward while inverted on the hands. Trains balance, coordination, shoulder strength, and core control.",
        picture: "/assets/ExercisePicture/HandStandWalk.jpg",
        video: "FdgJ9jZIT-Q",
        hasWeight: false,
      },
      {
        id: 7,
        name: "Rope Climb",
        description:
          "Climbing a rope using coordination between arms and legs. Builds grip strength and total-body pulling power.",
        picture: "/assets/ExercisePicture/RopeClimb.jpg",
        video: "Pa4QUC9AvuA",
        hasWeight: false,
      },
      {
        id: 8,
        name: "Pistols",
        description:
          "Advanced single-leg squat testing lower-body strength, balance, and mobility.",
        picture: "/assets/ExercisePicture/Pistols.png",
        video: "keSzg7MaoVQ",
        hasWeight: false,
      },
      {
        id: 9,
        name: "Wall Walk",
        description:
          "Controlled movement climbing feet up a wall while moving hands toward the wall. Builds strength and core stability.",
        picture: "/assets/ExercisePicture/WallWalk.jpg",
        video: "2TnX8j29tRY",
        hasWeight: false,
      },
    ],
  },
  {
    id: 7,
    title: "Skills",
    categoryDescription:
      "Refine your technique and develop advanced movements that require precision, strength and coordination.",
    icon: "assets/CategoryIcons/Skills.svg",
    exercises: [
      {
        id: 0,
        name: "Double Unders",
        description:
          "Jump rope movement where the rope passes under the feet twice per jump. Requires coordination, timing, and quick wrist rotation.",
        picture: "/assets/ExercisePicture/DoubleUnders.jpg",
        video: "82jNjDS19lg",
        hasWeight: false,
      },
      {
        id: 1,
        name: "Single Under",
        description:
          "Basic jump rope movement with one rope rotation per jump. Builds rhythm, conditioning, and coordination.",
        picture: "/assets/ExercisePicture/SingleUnder.jpg",
        video: "hCuXYrTOMxI",
        hasWeight: false,
      },
      {
        id: 2,
        name: "Handstand Push-Ups",
        description:
          "Upside-down pressing movement building upper-body strength, balance, and coordination.",
        picture: "/assets/ExercisePicture/HandStandPushUps.jpg",
        video: "9wIkPCS4Mbo",
        hasWeight: false,
      },
      {
        id: 3,
        name: "Handstand Walk",
        description:
          "Walking on hands while inverted. Requires balance, shoulder strength, and body control.",
        picture: "/assets/ExercisePicture/HandStandWalk.jpg",
        video: "FdgJ9jZIT-Q",
        hasWeight: false,
      },
      {
        id: 4,
        name: "Muscle-Ups",
        description:
          "Transition from pull-up into a dip above the bar or rings. Builds advanced pulling and pressing coordination.",
        picture: "/assets/ExercisePicture/MuscleUps.png",
        video: "OCg3UXgzftc",
        hasWeight: false,
      },
      {
        id: 5,
        name: "Pistols",
        description:
          "Single-leg squat developing strength, stability, and mobility.",
        picture: "/assets/ExercisePicture/Pistols.png",
        video: "keSzg7MaoVQ",
        hasWeight: false,
      },
      {
        id: 6,
        name: "Toes-to-Bar",
        description:
          "Dynamic movement bringing the toes to the pull-up bar using a controlled kipping motion.",
        picture: "/assets/ExercisePicture/ToesToBar.jpg",
        video: "6dHvTlsMvNY",
        hasWeight: false,
      },
      {
        id: 7,
        name: "Rope Climb",
        description:
          "Uses pulling strength and leg technique to ascend a vertical rope. Builds grip and full-body coordination.",
        picture: "/assets/ExercisePicture/RopeClimb.jpg",
        video: "Pa4QUC9AvuA",
        hasWeight: false,
      },
    ],
  },
  {
    id: 8,
    title: "Engine",
    categoryDescription:
      "Build stamina and power through workouts designed to challenge your cardio system and improve endurance.",
    icon: "assets/CategoryIcons/Engine.svg",
    exercises: [
      {
        id: 0,
        name: "Calories on machines",
        description:
          "Calories on CrossFit machines represent work output, not calories burned. They measure power, resistance, and pacing to quantify how hard you are working.",
        picture: "/assets/ExercisePicture/Rower.jpg",
        video: "fxfhQMbATCw",
        hasWeight: false,
        subExercises: [
          {
            id: 0,
            name: "Row (Concept2 Rower)",
            description:
              "Calories increase with stronger pulls and higher stroke rates. Focus on leg drive, posture, and efficient rhythm.",
            picture: "/assets/ExercisePicture/Rower.jpg",
            video: "fxfhQMbATCw",
            hasWeight: false,
          },
          {
            id: 1,
            name: "Assault Bike",
            description:
              "Air resistance increases with effort. Use both arms and legs to sustain power and maximize output.",
            picture: "/assets/ExercisePicture/AssaultBike.avif",
            video: "yvXr-9uRd1o",
            hasWeight: false,
          },
          {
            id: 2,
            name: "Echo Bike",
            description:
              "Similar to the Assault Bike but smoother. Push–pull with arms and pedal consistently for efficient calorie production.",
            picture: "/assets/ExercisePicture/EchoBike.webp",
            video: "9xfUu652CMg",
            hasWeight: false,
          },
          {
            id: 3,
            name: "Ski Erg",
            description:
              "Calories depend on force and consistency of each pull. Use coordinated arm and core engagement with a hip hinge.",
            picture: "/assets/ExercisePicture/SkiErg.jpg",
            video: "44YUR_dln0k",
            hasWeight: false,
          },
        ],
      },

      {
        id: 1,
        name: "Burpees",
        description:
          "Full-body conditioning movement combining a squat, plank, push-up, and jump. Builds endurance and explosiveness.",
        picture: "/assets/ExercisePicture/Burpees.jpg",
        video: "auBLPXO8Fww",
        hasWeight: false,
      },

      {
        id: 2,
        name: "Double Unders",
        description:
          "Jump rope movement where the rope passes under the feet twice per jump. Develops speed, timing, and conditioning.",
        picture: "/assets/ExercisePicture/DoubleUnders.jpg",
        video: "82jNjDS19lg",
        hasWeight: false,
      },

      {
        id: 3,
        name: "Single Under",
        description:
          "Basic jump rope movement with one rotation per jump. Builds rhythm, coordination, and aerobic capacity.",
        picture: "/assets/ExercisePicture/SingleUnder.jpg",
        video: "hCuXYrTOMxI",
        hasWeight: false,
      },

      {
        id: 4,
        name: "Wall Ball",
        description:
          "Combination of a front squat into a powerful upward throw of a medicine ball to a wall target.",
        picture: "/assets/ExercisePicture/WallBall.png",
        video: "EqjGKsiIMCE",
        hasWeight: false,
      },
    ],
  },
  {
    id: 9,
    title: "Core",
    categoryDescription:
      "Enhance your core stability and overall balance with effective, focused core exercises.",
    icon: "assets/CategoryIcons/Core.svg",
    exercises: [
      {
        id: 0,
        name: "Plank Hold",
        description:
          "Static core exercise targeting abdominals, lower back, and shoulders. Builds stability and posture control.",
        picture: "/assets/ExercisePicture/Plank.jjpg",
        video: "EPiXN2bkLoQ",
        hasWeight: false,
      },
      {
        id: 1,
        name: "Hollow Hold",
        description:
          "Gymnastics core position focusing on trunk control. Builds full-core tension and endurance.",
        picture: "/assets/ExercisePicture/HollowHold.jpeg",
        video: "p7j02V1fIzU",
        hasWeight: false,
      },
      {
        id: 2,
        name: "GHD Sit-Ups",
        description:
          "Dynamic sit-up performed on a GHD machine. Increases range of motion and strengthens abdominals, hip flexors, and lower back.",
        picture: "/assets/ExercisePicture/Ghd.jpg",
        video: "1pbZ8mX2D1U",
        hasWeight: false,
      },
      {
        id: 3,
        name: "V-Ups",
        description:
          "Explosive core movement lifting hands and feet together into a V shape. Trains coordination and midline strength.",
        picture: "/assets/ExercisePicture/Vups.jpg",
        video: "7UVgs18Y1P4",
        hasWeight: false,
      },
      {
        id: 4,
        name: "Turkish Get-Up",
        description:
          "Full-body movement transitioning from lying to standing while holding a weight overhead. Builds mobility, stability, and strength.",
        picture: "/assets/ExercisePicture/TurkishGetUp.jpg",
        video: "saYKvqSscuY",
        hasWeight: true,
      },
      {
        id: 5,
        name: "Russian Twists",
        description:
          "Rotational core exercise strengthening the obliques and improving trunk control.",
        picture: "/assets/ExercisePicture/RussianTwist.jpg",
        video: "JyUqwkVpsi8",
        hasWeight: false,
      },
      {
        id: 6,
        name: "Toes-to-Bar",
        description:
          "Dynamic movement bringing the toes to the pull-up bar with a coordinated kip. Trains core and hip flexor strength.",
        picture: "/assets/ExercisePicture/ToesToBar.jpg",
        video: "6dHvTlsMvNY",
        hasWeight: false,
      },
      {
        id: 7,
        name: "Wall Walk",
        description:
          "Controlled climb up the wall leading to an inverted position. Builds shoulder strength, core stability, and coordination.",
        picture: "/assets/ExercisePicture/WallWalk.jpg",
        video: "2TnX8j29tRY",
        hasWeight: false,
      },
    ],
  },
];

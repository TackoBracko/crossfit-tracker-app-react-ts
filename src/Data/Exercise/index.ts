import type { Category } from "./types";

export const crossfitData: Category[] = [
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
          "The clean is a powerful weightlifting movement where the barbell is lifted from the ground to the front of the shoulders in a single, fluid motion. It begins with a strong pull from the floor, followed by an explosive hip extension to drive the bar upward, and ends with quickly dropping underneath to catch the bar in a front rack position. The clean develops full-body power, speed and coordination, making it a cornerstone of functional fitness and athletic training.",
        hasWeight: true,
        subExercises: [
          {
            id: 0,
            name: "Power Clean",
            description:
              "The power clean is a weightlifting movement where the barbell is explosively lifted from the ground to the front of the shoulders without dropping into a full squat. It starts with a powerful pull from the floor, followed by an explosive hip extension to propel the bar upward, and finishes with a quick catch in the front rack position, typically with the knees slightly bent. The power clean builds explosive power, speed, and coordination, and is commonly used in functional fitness and athletic training to develop strength and agility.",
            picture: "/assets/ExercisePicture/PowerClean.jpg",
            video: "KwYJTpQ_x5A",
            hasWeight: true,
          },
          {
            id: 1,
            name: "Squat Clean",
            description:
              "In the clean, the hips and legs launch a weight upward from the ground to about belly button height and then the lifter retreats under the weight quickly to catch it. The full movement finishes with the hips and legs again working by squatting the weight and standing up to full extension.",
            picture: "/assets/ExercisePicture/SquatClean.jpg",
            video: "Ty14ogq_Vok",
            hasWeight: true,
          },
          {
            id: 2,
            name: "Hang Power Clean",
            description:
              "The hang power clean is a variation of the clean where the barbell starts from a hanging position (above the knees) rather than the ground. From the hang position, the athlete explosively extends the hips and pulls the bar upward, catching it in the front rack position without dropping into a full squat. This movement focuses on developing explosive power, speed, and coordination while emphasizing the transition and pull phase of the clean.",
            picture: "/assets/ExercisePicture/HangPowerClean.jpg",
            video: "0aP3tgKZcHQ",
            hasWeight: true,
          },
          {
            id: 3,
            name: "Hang Squat Clean",
            description:
              "The hang squat clean is a variation of the clean where the barbell starts from a hanging position (above the knees). From the hang position, the athlete explosively extends the hips, pulls the bar upward, and then drops under it into a full squat to catch the bar in the front rack position. The movement develops full-body power, strength, and mobility, emphasizing speed under the bar and the ability to stabilize in the squat position.",
            picture: "/assets/ExercisePicture/HangSquatClean.jpg",
            video: "DaKC_BEN5bk",
            hasWeight: true,
          },
        ],
      },

      {
        id: 1,
        name: "Snatch",
        picture: "/assets/ExercisePicture/SquatSnatch.png",
        video: "GhxhiehJcQY",
        description:
          "The snatch is a dynamic Olympic weightlifting exercise where a barbell is lifted from the ground to overhead in one explosive motion. It requires a combination of strength, speed, mobility, and precision, making it one of the most technical and athletic movements in weightlifting. The snatch develops full-body power, coordination, and balance, engaging muscles from the legs and core to the shoulders and arms.",
        hasWeight: true,
        subExercises: [
          {
            id: 0,
            name: "Power Snatch",
            description:
              "The power snatch is received in a partial overhead squat. Without the option of catching in a full squat, the athlete must pull the bar high and focus on a quick change of direction. Complete hip and knee extension followed by a fast turnover of the bar is critical.",
            picture: "/assets/ExercisePicture/PowerSnatch.jpg",
            video: "TL8SMp7RdXQ",
            hasWeight: true,
          },
          {
            id: 1,
            name: "Squat Snatch",
            description:
              "The squat snatch is a weightlifting movement that involves lifting a barbell from the ground to overhead in one fluid motion, while catching the bar in a full squat position. This exercise requires a great deal of mobility, strength, and coordination.",
            picture: "/assets/ExercisePicture/SquatSnatch.png",
            video: "GhxhiehJcQY",
            hasWeight: true,
          },
          {
            id: 2,
            name: "Hang Power Snatch",
            description:
              "The hang power snatch emphasizes the second and third pulls of the snatch, from the hang position with the bar at the hip to the finish of the lift with the bar overhead. The timing, powerful hip extension, and coordination remain similar to the power snatch.",
            picture: "/assets/ExercisePicture/HangPowerSnatch.jpg",
            video: "bJYzOo1cNqY",
            hasWeight: true,
          },
          {
            id: 3,
            name: "Hang Squat Snatch",
            description:
              "The hang snatch emphasizes the second and third pulls of the snatch, from the hang position with the bar at the hip to the full overhead squat receiving position and finally to the end of the lift with the bar overhead and the athlete standing.",
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
          "In the most common variation of the clean and jerk, the athlete receives the load in a full front squat, then uses the split position in the jerk. For most athletes, these positions allow for the greatest loads to be lifted. During the clean, the athlete must pull the weight only as high as needed to move into the bottom of the squat. During the split jerk, the torso can remain vertical while demanding less shoulder and thoracic flexibility than a squat or power jerk. ",
        picture: "/assets/ExercisePicture/CleanAndJerk.jpg",
        video: "PjY1rH4_MOA",
        hasWeight: true,
      },

      {
        id: 3,
        name: "Back Squat",
        description:
          "The back squat requires the structures of the lower body and core to work synergistically. Optimal performance requires an adequate range of motion at the ankles, hips, and knees; superior lower-body strength; and a tremendous amount of core stability.",
        picture: "/assets/ExercisePicture/BackSquat.png",
        video: "ultWZbUMPL8",
        hasWeight: true,
      },

      {
        id: 4,
        name: "Front Squat",
        description:
          "The front squat builds exactly on the mechanics of the air squat. All that is added is a load supported in the front-rack position, where the weight sits squarely on the upper chest and shoulders, and the elbows point forward to bring the upper arms parallel to the floor. This “rack position,” critical to weightlifting, both demands and improves wrist and shoulder flexibility while the load, supported by the torso, both demands and improves midline stability.",
        picture: "/assets/ExercisePicture/FrontSquat.jpg",
        video: "uYumuL_G_V0",
        hasWeight: true,
      },

      {
        id: 5,
        name: "Deadlift",
        description:
          "The deadlift is a great way to build strong legs and butt. In a deadlift, you lift weight from the ground to thigh level using primarily your leg and hip muscles, but with the assistance of most of the large muscle groups of your body. The deadlift is usually performed with a bar and plates or a fixed barbell, but you can do it with dumbbells. ",

        picture: "/assets/ExercisePicture/Deadlift.jpg",
        video: "1ZXobu7JvvE",
        hasWeight: true,
      },

      {
        id: 6,
        name: "Bench Press",
        description:
          "The bench press or chest press is a weight training exercise where a person presses a weight upwards while lying horizontally on a weight training bench. To improve upper body strength, power, and endurance for athletic, occupational, and functional performance as well as muscle development, the barbell bench press is frequently used.",
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
          "The back squat requires the structures of the lower body and core to work synergistically. Optimal performance requires an adequate range of motion at the ankles, hips, and knees; superior lower-body strength; and a tremendous amount of core stability.",

        picture: "/assets/ExercisePicture/BackSquat.png",
        video: "ultWZbUMPL8",
        hasWeight: true,
      },
      {
        id: 1,
        name: "Front Squat",
        description:
          "The front squat builds exactly on the mechanics of the air squat. All that is added is a load supported in the front-rack position, where the weight sits squarely on the upper chest and shoulders, and the elbows point forward to bring the upper arms parallel to the floor. This “rack position,” critical to weightlifting, both demands and improves wrist and shoulder flexibility while the load, supported by the torso, both demands and improves midline stability.",
        picture: "/assets/ExercisePicture/FrontSquat.jpg",
        video: "uYumuL_G_V0",
        hasWeight: true,
      },
      {
        id: 2,
        name: "Overhead Squat",
        description:
          "The overhead squat is the ultimate core exercise and peerless in developing effective athletic movement. This functional gem trains for efficient transfer of energy from large to small body parts and improves functional flexibility. Similarly, it develops the squat by amplifying and cruelly punishing faults in posture, movement, and stability. The overhead squat is to midline control, stability and balance what the clean and snatch are to power—unsurpassed.",

        picture: "/assets/ExercisePicture/OverheadSquat.jpg",
        video: "pn8mqlG0nkE",
        hasWeight: true,
      },
      {
        id: 3,
        name: "Goblet Squat",
        description:
          "The Goblet Squat is a fantastic exercise for your lower body, working your quads (front of your thigh), hamstrings (back of your thigh), and glutes (butt muscle), as well as helping to strengthen your core and lower back. This is a weighted squat exercise with single or double kettlebell",
        picture: "/assets/ExercisePicture/GobletSquat.png",
        video: "f-Vf2yRRqOg",
        hasWeight: true,
      },
      {
        id: 4,
        name: "Lunges",
        description:
          "The walking lunge is a fantastic, accessible tool for developing lower body strength, postural awareness, and balance. The basic movement pattern can be learned quickly and performed almost anywhere. It also serves as a gateway to many other variations. Once the fundamentals are mastered at body weight, load can be held at the hang, in the front rack, or overhead to increase the challenge of the movement.",
        picture: "/assets/ExercisePicture/Lunges.jpg",
        video: "DlhojghkaQ0",
        hasWeight: true,
      },
      {
        id: 5,
        name: "Box Jumps",
        description:
          "Box jumps are a powerful and conditioning exercise. Box jumps involve jumping from the floor onto a box or other elevated surface. They are an excellent way to enhance explosive power, further develop strength through your lower body, improve vertical jump height, and generally improve athletic performance.",
        picture: "/assets/ExercisePicture/BoxJumps.jpg",
        video: "NBY9-kTuHEk",
        hasWeight: false,
      },
      {
        id: 6,
        name: "Wall Ball",
        description:
          "The movement begins as a front squat and follows through to a push press/shove that sends the ball up and forward to the target from which it rebounds back to the throwers outstretched arms where it is “absorbed” back into the squat.",

        picture: "/assets/ExercisePicture/WallBall.png",
        video: "EqjGKsiIMCE",
        hasWeight: false,
      },
      {
        id: 7,
        name: "Squat Clean",
        description:
          "In the clean, the hips and legs launch a weight upward from the ground to about belly button height and then the lifter retreats under the weight quickly to catch it. The full movement finishes with the hips and legs again working by squatting the weight and standing up to full extension.",

        picture: "/assets/ExercisePicture/SquatClean.jpg",
        video: "Ty14ogq_Vok",
        hasWeight: true,
      },
      {
        id: 8,
        name: "Squat Snatch",
        description:
          "The squat snatch is a weightlifting movement that involves lifting a barbell from the ground to overhead in one fluid motion, while catching the bar in a full squat position. This exercise requires a great deal of mobility, strength, and coordination.",

        picture: "/assets/ExercisePicture/SquatSnatch.png",
        video: "GhxhiehJcQY",
        hasWeight: true,
      },
      {
        id: 9,
        name: "Deadlift",
        description:
          "The deadlift is a great way to build strong legs and butt. In a deadlift, you lift weight from the ground to thigh level using primarily your leg and hip muscles, but with the assistance of most of the large muscle groups of your body. The deadlift is usually performed with a bar and plates or a fixed barbell, but you can do it with dumbbells. ",
        picture: "/assets/ExercisePicture/Deadlift.jpg",
        video: "1ZXobu7JvvE",
        hasWeight: true,
      },
      {
        id: 10,
        name: "Pistols",
        description:
          "A Pistol Squat is a squat performed on one leg. It's an advanced strength movement. Pistol squats test the strength of your core, stabilizing muscles and the entire leg from glutes to ankles.",

        picture: "/assets/ExercisePicture/Pistols.png",
        video: "keSzg7MaoVQ",
        hasWeight: false,
      },
      {
        id: 11,
        name: "Step-Ups",
        description:
          "The box step up is similar in mechanics to any lunging variation. The athlete must use the strength of one leg to elevate themselves. The higher the box, the greater the demand on both strength and flexibility. ",
        picture: "/assets/ExercisePicture/StepUps.jpg",
        video: "5qjqDHOUh-A",
        hasWeight: true,
      },
      {
        id: 12,
        name: "Thruster",
        description:
          "The thruster is a powerful, full-body movement that combines a front squat and an overhead press into one fluid motion. The athlete starts with the barbell resting on their shoulders in a front-rack position, performs a deep front squat, and explosively drives upward, using the momentum from the squat to press the bar overhead to full arm extension. The thruster targets the legs, shoulders, and core while also building explosive power and endurance. It’s commonly used in CrossFit workouts due to its intensity and efficiency.",

        picture: "/assets/ExercisePicture/Thruster.jpg",
        video: "L219ltL15zk",
        hasWeight: true,
      },
      {
        id: 13,
        name: "Kettlebell Swings (American or Russian)",
        description:
          "The kettlebell swing is a powerful hip-hinge movement that develops explosive power, endurance, and posterior chain strength. The athlete swings a kettlebell from between the legs to chest level (Russian swing) or overhead (American swing), driven by the hips rather than the arms.",
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
          "The strict pull-up is a foundational upper-body strength exercise where the athlete pulls themselves up from a hanging position on a bar until their chin is above the bar, using only the strength of their arms and back. It is performed without any swinging or momentum, focusing on building raw strength and control in the upper body.",
        picture: "/assets/ExercisePicture/StrictPullUps.jpg",
        video: "HRV5YKKaeVw",
        hasWeight: false,
      },
      {
        id: 1,
        name: "Chest-to-Bar Pull-Ups",
        description:
          "The chest-to-bar pull-up is an advanced variation of the pull-up where the athlete pulls their body high enough so that their chest touches the bar. It can be performed strictly or with a kipping motion, requiring greater pulling strength, range of motion, and control compared to a standard pull-up.",
        picture: "/assets/ExercisePicture/ChestToBar.jpg",
        video: "AyPTCEXTjOo",
        hasWeight: false,
      },
      {
        id: 2,
        name: "Muscle-Ups",
        description:
          "The muscle-up is a high-skill gymnastics movement where the athlete transitions from a pull-up into a dip position on a bar or rings. Starting from a hanging position, the athlete pulls up explosively, transitions over the bar or rings, and finishes by pressing into a lockout position. Muscle-ups develop upper-body pulling and pressing strength, as well as coordination and body control.e-up is a high-skill gymnastics movement where the athlete transitions from a pull-up into a dip position on a bar or rings. Starting from a hanging position, the athlete pulls up explosively, transitions over the bar or rings, and finishes by pressing into a lockout position. Muscle-ups develop upper-body pulling and pressing strength, as well as coordination and body control.",
        picture: "/assets/ExercisePicture/MuscleUps.png",
        video: "OCg3UXgzftc",
        hasWeight: false,
      },
      {
        id: 3,
        name: "Rope Climb",
        description:
          "The rope climb is a functional movement where the athlete ascends a vertical rope using both their arms and legs for assistance. The movement requires grip strength, upper-body pulling power, and efficient leg technique, such as the J-hook or S-hook, to conserve energy. Rope climbs build total-body strength and endurance, making them a staple in functional fitness workouts.",
        picture: "/assets/ExercisePicture/RopeClimb.jpg",
        video: "Pa4QUC9AvuA",
        hasWeight: false,
      },
      {
        id: 4,
        name: "Barbell Rows",
        description:
          "The barbell row is a strength exercise targeting the back and arms. It involves bending at the hips while keeping the back flat, holding a barbell with an overhand or underhand grip, and pulling it toward the torso. This movement builds upper-back strength, focusing on the lats, traps, and rear deltoids, while also engaging the core and biceps.",
        picture: "/assets/ExercisePicture/BarbellRow.webp",
        video: "9Gf-Ourup_k",
        hasWeight: true,
      },
      {
        id: 5,
        name: "Dumbbell Rows",
        description:
          "The dumbbell row is a single-arm strength exercise performed with a dumbbell. The athlete braces one hand on a bench or support while pulling the dumbbell toward their torso with the other arm. This unilateral movement strengthens the lats, traps, and biceps while also improving balance and core stability.",
        picture: "/assets/ExercisePicture/DumbbellRow.png",
        video: "xl1YiqQY2vA",
        hasWeight: true,
      },
      {
        id: 6,
        name: "Push-Ups",
        description:
          "The push-up is a classic bodyweight exercise that works the chest, shoulders, triceps, and core. Starting in a plank position, the athlete lowers their chest to the ground by bending their elbows, then pushes back up to full extension. It’s a foundational movement for upper-body strength and endurance.",
        picture: "/assets/ExercisePicture/PushUps.jpg",
        video: "0pkjOk0EiAk",
        hasWeight: false,
      },
      {
        id: 7,
        name: "Handstand Push-Ups",
        description:
          "The handstand push-up is an advanced gymnastics movement performed upside-down. While in a handstand position (against a wall or freestanding), the athlete lowers their head to the ground by bending their elbows, then presses back up to full extension. This movement builds upper-body pushing strength, balance, and coordination, with a strong focus on the shoulders, triceps, and core.",
        picture: "/assets/ExercisePicture/HandStandPushUps.jpg",
        video: "9wIkPCS4Mbo",
        hasWeight: false,
      },
      {
        id: 8,
        name: "Dips",
        description:
          "The dip is a bodyweight movement performed on parallel bars or a similar surface. The athlete lowers their body by bending their elbows until their shoulders are just below their elbows, then pushes back up to full extension. Dips primarily target the triceps, chest, and shoulders, building strength and stability in the upper body.",
        picture: "/assets/ExercisePicture/Dips.jpeg",
        video: "o2qX3Zb5mvg",
        hasWeight: false,
      },
      {
        id: 9,
        name: "Bench Press",
        description:
          "The bench press or chest press is a weight training exercise where a person presses a weight upwards while lying horizontally on a weight training bench. To improve upper body strength, power, and endurance for athletic, occupational, and functional performance as well as muscle development, the barbell bench press is frequently used.",
        picture: "/assets/ExercisePicture/BenchPress.jpg",
        video: "SCVCLChPQFY",
        hasWeight: true,
      },
      {
        id: 10,
        name: "Strict Press",
        description:
          "The strict press is a foundational barbell movement where the athlete presses the barbell overhead from the shoulders to full arm extension without using any leg drive. This movement focuses solely on upper-body strength, targeting the shoulders, triceps, and upper chest, while requiring core stability to maintain a neutral spine.",
        picture: "/assets/ExercisePicture/StrictPress.jpeg",
        video: "5yWaNOvgFCM",
        hasWeight: true,
      },
      {
        id: 11,
        name: "Push Press",
        description:
          "The push press builds on the strict press by incorporating a small dip and drive with the legs to help propel the barbell overhead. Starting with a slight knee bend, the athlete explosively extends their legs and presses the bar overhead to full arm extension. This movement combines lower-body power with upper-body strength, targeting the shoulders, triceps, and legs.",
        picture: "/assets/ExercisePicture/PushPress.jpg",
        video: "iaBVSJm78ko",
        hasWeight: true,
      },
      {
        id: 12,
        name: "Push Jerk",
        description:
          "The push jerk is a dynamic overhead movement that uses the legs for both driving the barbell upward and receiving it in a partial squat position. After a quick dip and explosive drive, the athlete drops under the bar into a bent-knee position and locks the bar overhead. This technique allows the athlete to lift heavier weights by utilizing speed, power, and coordination. It targets the shoulders, triceps, legs, and core.",
        picture: "/assets/ExercisePicture/PushJerk.jpg",
        video: "VrHNJXoSyXw",
        hasWeight: true,
      },
      {
        id: 13,
        name: "Wall Walk",
        description:
          "A wall walk involves walking your feet up a wall and simultaneously moving your hands closer to the wall, transitioning from a plank position to an inverted handstand-like posture. It is performed slowly and with control, making it a safe and effective way to strengthen your upper body, improve core stability, and practice being upside-down.It is a movement that challenges your strength, stability, coordination, and mental focus, all while helping you develop key skills for advanced gymnastics and handstand work.",
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
          "The deadlift is a great way to build strong legs and butt. In a deadlift, you lift weight from the ground to thigh level using primarily your leg and hip muscles, but with the assistance of most of the large muscle groups of your body. The deadlift is usually performed with a bar and plates or a fixed barbell, but you can do it with dumbbells.",
        picture: "/assets/ExercisePicture/Deadlift.jpg",
        video: "1ZXobu7JvvE",
        hasWeight: true,
      },
      {
        id: 1,
        name: "Pull-Ups (strict pull-ups)",
        description:
          "The strict pull-up is a foundational upper-body strength exercise where the athlete pulls themselves up from a hanging position on a bar until their chin is above the bar, using only the strength of their arms and back. It is performed without any swinging or momentum, focusing on building raw strength and control in the upper body.",
        picture: "/assets/ExercisePicture/StrictPullUps.jpg",
        video: "HRV5YKKaeVw",
        hasWeight: false,
      },
      {
        id: 2,
        name: "Chest-to-Bar Pull-Ups",
        description:
          "The chest-to-bar pull-up is an advanced variation of the pull-up where the athlete pulls their body high enough so that their chest touches the bar. It can be performed strictly or with a kipping motion, requiring greater pulling strength, range of motion, and control compared to a standard pull-up.",
        picture: "/assets/ExercisePicture/ChestToBar.jpg",
        video: "AyPTCEXTjOo",
        hasWeight: false,
      },
      {
        id: 3,
        name: "Muscle-Ups",
        description:
          "The muscle-up is a high-skill gymnastics movement where the athlete transitions from a pull-up into a dip position on a bar or rings. Starting from a hanging position, the athlete pulls up explosively, transitions over the bar or rings, and finishes by pressing into a lockout position. Muscle-ups develop upper-body pulling and pressing strength, as well as coordination and body control.",
        picture: "/assets/ExercisePicture/MuscleUps.png",
        video: "OCg3UXgzftc",
        hasWeight: false,
      },
      {
        id: 4,
        name: "Rope Climb",
        description:
          "The rope climb is a functional movement where the athlete ascends a vertical rope using both their arms and legs for assistance. The movement requires grip strength, upper-body pulling power, and efficient leg technique ,such as the J-hook or S-hook, to conserve energy. Rope climbs build total-body strength and endurance, making them a staple in functional fitness workouts.",
        picture: "/assets/ExercisePicture/RopeClimb.jpg",
        video: "Pa4QUC9AvuA",
        hasWeight: false,
      },
      {
        id: 5,
        name: "Barbell Rows",
        description:
          "The barbell row is a strength exercise targeting the back and arms. It involves bending at the hips while keeping the back flat, holding a barbell with an overhand or underhand grip, and pulling it toward the torso. This movement builds upper-back strength, focusing on the lats, traps, and rear deltoids, while also engaging the core and biceps.",
        picture: "/assets/ExercisePicture/BarbellRow.webp",
        video: "9Gf-Ourup_k",
        hasWeight: true,
      },
      {
        id: 6,
        name: "Dumbbell Rows",
        description:
          "The dumbbell row is a single-arm strength exercise performed with a dumbbell. The athlete braces one hand on a bench or support while pulling the dumbbell toward their torso with the other arm. This unilateral movement strengthens the lats, traps, and biceps while also improving balance and core stability.",
        picture: "/assets/ExercisePicture/DumbbellRow.png",
        video: "xl1YiqQY2vA",
        hasWeight: true,
      },
      {
        id: 7,
        name: "Wall Walk",
        description:
          "A wall walk involves walking your feet up a wall and simultaneously moving your hands closer to the wall, transitioning from a plank position to an inverted handstand-like posture. It is performed slowly and with control, making it a safe and effective way to strengthen your upper body, improve core stability, and practice being upside-down.It is a movement that challenges your strength, stability, coordination, and mental focus, all while helping you develop key skills for advanced gymnastics and handstand work.",
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
          "The kettlebell swing is a powerful hip-hinge movement that develops explosive power, endurance, and posterior chain strength. The athlete swings a kettlebell from between the legs to chest level (Russian swing) or overhead (American swing), driven by the hips rather than the arms.",
        picture: "/assets/ExercisePicture/Swing.jpg",
        video: "mKDIuUbH94Q",
        hasWeight: true,
      },
      {
        id: 1,
        name: "Handstand Push-Ups",
        description:
          "The handstand push-up is an advanced gymnastics movement performed upside-down. While in a handstand position (against a wall or freestanding), the athlete lowers their head to the ground by bending their elbows, then presses back up to full extension. This movement builds upper-body pushing strength, balance, and coordination, with a strong focus on the shoulders, triceps, and core.",
        picture: "/assets/ExercisePicture/HandStandPushUps.jpg",
        video: "9wIkPCS4Mbo",
        hasWeight: false,
      },
      {
        id: 2,
        name: "Split Jerk",
        description:
          "The split jerk is a dynamic weightlifting movement used to lift a barbell overhead with maximum efficiency and stability. It involves a powerful drive from the legs to propel the barbell overhead, followed by a split stance to stabilize the weight in the final position. The split jerk is an advanced movement that requires strength, coordination, and balance.",
        picture: "/assets/ExercisePicture/SplitJerk.png",
        video: "GUDkOtraHHY",
        hasWeight: true,
      },
      {
        id: 3,
        name: "Push Jerk",
        description:
          "The push jerk is a dynamic overhead movement that uses the legs for both driving the barbell upward and receiving it in a partial squat position. After a quick dip and explosive drive, the athlete drops under the bar into a bent-knee position and locks the bar overhead. This technique allows the athlete to lift heavier weights by utilizing speed, power, and coordination. It targets the shoulders, triceps, legs, and core.",
        picture: "/assets/ExercisePicture/PushJerk.jpg",
        video: "VrHNJXoSyXw",
        hasWeight: true,
      },
      {
        id: 4,
        name: "Push Press",
        description:
          "The push press builds on the strict press by incorporating a small dip and drive with the legs to help propel the barbell overhead. Starting with a slight knee bend, the athlete explosively extends their legs and presses the bar overhead to full arm extension. This movement combines lower-body power with upper-body strength, targeting the shoulders, triceps, and legs.",
        picture: "/assets/ExercisePicture/PushPress.jpg",
        video: "iaBVSJm78ko",
        hasWeight: true,
      },
      {
        id: 5,
        name: "Bench Press",
        description:
          "The bench press or chest press is a weight training exercise where a person presses a weight upwards while lying horizontally on a weight training bench. To improve upper body strength, power, and endurance for athletic, occupational, and functional performance as well as muscle development, the barbell bench press is frequently used.",
        picture: "/assets/ExercisePicture/BenchPress.jpg",
        video: "SCVCLChPQFY",
        hasWeight: true,
      },
      {
        id: 6,
        name: "Dips",
        description:
          "The dip is a bodyweight movement performed on parallel bars or a similar surface. The athlete lowers their body by bending their elbows until their shoulders are just below their elbows, then pushes back up to full extension. Dips primarily target the triceps, chest, and shoulders, building strength and stability in the upper body.",
        picture: "/assets/ExercisePicture/Dips.jpeg",
        video: "o2qX3Zb5mvg",
        hasWeight: false,
      },
      {
        id: 7,
        name: "Overhead Squat",
        description:
          "The overhead squat is the ultimate core exercise and peerless in developing effective athletic movement. This functional gem trains for efficient transfer of energy from large to small body parts and improves functional flexibility. Similarly, it develops the squat by amplifying and cruelly punishing faults in posture, movement, and stability. The overhead squat is to midline control, stability and balance what the clean and snatch are to power—unsurpassed.",
        picture: "/assets/ExercisePicture/OverheadSquat.jpg",
        video: "pn8mqlG0nkE",
        hasWeight: true,
      },
      {
        id: 8,
        name: "Thruster",
        description:
          "The thruster is a powerful, full-body movement that combines a front squat and an overhead press into one fluid motion. The athlete starts with the barbell resting on their shoulders in a front-rack position, performs a deep front squat, and explosively drives upward, using the momentum from the squat to press the bar overhead to full arm extension. The thruster targets the legs, shoulders, and core while also building explosive power and endurance. It’s commonly used in CrossFit workouts due to its intensity and efficiency.",
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
          "The kipping pull-up is a dynamic variation of the pull-up that uses momentum generated from a controlled swinging motion, a kip, to propel the body upward. This movement allows for higher repetition pull-ups, making it efficient in functional fitness workouts, while still engaging the back, shoulders, and core.",
        picture: "/assets/ExercisePicture/KippingPullUps.jpg",
        video: "lzRo-4pq_AY",
        hasWeight: false,
      },
      {
        id: 1,
        name: "Chest-to-Bar Pull-Ups",
        description:
          "The chest-to-bar pull-up is an advanced variation of the pull-up where the athlete pulls their body high enough so that their chest touches the bar. It can be performed strictly or with a kipping motion, requiring greater pulling strength, range of motion, and control compared to a standard pull-up.",
        picture: "/assets/ExercisePicture/ChestToBar.jpg",
        video: "AyPTCEXTjOo",
        hasWeight: false,
      },
      {
        id: 2,
        name: "Butterfly Pull-Ups",
        description:
          "The butterfly pull-up is a highly efficient, cyclical pull-up variation used in functional fitness. It involves a continuous circular motion of the body to rapidly cycle between reps, minimizing time spent hanging on the bar. This technique requires significant coordination, timing, and shoulder strength, making it ideal for high-repetition workouts.",
        picture: "/assets/ExercisePicture/ButterflyPullUps.jpg",
        video: "U_MhBXnlInE",
        hasWeight: false,
      },
      {
        id: 3,
        name: "Muscle-Ups",
        description:
          "The muscle-up is a high-skill gymnastics movement where the athlete transitions from a pull-up into a dip position on a bar or rings. Starting from a hanging position, the athlete pulls up explosively, transitions over the bar or rings, and finishes by pressing into a lockout position. Muscle-ups develop upper-body pulling and pressing strength, as well as coordination and body control.",
        picture: "/assets/ExercisePicture/MuscleUps.png",
        video: "OCg3UXgzftc",
        hasWeight: false,
      },
      {
        id: 4,
        name: "Toes-to-Bar",
        description:
          "A dynamic movement using a kipping motion to bring your toes to the pull-up bar. Start hanging from the bar, initiate a controlled kip by alternating between arch and hollow body positions, then use momentum and core strength to lift your legs and touch your toes to the bar. Reset into the kip for continuous reps.",
        picture: "/assets/ExercisePicture/ToesToBar.jpg",
        video: "6dHvTlsMvNY",
        hasWeight: false,
      },
      {
        id: 5,
        name: "Handstand Push-Ups",
        description:
          "The handstand push-up is an advanced gymnastics movement performed upside-down. While in a handstand position (against a wall or freestanding), the athlete lowers their head to the ground by bending their elbows, then presses back up to full extension. This movement builds upper-body pushing strength, balance, and coordination, with a strong focus on the shoulders, triceps, and core.",
        picture: "/assets/ExercisePicture/HandStandPushUps.jpg",
        video: "9wIkPCS4Mbo",
        hasWeight: false,
      },
      {
        id: 6,
        name: "Handstand Walk",
        description:
          "The handstand walk is an advanced gymnastics skill that tests balance, coordination, shoulder strength, and spatial awareness. It involves walking forward while inverted on your hands. Kick up into a handstand, shift your weight onto one hand, and step forward with the other. Alternate hands while keeping your core tight and body aligned, using your fingers to maintain balance. Gradually progress to longer distances.",
        picture: "/assets/ExercisePicture/HandStandWalk.jpg",
        video: "FdgJ9jZIT-Q",
        hasWeight: false,
      },
      {
        id: 7,
        name: "Rope Climb",
        description:
          "The rope climb is a functional movement where the athlete ascends a vertical rope using both their arms and legs for assistance. The movement requires grip strength, upper-body pulling power, and efficient leg technique ,such as the J-hook or S-hook to conserve energy. Rope climbs build total-body strength and endurance, making them a staple in functional fitness workouts.",
        picture: "/assets/ExercisePicture/RopeClimb.jpg",
        video: "Pa4QUC9AvuA",
        hasWeight: false,
      },
      {
        id: 8,
        name: "Pistols",
        description:
          "A Pistol Squat is a squat performed on one leg. It's an advanced strength movement often included in CrossFit workout regimens. Pistol squats test the strength of your core, stabilizing muscles and the entire leg from glutes to ankles.",
        picture: "/assets/ExercisePicture/Pistols.png",
        video: "keSzg7MaoVQ",
        hasWeight: false,
      },
      {
        id: 9,
        name: "Wall Walk",
        description:
          "A wall walk involves walking your feet up a wall and simultaneously moving your hands closer to the wall, transitioning from a plank position to an inverted handstand-like posture. It is performed slowly and with control, making it a safe and effective way to strengthen your upper body, improve core stability, and practice being upside-down.It is a movement that challenges your strength, stability, coordination, and mental focus, all while helping you develop key skills for advanced gymnastics and handstand work.",
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
          "A jump rope movement where the rope passes under your feet twice in a single jump. Start with a smooth, controlled rhythm and maintain a slightly higher jump than single unders while keeping your wrists relaxed to generate speed. Focus on consistent timing and avoid excessive arm movement.",
        picture: "/assets/ExercisePicture/DoubleUnders.jpg",
        video: "82jNjDS19lg",
        hasWeight: false,
      },
      {
        id: 1,
        name: "Single Under",
        description:
          "A basic jump rope movement where the rope passes under your feet once with each jump. Maintain a steady rhythm with small, controlled hops and use minimal wrist movement to keep the rope spinning smoothly. Ideal for building coordination and conditioning.",
        picture: "/assets/ExercisePicture/SingleUnder.jpg",
        video: "hCuXYrTOMxI",
        hasWeight: false,
      },
      {
        id: 2,
        name: "Handstand Push-Ups",
        description:
          "The handstand push-up is an advanced gymnastics movement performed upside-down. While in a handstand position (against a wall or freestanding), the athlete lowers their head to the ground by bending their elbows, then presses back up to full extension. This movement builds upper-body pushing strength, balance, and coordination, with a strong focus on the shoulders, triceps, and core.",
        picture: "/assets/ExercisePicture/HandStandPushUps.jpg",
        video: "9wIkPCS4Mbo",
        hasWeight: false,
      },
      {
        id: 3,
        name: "Handstand Walk",
        description:
          "The handstand walk is an advanced gymnastics skill that tests balance, coordination, shoulder strength, and spatial awareness. It involves walking forward while inverted on your hands. Kick up into a handstand, shift your weight onto one hand, and step forward with the other. Alternate hands while keeping your core tight and body aligned, using your fingers to maintain balance. Gradually progress to longer distances.",
        picture: "/assets/ExercisePicture/HandStandWalk.jpg",
        video: "FdgJ9jZIT-Q",
        hasWeight: false,
      },
      {
        id: 4,
        name: "Muscle-Ups",
        description:
          "The muscle-up is a high-skill gymnastics movement where the athlete transitions from a pull-up into a dip position on a bar or rings. Starting from a hanging position, the athlete pulls up explosively, transitions over the bar or rings, and finishes by pressing into a lockout position. Muscle-ups develop upper-body pulling and pressing strength, as well as coordination and body control.",
        picture: "/assets/ExercisePicture/MuscleUps.png",
        video: "OCg3UXgzftc",
        hasWeight: false,
      },
      {
        id: 5,
        name: "Pistols",
        description:
          "A Pistol Squat is a squat performed on one leg. It's an advanced strength movement often included in CrossFit workout regimens. Pistol squats test the strength of your core, stabilizing muscles and the entire leg from glutes to ankles.",
        picture: "/assets/ExercisePicture/Pistols.png",
        video: "keSzg7MaoVQ",
        hasWeight: false,
      },
      {
        id: 6,
        name: "Toes-to-Bar",
        description:
          "A dynamic movement using a kipping motion to bring your toes to the pull-up bar. Start hanging from the bar, initiate a controlled kip by alternating between arch and hollow body positions, then use momentum and core strength to lift your legs and touch your toes to the bar. Reset into the kip for continuous reps.",
        picture: "/assets/ExercisePicture/ToesToBar.jpg",
        video: "6dHvTlsMvNY",
        hasWeight: false,
      },
      {
        id: 7,
        name: "Rope Climb",
        description:
          "The rope climb is a functional movement where the athlete ascends a vertical rope using both their arms and legs for assistance. The movement requires grip strength, upper-body pulling power, and efficient leg technique ,such as the J-hook or S-hook, to conserve energy. Rope climbs build total-body strength and endurance, making them a staple in functional fitness workouts.",
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
          "When CrossFit machines measure calories, they are not directly measuring how many calories you are burning in a workout. Instead, these calories are a standardized unit of work output. Machines like the Assault Bike and Concept2 Rower calculate the amount of energy you generate during exercise based on resistance, distance, and time. In essence, they are quantifying how hard you are working.",
        picture: "/assets/ExercisePicture/Rower.jpg",
        video: "fxfhQMbATCw",
        hasWeight: false,
        subExercises: [
          {
            id: 0,
            name: "Row (Concept2 Rower)",
            description:
              "Calories on the rower are measured based on the power and pace of each stroke. The harder and faster you pull, the more calories you burn. Focus on maintaining a strong pull, efficient leg drive, and consistent rhythm to maximize output. Proper technique and pacing are crucial for sustained calorie output.",
            picture: "/assets/ExercisePicture/Rower.jpg",
            video: "fxfhQMbATCw",
            hasWeight: false,
          },
          {
            id: 1,
            name: "Assault Bike",
            description:
              "On the Assault Bike, calories are determined by how hard and fast you pedal while simultaneously driving the handlebars. The air resistance increases with effort, making it more challenging at higher intensities. Engage both your upper and lower body to distribute the workload evenly and maintain maximum efficiency.",
            picture: "/assets/ExercisePicture/AssaultBike.avif",
            video: "yvXr-9uRd1o",
            hasWeight: false,
          },
          {
            id: 2,
            name: "Echo Bike",
            description:
              "Similar to the Assault Bike, calories on the Echo Bike are calculated based on air resistance. The smoother mechanics of the Echo Bike make it slightly more efficient, but the calorie output is still tied to your effort level. Focus on a strong push-pull motion with your arms and a steady pace with your legs to optimize calorie burn.",
            picture: "/assets/ExercisePicture/EchoBike.webp",
            video: "9xfUu652CMg",
            hasWeight: false,
          },
          {
            id: 3,
            name: "Ski Erg",
            description:
              "Calories on the Ski Erg depend on the force and consistency of your pull. Using a coordinated movement of your arms and core, pull the handles downward in a controlled but powerful motion while hinging at the hips. Engaging your legs slightly for stability and rhythm can help sustain power for more calories.",
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
          "Burpees are a full-body exercise commonly used to build endurance, strength, and cardiovascular fitness. A burpee involves multiple movements performed in one fluid sequence. Begin in a standing position, squat down, place your hands on the ground, jump your feet back into a plank, perform a push-up, then jump your feet forward, and explosively jump into the air with a clap overhead.",
        picture: "/assets/ExercisePicture/Burpees.jpg",
        video: "auBLPXO8Fww",
        hasWeight: false,
      },

      {
        id: 2,
        name: "Double Unders",
        description:
          "A jump rope movement where the rope passes under your feet twice in a single jump. Start with a smooth, controlled rhythm and maintain a slightly higher jump than single unders while keeping your wrists relaxed to generate speed. Focus on consistent timing and avoid excessive arm movement.",
        picture: "/assets/ExercisePicture/DoubleUnders.jpg",
        video: "82jNjDS19lg",
        hasWeight: false,
      },

      {
        id: 3,
        name: "Single Under",
        description:
          "A basic jump rope movement where the rope passes under your feet once with each jump. Maintain a steady rhythm with small, controlled hops and use minimal wrist movement to keep the rope spinning smoothly. Ideal for building coordination and conditioning.",
        picture: "/assets/ExercisePicture/SingleUnder.jpg",
        video: "hCuXYrTOMxI",
        hasWeight: false,
      },

      {
        id: 4,
        name: "Wall Ball",
        description:
          "The movement begins as a front squat and follows through to a push press/shove that sends the ball up and forward to the target from which it rebounds back to the throwers outstretched arms where it is absorbed back into the squat.",
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
          "A static core exercise that targets the abdominals, lower back, and shoulders. The plank hold builds strength and endurance in the core, helping improve stability and posture. Start in a forearm plank position with your body in a straight line from head to heels, keeping your core tight, shoulders over your elbows, and avoiding any sagging or piking of the hips.",
        picture: "/assets/ExercisePicture/Plank.jpg",
        video: "EPiXN2bkLoQ",
        hasWeight: false,
      },
      {
        id: 1,
        name: "Hollow Hold",
        description:
          "A core-strengthening movement that engages the entire trunk. The hollow hold emphasizes control and stability, particularly in the abdominal region, improving overall core strength and endurance. Lie on your back with your arms extended overhead and your legs straight. Lift your shoulders and legs off the ground while pressing your lower back into the floor, holding your body in a hollow shape, and keeping your core engaged.",
        picture: "/assets/ExercisePicture/HollowHold.jpeg",
        video: "p7j02V1fIzU",
        hasWeight: false,
      },
      {
        id: 2,
        name: "GHD Sit-Ups",
        description:
          "A dynamic core exercise using the Glute-Ham Developer (GHD) machine. This variation of sit-ups increases the range of motion and works the hip flexors, lower back, and abdominals, enhancing core strength and flexibility.",
        picture: "/assets/ExercisePicture/Ghd.jpg",
        video: "1pbZ8mX2D1U",
        hasWeight: false,
      },
      {
        id: 3,
        name: "V-Ups",
        description:
          "A full-body exercise that targets the core, particularly the abs. V-ups require coordination and control to bring both the torso and legs up simultaneously in a V shape, helping develop explosive strength in the core.",
        picture: "/assets/ExercisePicture/Vups.jpg",
        video: "7UVgs18Y1P4",
        hasWeight: false,
      },
      {
        id: 4,
        name: "Turkish Get-Up",
        description:
          "A complex, full-body movement that involves transitioning from lying down to standing while holding a weight overhead. It targets the shoulders, core, hips, and legs, enhancing strength, stability, mobility, and coordination.",
        picture: "/assets/ExercisePicture/TurkishGetUp.jpg",
        video: "saYKvqSscuY",
        hasWeight: true,
      },
      {
        id: 5,
        name: "Russian Twists",
        description:
          "A rotational core exercise that targets the obliques (side abs) and helps improve overall core strength and rotational power. The twisting motion challenges the stabilizing muscles of the core and builds endurance for dynamic movements.",
        picture: "/assets/ExercisePicture/RussianTwist.jpg",
        video: "JyUqwkVpsi8",
        hasWeight: false,
      },
      {
        id: 6,
        name: "Toes-to-Bar",
        description:
          "A dynamic movement using a kipping motion to bring your toes to the pull-up bar. Start hanging from the bar, initiate a controlled kip by alternating between arch and hollow body positions, then use momentum and core strength to lift your legs and touch your toes to the bar. Reset into the kip for continuous reps.",
        picture: "/assets/ExercisePicture/ToesToBar.jpg",
        video: "6dHvTlsMvNY",
        hasWeight: false,
      },
      {
        id: 7,
        name: "Wall Walk",
        description:
          "A wall walk involves walking your feet up a wall and simultaneously moving your hands closer to the wall, transitioning from a plank position to an inverted handstand-like posture. It is performed slowly and with control, making it a safe and effective way to strengthen your upper body, improve core stability, and practice being upside-down.",
        picture: "/assets/ExercisePicture/WallWalk.jpg",
        video: "2TnX8j29tRY",
        hasWeight: false,
      },
    ],
  },
];

import { createContext, useState } from "react";

//vjezba
interface ExerciseProps {
  id: number;
  name: string;
  categoryId: number;
  category: string;
  subExercise: number | null;
  picture: string;
  note: string;

  sets: number;
  reps: number;
  weight: number;
  work: number;
  rest: number;
  hasWeight: boolean;
}

//trening
interface WorkoutProps {
  id: string;
  title: string;
  exercises: ExerciseProps[];
  category: string;
  date: string;
}

//treninzi za jedan datum
interface WorkoutsForDateProps {
  workout: WorkoutProps[];
}

//svitrennzi
interface AllWorkouts {
  [date: string]: WorkoutsForDateProps;
}

//za context
interface WorkoutContextProps {
  allWorkouts: AllWorkouts;
  createWorkout: (currentDate: string, workouts: WorkoutsForDateProps) => void;
  deleteWorkout: (currentDate: string, id: string) => void;
  editWorkout: (currentDate: string, updatedWorkout: WorkoutProps) => void;
}

export const WorkoutContext = createContext<WorkoutContextProps | null>(null);

export const WorkoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allWorkouts, setAllWorkouts] = useState<AllWorkouts>({});

  const createWorkout = (
    currentDate: string,
    workouts: WorkoutsForDateProps
  ) => {
    setAllWorkouts((prev) => {
      if (prev[currentDate]) {
        return {
          ...prev,
          [currentDate]: {
            ...prev[currentDate],
            workout: [...prev[currentDate].workout, ...workouts.workout],
          },
        };
      } else {
        return {
          ...prev,
          [currentDate]: workouts,
        };
      }
    });
  };

  const deleteWorkout = (currentDate: string, id: string) => {
    setAllWorkouts((prev) => {
      const updatedWorkoutList = prev[currentDate].workout.filter(
        (training) => training.id !== id
      );

      if (updatedWorkoutList.length === 0) {
        const workoutDate = { ...prev };
        delete workoutDate[currentDate];
        return workoutDate;
      }

      return {
        ...prev,
        [currentDate]: { ...prev[currentDate], workout: updatedWorkoutList },
      };
    });
  };

  const editWorkout = (currentDate: string, updatedWorkout: WorkoutProps) => {
    setAllWorkouts((prev) => ({
      ...prev,
      [currentDate]: {
        ...prev[currentDate],
        workout: prev[currentDate].workout.map((workout) =>
          workout.id === updatedWorkout.id ? updatedWorkout : workout
        ),
      },
    }));
  };

  return (
    <WorkoutContext.Provider
      value={{ allWorkouts, createWorkout, editWorkout, deleteWorkout }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

import { createContext, useState } from "react";

//vjezba
export interface ExerciseProps {
  id: number;
  name: string;
  categoryId: number;
  category: string;
  subExercise: number | null;
  picture: string;
  note: string;

  sets: number;
  reps: number;
  weight: string;
  work: number;
  rest: number;
  hasWeight: boolean;
}

//trening
export interface WorkoutProps {
  id: string;
  title: string;
  exercises: ExerciseProps[];
  category: string;
  date: string;
}

//treninzi za jedan datum
export interface WorkoutsForDateProps {
  workout: WorkoutProps[];
}

//svitrennzi
export interface AllWorkouts {
  [date: string]: WorkoutsForDateProps;
}

//za context
export interface WorkoutContextProps {
  allWorkouts: AllWorkouts;
  createWorkout: (currentDate: string, workouts: WorkoutsForDateProps) => void;
  deleteWorkout: (currentDate: string, id: string) => void;
  editWorkout: (currentDate: string, updatedWorkout: WorkoutProps) => void;
}

export const WorkoutContext = createContext<WorkoutContextProps>({
  allWorkouts: {},
  createWorkout: () => {},
  deleteWorkout: () => {},
  editWorkout: () => {},
});

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
      if (!prev[currentDate]) return prev;

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
    setAllWorkouts((prev) => {
      if (!prev[currentDate]) return prev;

      return {
        ...prev,
        [currentDate]: {
          ...prev[currentDate],
          workout: prev[currentDate].workout.map((workout) =>
            workout.id === updatedWorkout.id ? updatedWorkout : workout
          ),
        },
      };
    });
  };

  return (
    <WorkoutContext.Provider
      value={{ allWorkouts, createWorkout, editWorkout, deleteWorkout }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

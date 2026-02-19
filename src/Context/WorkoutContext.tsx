import { createContext, useState } from "react";
import type {
  WorkoutContextProps,
  AllWorkouts,
  WorkoutProps,
  WorkoutsForDateProps,
} from "../Data/Types/workout";

export const WorkoutContext = createContext<WorkoutContextProps>({
  allWorkouts: {},
  workoutDetails: null,
  createWorkout: () => {},
  deleteWorkout: () => {},
  changeWorkout: () => {},
  addWorkoutToContext: () => {},
});

export const WorkoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allWorkouts, setAllWorkouts] = useState<AllWorkouts>({});
  const [workoutDetails, setWorkoutDetails] = useState<WorkoutProps | null>(
    null
  );

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

  const changeWorkout = (currentDate: string, updatedWorkout: WorkoutProps) => {
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

    setWorkoutDetails((prev) =>
      prev && prev.id === updatedWorkout.id ? updatedWorkout : prev
    );
  };

  const addWorkoutToContext = (workout: WorkoutProps) => {
    setWorkoutDetails(workout);
  };

  return (
    <WorkoutContext.Provider
      value={{
        allWorkouts,
        workoutDetails,
        createWorkout,
        changeWorkout,
        deleteWorkout,
        addWorkoutToContext,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

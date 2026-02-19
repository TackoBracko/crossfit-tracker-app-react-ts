import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { WorkoutContext } from "./WorkoutContext";
import type { ExerciseProps } from "../Data/Types/workout";

type TimerPhase = "ready" | "work" | "rest" | "transition" | "done";

interface TimerContextProps {
  timerPhase: TimerPhase;
  workoutTime: number;
  currentExercise: ExerciseProps;
  currentIdx: number;
  currentSet: number;
  startWorkoutTimer: () => void;
  startRestTimer: () => void;
  resetWorkoutTimer: () => void;
  resetRestTimer: () => void;
}

export const TimerContext = createContext<TimerContextProps | null>(null);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { workoutDetails } = useContext(WorkoutContext);

  const [timerPhase, setTimerPhase] = useState<TimerPhase>("ready");
  const [workoutTime, setWorkoutTime] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);

  const exercises =
    workoutDetails && workoutDetails.exercises ? workoutDetails.exercises : [];

  const currentExercise: ExerciseProps =
    exercises[currentIdx] ??
    ({
      id: 0,
      name: "",
      categoryId: 0,
      category: "",
      subExercise: null,
      picture: "",
      note: "",
      sets: 0,
      reps: 0,
      weight: "",
      work: 0,
      rest: 0,
      hasWeight: false,
    } as ExerciseProps);

  const workDur = Number(currentExercise.work) || 0;
  const restDur = Number(currentExercise.rest) || 0;
  const setsTotal = currentExercise.sets || 1;

  useEffect(() => {
    if (timerPhase !== "work" && timerPhase !== "rest") return;

    const intervalId = setInterval(() => {
      setWorkoutTime((time) => time + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerPhase]);

  const startWorkoutTimer = () => {
    setWorkoutTime(0);
    setTimerPhase("work");
  };

  const startRestTimer = () => {
    setWorkoutTime(0);
    setTimerPhase("rest");
  };

  const resetWorkoutTimer = () => {
    setWorkoutTime(0);
    setTimerPhase("ready");
  };

  const resetRestTimer = () => {
    setWorkoutTime(0);
    setTimerPhase("ready");
  };

  const handleNextExercise = useCallback(() => {
    if (currentSet < setsTotal) {
      setCurrentSet((s) => s + 1);
      setWorkoutTime(0);
      setTimerPhase("work");
      return;
    }

    if (currentIdx < exercises.length - 1) {
      setTimerPhase("transition");
      return;
    }

    setTimerPhase("done");
  }, [currentSet, setsTotal, currentIdx, exercises.length]);

  useEffect(() => {
    if (timerPhase !== "work" && timerPhase !== "rest") return;

    const interval = setInterval(() => {
      setWorkoutTime((prev) => {
        const next = prev + 1;

        if (timerPhase === "work" && next >= workDur) {
          if (restDur > 0) {
            setTimerPhase("rest");
            return 0;
          }

          handleNextExercise();
          return 0;
        }

        if (timerPhase === "rest" && next >= restDur) {
          handleNextExercise();
          return 0;
        }

        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerPhase, workDur, restDur, handleNextExercise]);

  useEffect(() => {
    if (timerPhase !== "transition") return;

    const timeout = setTimeout(() => {
      setCurrentIdx((i) => i + 1);
      setCurrentSet(1);
      setTimerPhase("ready");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [timerPhase]);

  return (
    <TimerContext.Provider
      value={{
        timerPhase,
        workoutTime,
        currentExercise,
        currentIdx,
        currentSet,
        startWorkoutTimer,
        startRestTimer,
        resetWorkoutTimer,
        resetRestTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

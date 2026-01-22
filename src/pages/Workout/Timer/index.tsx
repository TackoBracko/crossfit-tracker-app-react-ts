import { useContext } from "react";
import { WorkoutContext } from "../../../Context/WorkoutContext";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";
import TimerHeader from "../../../components/Workout/Timer/Header";
import classes from "./Timer.module.css";

export default function Timer() {
  const { workoutDetails } = useContext(WorkoutContext);

  if (!workoutDetails) {
    return (
      <div>
        <p>No workout selected</p>
        <NavLink to="/calendar">
          <Button variation="primary"> Back to calendar</Button>
        </NavLink>
      </div>
    );
  }

  const currentExercise = workoutDetails.exercises[0];

  return (
    <div className={classes.timerWrapper}>
      <TimerHeader />
      <h2>{currentExercise.name}</h2>

      <div className={classes.exerciseMetrics}>
        <div className={classes.metrics}>
          <p>Sets</p>
          <span>{currentExercise.sets}</span>
        </div>
        <div className={classes.metrics}>
          <p>Reps</p>
          <span>{currentExercise.reps}</span>
        </div>

        {currentExercise.weight && (
          <div className={classes.metrics}>
            <p>Weight</p>
            <span>
              {currentExercise.weight ? `${currentExercise.weight} kg` : ""}
            </span>
          </div>
        )}

        {currentExercise.work && (
          <div className={classes.metrics}>
            <p>Work</p>
            <span>
              {currentExercise.work ? `${currentExercise.work} s` : ""}
            </span>
          </div>
        )}

        {currentExercise.rest && (
          <div className={classes.metrics}>
            <p>Rest</p>
            <span>
              {currentExercise.rest ? `${currentExercise.rest} s` : ""}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

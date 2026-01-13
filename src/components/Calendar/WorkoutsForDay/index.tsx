import classes from "./WorkoutsForDay.module.css";
import Button from "../../Button";
import { NavLink } from "react-router-dom";
import type { WorkoutsForDateProps } from "../../../Context/WorkoutContext";

interface DayWorkoutProps {
  workouts: WorkoutsForDateProps;
  openCreateModal: () => void;
}

export default function WorkoutsForDay({
  workouts,
  openCreateModal,
}: DayWorkoutProps) {
  return (
    <>
      <div className={classes.workoutContainer}>
        <h3>Your workout plan for </h3>

        {workouts.workout.map((workout) => (
          <div className={classes.workoutPlan}>
            <div className={classes.workoutControls}>
              <h4 className={classes.workoutTitle}>{workout.title}</h4>
              <div className={classes.workoutBtns}>
                <Button variation="primary">EDIT</Button>

                <Button variation="quaternary">X</Button>
              </div>
            </div>

            <div className={classes.workoutExercises}>
              <p>Exercises:</p>
              <ul>
                {workout.exercises.map((exercise) => (
                  <li key={exercise.id}>{exercise.note}</li>
                ))}
              </ul>
            </div>

            <NavLink to="">
              <Button variation="primary">Start workout</Button>
            </NavLink>
          </div>
        ))}

        <div className={classes.newWorkoutBtn}>
          <Button variation="fifth" onClick={openCreateModal}>
            Create new workout
          </Button>
        </div>
      </div>
    </>
  );
}

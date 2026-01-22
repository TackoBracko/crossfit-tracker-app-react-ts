import classes from "./WorkoutDetails.module.css";
import Button from "../../../components/Button";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useContext } from "react";
import { WorkoutContext } from "../../../Context/WorkoutContext";

export default function WorkoutDetails() {
  const { workoutDetails } = useContext(WorkoutContext);
  if (!workoutDetails) {
    return (
      <div className={classes.centerLoader}>
        <div className={classes.spiner}></div>
        <p>Worming up...</p>
      </div>
    );
  }

  const workoutInfo = workoutDetails.exercises.map((exercise) => {
    const categoryId = exercise.categoryId;
    const exerciseId = exercise.subExercise;

    if (exercise.subExercise != null) {
      return (
        <li key={exercise.id}>
          <NavLink
            to={`/category/${categoryId}/exercises/${exerciseId}/${exercise.id}`}
            className={classes.exerciseLink}
          >
            <div>
              <span>{exercise.name}</span>
            </div>
          </NavLink>
        </li>
      );
    } else {
      return (
        <li key={exercise.id}>
          <NavLink
            to={`/category/${categoryId}/exercises/${exercise.id}`}
            className={classes.exerciseLink}
          >
            <div>
              <span>{exercise.name}</span>
            </div>
          </NavLink>
        </li>
      );
    }
  });

  return (
    <>
      <header className={classes.detailsHeader}>
        <NavLink to="/calendar">
          <Button variation="secondary" iconLeft={<ArrowLeft />} />
        </NavLink>

        <h1>{workoutDetails.title}</h1>
      </header>

      <section className={classes.workoutDetailsSection}>
        <h4>
          Exercises <span>(click for info)</span>
        </h4>
        <ul>{workoutInfo}</ul>
      </section>

      <section className={classes.workoutDetailsSection}>
        <h4>Exercises details</h4>
        <ul className={classes.exercisesList}>
          {workoutDetails.exercises.map((exercise) => (
            <li key={exercise.id} className={classes.exerciseItem}>
              {exercise.note}
              <img
                src={exercise.picture}
                alt={exercise.name}
                className={classes.exercisePic}
              />
            </li>
          ))}
        </ul>
      </section>

      <div className={classes.startWorkoutBtn}>
        <NavLink to="/timer" className={classes.startWorkoutLink}>
          <Button variation="primary">Start Workout</Button>
        </NavLink>
      </div>
    </>
  );
}

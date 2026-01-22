import classes from "./DoneScreen.module.css";
import Button from "../../../Button";
import { useContext } from "react";
import { WorkoutContext } from "../../../../Context/WorkoutContext";

export default function WorkoutDoneScreen() {
  const { workoutDetails } = useContext(WorkoutContext);
  if (!workoutDetails) {
    return null;
  }

  return (
    <>
      <section className={classes.modalDoneSection}>
        <h1>🎉 WORKOUT COMPLETED 💪</h1>
        <h3>{workoutDetails.title}</h3>

        <ul className={classes.exercisesList}>
          {workoutDetails.exercises.map((exercise) => (
            <li key={exercise.id} className={classes.exerciseCard}>
              <div className={classes.exerciseNote}>
                <div className={classes.note}>{exercise.note}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className={classes.closeDoneWraper}>
          <Button variation="primary">Back to calendar</Button>
          <Button variation="fifth" className={classes.closeDoneModalBtn}>
            Close
          </Button>
        </div>
      </section>
    </>
  );
}

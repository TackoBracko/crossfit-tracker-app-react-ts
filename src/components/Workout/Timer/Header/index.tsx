import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import Button from "../../../Button";
import { ArrowLeft } from "lucide-react";
import { useContext } from "react";
import { WorkoutContext } from "../../../../Context/WorkoutContext";

export default function TimerHeader() {
  const navigate = useNavigate();
  const { workoutDetails } = useContext(WorkoutContext);
  const currentExercise = workoutDetails?.exercises[0];

  return (
    <header className={classes.timerHeader}>
      <Button
        variation="secondary"
        iconLeft={<ArrowLeft />}
        onClick={() => navigate(-1)}
      />
      <img src={currentExercise?.picture} />
    </header>
  );
}

import classes from "./WorkoutHeader.module.css";
import Input from "../../Input";

interface WorkoutHeaderProps {
  modalTitle: string;
  workoutTitle: string;
  setWorkoutTitle: React.Dispatch<React.SetStateAction<string>>;
}

export default function WorkoutHeader({
  modalTitle,
  workoutTitle,
  setWorkoutTitle,
}: WorkoutHeaderProps) {
  return (
    <>
      <div className={classes.inputSection}>
        <h2>{modalTitle}</h2>
        <div className={classes.modalInput}>
          <Input
            name="Title for Workout"
            type="text"
            label="Title of Workout"
            variation="inputForModal"
            value={workoutTitle}
            onChange={(e) => {
              setWorkoutTitle(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

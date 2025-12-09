import classes from "./WorkoutHeader.module.css";
import Input from "../../Input";

interface WorkoutHeaderProps {
  modalTitle: string;
}

export default function WorkoutHeader({ modalTitle }: WorkoutHeaderProps) {
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
            //value={}
            //onChange={}
          />
        </div>
      </div>
    </>
  );
}

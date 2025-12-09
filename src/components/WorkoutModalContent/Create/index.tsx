import classes from "./CreateWorkoutModal.module.css";
import Input from "../../Input";
import Button from "../../Button";
import { crossfitData } from "../../../Data/Exercises";

export default function CreateWorkoutModal() {
  return (
    <>
      <div className={classes.modalSection}>
        <p>Category</p>
        <select className={classes.categoryMenu}>
          <option>Choose a Category</option>
          {crossfitData.map((category) => (
            <option key={category.id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className={classes.modalSection}>
        <p>Exercise for </p>
        <select className={classes.exercisesMenu}>
          <option>Choose an Exercise</option>
        </select>
      </div>

      <div className={classes.inputSection}>
        <p>Selected exercise:</p>
        <div className={classes.modalInput}>
          <Input
            name="sets"
            type="text"
            label="Sets"
            variation="inputForModal"
            //value={}
            //onChange={}
          />

          <Input
            name="reps"
            type="text"
            label="Reps/Cal"
            variation="inputForModal"
            //value={}
            //onChange={}
          />

          <Input
            name="weight"
            type="text"
            label="Weight"
            variation="inputForModal"
            //value={}
            //onChange={}
          />

          <Input
            name="work"
            type="text"
            label="Work Time"
            variation="inputForModal"
            //value={}
            //onChange={}
          />

          <Input
            name="rest"
            type="text"
            label="Rest Time"
            variation="inputForModal"
            //value={}
            //onChange={}
          />

          <div className={classes.addExerciseBtn}>
            <Button variation="primary">Add exercise</Button>
          </div>
        </div>
      </div>

      <div className={classes.workoutBtns}>
        <Button variation="primary">Create Workout</Button>
        <Button variation="quaternary">Cancel</Button>
      </div>
    </>
  );
}

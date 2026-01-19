import classes from "../Create/CreateWorkoutModal.module.css";
import Button from "../../../Button";
import Input from "../../../Input";
import { crossfitData } from "../../../../Data/Exercises";
import {
  type ExerciseInWorkoutProps,
  type Metrics,
} from "../../../../Data/Calendar/modal";

interface EditModalProps {
  category: string;
  categorySelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  exercise: string;
  exerciseSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  metrics: Metrics;
  metricsSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasWeight: boolean;
  exercisesList: ExerciseInWorkoutProps[];
  addExerciseToList: () => void;
  saveEditedWorkout: () => void;
  editExercise: (id: string) => void;
  saveEditedExercise: () => void;
  deleteExercise: (id: string) => void;
  isEditing: boolean;
  closeModal: () => void;
}

export default function EditWorkoutModal({
  category,
  categorySelect,
  exercise,
  exerciseSelect,
  metrics,
  metricsSelect,
  hasWeight,
  addExerciseToList,
  exercisesList,
  saveEditedWorkout,
  editExercise,
  saveEditedExercise,
  deleteExercise,
  isEditing,
  closeModal,
}: EditModalProps) {
  return (
    <>
      <div className={classes.modalSection}>
        <label>Category</label>
        <select
          className={classes.categoryMenu}
          value={category}
          onChange={categorySelect}
        >
          <option>Choose a Category</option>
          {crossfitData.map((category) => (
            <option key={category.id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className={classes.modalSection}>
        <label>Exercise for {category}</label>
        <select
          className={classes.exercisesMenu}
          value={exercise}
          onChange={exerciseSelect}
        >
          <option>Choose an Exercise</option>
        </select>
      </div>

      {isEditing && (
        <div className={classes.inputSection}>
          <p>Selected exercise:</p>
          <div className={classes.modalInput}>
            <Input
              name="sets"
              type="text"
              label="Sets"
              variation="inputForModal"
              value={metrics.sets}
              onChange={metricsSelect}
            />

            <Input
              name="reps"
              type="text"
              label="Reps/Cal"
              variation="inputForModal"
              value={metrics.reps}
              onChange={metricsSelect}
            />
            {hasWeight && (
              <Input
                name="weight"
                type="text"
                label="Weight"
                variation="inputForModal"
                value={metrics.weight}
                onChange={metricsSelect}
              />
            )}

            <Input
              name="work"
              type="text"
              label="Work Time"
              variation="inputForModal"
              value={metrics.work}
              onChange={metricsSelect}
            />

            <Input
              name="rest"
              type="text"
              label="Rest Time"
              variation="inputForModal"
              value={metrics.rest}
              onChange={metricsSelect}
            />

            <div className={classes.addExerciseBtn}>
              <Button
                variation="primary"
                onClick={isEditing ? saveEditedExercise : addExerciseToList}
              >
                {isEditing ? "Add Changes" : "Add Exercise"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {exercisesList.length > 0 ? (
        <div>
          <ul className={classes.exercisePreview}>
            {exercisesList.map((exercise) => (
              <li key={exercise.id} className={classes.exerciseItem}>
                {exercise.note}
                <div className={classes.exerciseBtns}>
                  <Button
                    variation="primary"
                    onClick={() => editExercise(exercise.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variation="quaternary"
                    onClick={() => deleteExercise(exercise.id)}
                  >
                    X
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={classes.boxAlert}>
          <p className={classes.errorText}>
            This workout is empty. You can add new exercises or save it to
            remove it from the calendar
          </p>
        </div>
      )}

      <div className={classes.workoutBtns}>
        <Button variation="primary" onClick={saveEditedWorkout}>
          Save changes
        </Button>
        <Button variation="quaternary" onClick={closeModal}>
          Cancel
        </Button>
      </div>
    </>
  );
}

import classes from "./CreateWorkoutModal.module.css";
import Input from "../../../Input";
import Button from "../../../Button";
import { crossfitData } from "../../../../Data/Exercises";
import {
  type ExerciseInWorkoutProps,
  type Metrics,
} from "../../../../Data/Calendar/modal";

interface CreateModalProps {
  category: string;
  categorySelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  exercise: string;
  exerciseSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  metrics: Metrics;
  metricsSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasWeight: boolean;
  exercisesList: ExerciseInWorkoutProps[];
  addExerciseToList: () => void;
  createWorkout: () => void;
  closeModal: () => void;
  error: { title: boolean; workoutPlan: boolean };
}

export default function CreateWorkoutModal({
  category,
  categorySelect,
  exercise,
  exerciseSelect,
  metrics,
  metricsSelect,
  hasWeight,
  addExerciseToList,
  exercisesList,
  createWorkout,
  closeModal,
  error,
}: CreateModalProps) {
  return (
    <>
      <div className={classes.modalSection}>
        <p>Category</p>
        <select
          className={classes.categoryMenu}
          value={category}
          onChange={categorySelect}
        >
          <option value="">Choose a Category</option>
          {crossfitData.map((category) => (
            <option key={category.id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className={classes.modalSection}>
        <p>Exercise for </p>
        <select
          className={classes.exercisesMenu}
          value={exercise}
          onChange={exerciseSelect}
        >
          <option value="">Choose an Exercise</option>

          {crossfitData
            .find((cat) => cat.title === category)
            ?.exercises.map((exercise) =>
              exercise.subExercises ? (
                <optgroup key={exercise.id} label={exercise.name}>
                  {exercise.subExercises.map((subexercise) => (
                    <option key={subexercise.id} value={subexercise.name}>
                      {subexercise.name}
                    </option>
                  ))}
                </optgroup>
              ) : (
                <option key={exercise.id} value={exercise.name}>
                  {exercise.name}
                </option>
              )
            )}
        </select>
      </div>

      {exercise && (
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
              <Button variation="primary" onClick={addExerciseToList}>
                Add exercise
              </Button>
            </div>
          </div>

          {exercisesList.length > 0 && (
            <div>
              <ul className={classes.exercisePreview}>
                {exercisesList.map((exercise) => (
                  <li key={exercise.id}>{exercise.note}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className={classes.workoutBtns}>
        <Button variation="primary" type="button" onClick={createWorkout}>
          Create Workout
        </Button>
        <Button variation="quaternary" onClick={closeModal}>
          Cancel
        </Button>
      </div>
      {error.workoutPlan && (
        <p className={classes.errorText}>Cannot create empty workout</p>
      )}
    </>
  );
}

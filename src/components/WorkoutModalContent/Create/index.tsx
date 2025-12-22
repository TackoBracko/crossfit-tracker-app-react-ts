import classes from "./CreateWorkoutModal.module.css";
import Input from "../../Input";
import Button from "../../Button";
import { crossfitData } from "../../../Data/Exercises";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  WorkoutContext,
  type ExerciseProps,
  type WorkoutsForDateProps,
} from "../../../Context/WorkoutContext";

interface Metrics {
  sets: string;
  reps: string;
  weight: string;
  work: string;
  rest: string;
}

interface NoteProps {
  name: string;
  sets: number;
  reps: number;
  weight: string;
  work: number;
  rest: number;
  hasWeight: boolean;
}

interface ExerciseInWorkoutProps {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: string;
  work: number;
  rest: number;
  hasWeight: boolean;
  note: string;
}

interface ExerciseInfo {
  id: number;
  name: string;
  categoryId: number;
  category: string;
  subExercise: number | null;
  picture: string;
  hasWeight: boolean;
}

interface CalendarProps {
  closeModal: () => void;
  currentDate: string;
  workoutTitle: string;
  setWorkoutTitle: React.Dispatch<React.SetStateAction<string>>;
}

export default function CreateWorkoutModal({
  closeModal,
  currentDate,
  workoutTitle,
  setWorkoutTitle,
}: CalendarProps) {
  const { createWorkout } = useContext(WorkoutContext);
  //const [workoutTitle, setWorkoutTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [exercise, setExercise] = useState<string>("");
  const [exercisesList, setExercisesList] = useState<ExerciseInWorkoutProps[]>(
    []
  );
  const [metrics, setMetrics] = useState<Metrics>({
    sets: "",
    reps: "",
    weight: "",
    work: "",
    rest: "",
  });
  const [hasWeight, setHasWeight] = useState<boolean>(false);
  const [error, setError] = useState<{ title: boolean; workoutplan: boolean }>({
    title: false,
    workoutplan: false,
  });

  //category and exercise
  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setExercise("");
    setHasWeight(false);
    setMetrics({ sets: "", reps: "", weight: "", work: "", rest: "" });
  };

  const handleExerciseSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedExercise = e.target.value;
    setExercise(selectedExercise);

    const exerciseSelect = crossfitData
      .flatMap((category) =>
        category.exercises.flatMap((exercise) =>
          exercise.subExercises ? exercise.subExercises : [exercise]
        )
      )
      .find((ex) => ex.name === selectedExercise);
    setHasWeight(exerciseSelect && exerciseSelect.hasWeight ? true : false);
  };

  const handleExerciseMetrics = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMetrics((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const metricsBlock = (exercise: NoteProps) => {
    let metricsNote = exercise.name;

    if (exercise.sets > 0 && exercise.reps > 0) {
      metricsNote += ` ${exercise.sets} sets x ${exercise.reps} reps`;
    } else if (exercise.sets > 0) {
      metricsNote += ` ${exercise.sets} sets`;
    } else if (exercise.reps > 0) {
      metricsNote += ` ${exercise.reps} reps`;
    }

    if (exercise.hasWeight && exercise.weight) {
      metricsNote += ` @ ${exercise.weight} kg`;
    }
    if (exercise.work) {
      metricsNote += ` | work: ${exercise.work}s`;
    }
    if (exercise.rest) {
      metricsNote += ` | rest: ${exercise.rest}s`;
    }
    return metricsNote;
  };

  //exercise to list

  const addExerciseToList = () => {
    const exerciseInfo: NoteProps = {
      name: exercise,
      sets: Number(metrics.sets) || 0,
      reps: Number(metrics.reps) || 0,
      weight: metrics.weight,
      work: Number(metrics.work) || 0,
      rest: Number(metrics.rest) || 0,
      hasWeight: hasWeight,
    };

    const newExercise: ExerciseInWorkoutProps = {
      id: uuidv4(),
      ...exerciseInfo,
      note: metricsBlock(exerciseInfo),
    };

    setExercisesList((prev) => [...prev, newExercise]);

    setMetrics({
      sets: "",
      reps: "",
      weight: "",
      work: "",
      rest: "",
    });
  };

  const workoutBuild = (
    workoutTitle: string,
    currentDate: string,
    exercisesList: ExerciseInWorkoutProps[]
  ) => {
    let categoriesList: ExerciseInfo[] = [];

    crossfitData.forEach((category) => {
      const exercises = category.exercises.map((exercise) => {
        if (exercise.subExercises) {
          return exercise.subExercises.map((subexercise) => ({
            id: subexercise.id,
            name: subexercise.name,
            categoryId: category.id,
            category: category.title,
            subExercise: exercise.id,
            picture: subexercise.picture,
            hasWeight: subexercise.hasWeight,
          }));
        } else {
          return [
            {
              id: exercise.id,
              name: exercise.name,
              categoryId: category.id,
              category: category.title,
              subExercise: null,
              picture: exercise.picture,
              hasWeight: exercise.hasWeight,
            },
          ];
        }
      });

      categoriesList = categoriesList.concat(...exercises);
    });

    const selectedExercisesData: ExerciseProps[] = exercisesList.flatMap(
      (exercise) => {
        const exerciseData = categoriesList.find(
          (ex) => ex.name === exercise.name
        );
        if (!exerciseData) return [];

        return [
          {
            id: exerciseData.id,
            name: exerciseData.name,
            categoryId: exerciseData.categoryId,
            category: exerciseData.category,
            subExercise: exerciseData.subExercise,
            picture: exerciseData.picture,
            sets: exercise.sets,
            reps: exercise.reps,
            weight: exercise.weight,
            work: exercise.work,
            rest: exercise.rest,
            hasWeight: exerciseData.hasWeight,
            note: exercise.note,
          },
        ];
      }
    );

    return {
      id: uuidv4(),
      title: workoutTitle,
      exercises: selectedExercisesData,
      category: category,
      date: currentDate,
    };
  };

  //create workout

  const handleCreateWorkout = () => {
    const errorTitle = !workoutTitle.trim();
    const errorWorkoutPlan = !category || exercisesList.length === 0;

    if (errorTitle || errorWorkoutPlan) {
      setError({
        title: errorTitle,
        workoutplan: errorWorkoutPlan,
      });
      return;
    }

    const newWorkout = workoutBuild(workoutTitle, currentDate, exercisesList);

    const todayWorkout: WorkoutsForDateProps = {
      workout: [newWorkout],
    };

    createWorkout(currentDate, todayWorkout);

    clearModal();
    closeModal();
    setError({
      title: false,
      workoutplan: false,
    });

    console.log(currentDate, todayWorkout);
  };

  const clearModal = () => {
    setWorkoutTitle("");
    setCategory("");
    setExercise("");
    setExercisesList([]);
    setMetrics({ sets: "", reps: "", weight: "", work: "", rest: "" });
    setWorkoutTitle("");
    setError({
      title: false,
      workoutplan: false,
    });
    setHasWeight(false);
  };

  const handleCancleBtn = () => {
    clearModal();
    closeModal();
  };

  return (
    <>
      <div className={classes.modalSection}>
        <p>Category</p>
        <select
          className={classes.categoryMenu}
          value={category}
          onChange={handleCategorySelect}
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
          onChange={handleExerciseSelect}
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
              onChange={handleExerciseMetrics}
            />

            <Input
              name="reps"
              type="text"
              label="Reps/Cal"
              variation="inputForModal"
              value={metrics.reps}
              onChange={handleExerciseMetrics}
            />

            {hasWeight && (
              <Input
                name="weight"
                type="text"
                label="Weight"
                variation="inputForModal"
                value={metrics.weight}
                onChange={handleExerciseMetrics}
              />
            )}

            <Input
              name="work"
              type="text"
              label="Work Time"
              variation="inputForModal"
              value={metrics.work}
              onChange={handleExerciseMetrics}
            />

            <Input
              name="rest"
              type="text"
              label="Rest Time"
              variation="inputForModal"
              value={metrics.rest}
              onChange={handleExerciseMetrics}
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
                  <li key={exercise.id}>{metricsBlock(exercise)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className={classes.workoutBtns}>
        <Button variation="primary" type="button" onClick={handleCreateWorkout}>
          Create Workout
        </Button>
        <Button variation="quaternary" onClick={handleCancleBtn}>
          Cancel
        </Button>
      </div>
      {error.workoutplan && (
        <p className={classes.errorText}>Cannot create empty workout</p>
      )}
    </>
  );
}

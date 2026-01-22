import classes from "./Calendar.module.css";
import { crossfitData } from "../../Data/Exercises";
import { v4 as uuidv4 } from "uuid";
import { useContext, useRef, useState } from "react";
import CalendarHeader from "../../components/Calendar/Header";
import DayPicker from "../../components/Calendar/DayPicker";
import WorkoutHeader from "../../components/Calendar/WorkoutModal/Header";
import LayoutForModal from "../../components/Modal/Layout";
import Modal from "../../components/Modal";
import WorkoutsForDay from "../../components/Calendar/WorkoutsForDay";
import CreateWorkoutModal from "../../components/Calendar/WorkoutModal/Create";
import EditWorkoutModal from "../../components/Calendar/WorkoutModal/Edit";
import type { CalendarDay } from "../../Data/Calendar/types";
import type { ModalRef } from "../../components/Modal";
import {
  WorkoutContext,
  type ExerciseProps,
  type WorkoutsForDateProps,
  type WorkoutProps,
} from "../../Context/WorkoutContext";

import {
  type Metrics,
  type NoteProps,
  type ExerciseInWorkoutProps,
  type ExerciseInfo,
} from "../../Data/Calendar/modal";

export default function Calendar() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const createModalRef = useRef<ModalRef>(null);
  const editModalRef = useRef<ModalRef>(null);

  const {
    allWorkouts,
    createWorkout,
    changeWorkout,
    deleteWorkout,
    addWorkoutToContext,
  } = useContext(WorkoutContext);

  const [currentDay, setCurrentDay] = useState(new Date());
  const currentDate = `${currentDay.getDate()}_${
    currentDay.getMonth() + 1
  }_${currentDay.getFullYear()}`;
  const dateHasWorkout = allWorkouts[currentDate];

  const [workoutTitle, setWorkoutTitle] = useState("");
  const [category, setCategory] = useState("");
  const [exercise, setExercise] = useState("");
  const [exercisesList, setExercisesList] = useState<ExerciseInWorkoutProps[]>(
    []
  );
  const [editWorkout, setEditWorkout] = useState<WorkoutProps | null>(null);
  const [metrics, setMetrics] = useState<Metrics>({
    sets: "",
    reps: "",
    weight: "",
    work: "",
    rest: "",
  });
  const [hasWeight, setHasWeight] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingExercise, setEditingExercise] = useState<string | null>(null);
  const [error, setError] = useState<{ title: boolean; workoutPlan: boolean }>({
    title: false,
    workoutPlan: false,
  });

  const changeCurrentDay = (day: CalendarDay) => {
    const newDate = new Date(day.year, day.month, day.number);
    setCurrentDay(newDate);

    const selectedDay = `${newDate.getDate()}_${
      newDate.getMonth() + 1
    }_${newDate.getFullYear()}`;

    if (!allWorkouts[selectedDay]) {
      openCreateModal();
    }
  };

  //category and exercise select
  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setExercise("");
    setHasWeight(false);
    setMetrics({ sets: "", reps: "", weight: "", work: "", rest: "" });
  };

  const handleExerciseSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const exercise = e.target.value;
    setExercise(exercise);

    const exerciseSelect = crossfitData
      .flatMap((category) =>
        category.exercises.flatMap((exercise) =>
          exercise.subExercises ? exercise.subExercises : [exercise]
        )
      )
      .find((ex) => ex.name === exercise);
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
      hasWeight,
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
        workoutPlan: errorWorkoutPlan,
      });
      return;
    }

    const newWorkout = workoutBuild(workoutTitle, currentDate, exercisesList);

    const todayWorkout: WorkoutsForDateProps = {
      workout: [newWorkout],
    };

    createWorkout(currentDate, todayWorkout);

    clearCreateModal();
    closeCreateModal();
    setError({
      title: false,
      workoutPlan: false,
    });

    console.log(currentDate, todayWorkout);
  };

  //edit workout

  const handleEditWorkout = (workout: WorkoutProps) => {
    if (workout) {
      console.log("opening editing modal for:", workout);
      setEditWorkout(workout);
      setWorkoutTitle(workout.title);
      setCategory(workout.category || "");
      setExercise("");

      setExercisesList(
        workout.exercises.map((ex) => ({
          id: uuidv4(),
          name: ex.name,
          sets: ex.sets,
          reps: ex.reps,
          weight: ex.weight,
          work: ex.work,
          rest: ex.rest,
          hasWeight: ex.hasWeight ? ex.hasWeight : false,
          note: ex.note,
        }))
      );
      openEditModal();
    }
  };

  const handleSaveEditedWorkout = () => {
    if (!editWorkout) return;

    if (exercisesList.length === 0) {
      deleteWorkout(currentDate, editWorkout.id);
      setEditWorkout(null);
      closeEditModal();
      return;
    }

    const newEditedWorkout = workoutBuild(
      workoutTitle,
      currentDate,
      exercisesList
    );

    const updatedWorkout: WorkoutProps = {
      ...editWorkout,
      id: editWorkout.id,
      title: newEditedWorkout.title,
      category: category,
      exercises: newEditedWorkout.exercises,
    };

    changeWorkout(currentDate, updatedWorkout);
    addWorkoutToContext(updatedWorkout);
    setEditWorkout(null);
    closeEditModal();
    console.log(updatedWorkout);
  };

  // edit exercise

  const handleEditExercise = (id: string) => {
    const exerciseToEdit = exercisesList.find((exercise) => exercise.id === id);
    if (exerciseToEdit) {
      setExercise(exerciseToEdit.name);
      setMetrics({
        sets: String(exerciseToEdit.sets),
        reps: String(exerciseToEdit.reps),
        weight: exerciseToEdit.weight,
        work: String(exerciseToEdit.work),
        rest: String(exerciseToEdit.rest),
      });
      setIsEditing(true);
      setEditingExercise(id);
    }
  };

  const handleSaveEditedExercise = () => {
    if (!editingExercise || !exercise) return;

    setExercisesList((prev) =>
      prev.map((ex) => {
        if (ex.id !== editingExercise) return ex;

        const updatedExercise = {
          ...ex,
          name: exercise,
          sets: Number(metrics.sets) || 0,
          reps: Number(metrics.reps) || 0,
          weight: metrics.weight,
          work: Number(metrics.work) || 0,
          rest: Number(metrics.rest) || 0,
        };

        return {
          ...updatedExercise,
          note: metricsBlock(updatedExercise),
        };
      })
    );

    setEditingExercise(null);
    setExercise("");
    setMetrics({ sets: "", reps: "", weight: "", work: "", rest: "" });
  };
  //delete

  const handleDeleteWorkout = (id: string) => {
    deleteWorkout(currentDate, id);
  };

  const handleDeleteExercise = (id: string) => {
    setExercisesList((prevEx) =>
      prevEx.filter((exercise) => exercise.id !== id)
    );
  };

  //modal

  const nextMonth = () => {
    setCurrentDay(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const previousMonth = () => {
    setCurrentDay(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const openCreateModal = () => {
    if (createModalRef.current) {
      createModalRef.current.open();
    }
  };

  const closeCreateModal = () => {
    if (createModalRef.current) {
      createModalRef.current.close();
      clearCreateModal();
    }
  };

  const openEditModal = () => {
    if (editModalRef.current) {
      editModalRef.current.open();
    }
  };

  const closeEditModal = () => {
    if (editModalRef.current) {
      editModalRef.current.close();
    }
    clearEditModal();
  };

  const clearCreateModal = () => {
    setWorkoutTitle("");
    setCategory("");
    setExercise("");
    setExercisesList([]);
    setMetrics({ sets: "", reps: "", weight: "", work: "", rest: "" });
    setWorkoutTitle("");
    setError({
      title: false,
      workoutPlan: false,
    });
    setHasWeight(false);
  };

  const clearEditModal = () => {
    setExercise("");
    setMetrics({
      sets: "",
      reps: "",
      weight: "",
      work: "",
      rest: "",
    });
    setIsEditing(false);
    setEditingExercise(null);
    setHasWeight(false);
  };

  return (
    <>
      <section className={classes.calendarSection}>
        <CalendarHeader
          currentDay={currentDay}
          previousMonth={previousMonth}
          nextMonth={nextMonth}
        />

        <div className={classes.daysName}>
          {daysOfWeek.map((day, index) => {
            return <div key={index}>{day}</div>;
          })}
        </div>

        <DayPicker
          currentDay={currentDay}
          changeCurrentDay={changeCurrentDay}
        />

        <Modal ref={createModalRef}>
          <LayoutForModal>
            <WorkoutHeader
              workoutTitle={workoutTitle}
              setWorkoutTitle={setWorkoutTitle}
              modalTitle={`Workout for ${currentDay.toLocaleDateString(
                "en-GB"
              )}`}
            />
            <CreateWorkoutModal
              category={category}
              exercise={exercise}
              exercisesList={exercisesList}
              metrics={metrics}
              hasWeight={hasWeight}
              categorySelect={handleCategorySelect}
              exerciseSelect={handleExerciseSelect}
              metricsSelect={handleExerciseMetrics}
              addExerciseToList={addExerciseToList}
              createWorkout={handleCreateWorkout}
              error={error}
              closeModal={closeCreateModal}
            />
          </LayoutForModal>
        </Modal>

        <Modal ref={editModalRef}>
          <LayoutForModal>
            <WorkoutHeader
              workoutTitle={workoutTitle}
              setWorkoutTitle={setWorkoutTitle}
              modalTitle={`Edit workout for ${currentDay.toLocaleDateString(
                "en-GB"
              )}`}
            />
            <EditWorkoutModal
              category={category}
              exercise={exercise}
              exercisesList={exercisesList}
              metrics={metrics}
              hasWeight={hasWeight}
              categorySelect={handleCategorySelect}
              exerciseSelect={handleExerciseSelect}
              metricsSelect={handleExerciseMetrics}
              addExerciseToList={addExerciseToList}
              saveEditedWorkout={handleSaveEditedWorkout}
              editExercise={handleEditExercise}
              saveEditedExercise={handleSaveEditedExercise}
              deleteExercise={handleDeleteExercise}
              isEditing={isEditing}
              closeModal={closeEditModal}
            />
          </LayoutForModal>
        </Modal>

        {dateHasWorkout && (
          <WorkoutsForDay
            openCreateModal={openCreateModal}
            openEditModal={openEditModal}
            workouts={dateHasWorkout}
            workoutDate={currentDate}
            editWorkout={handleEditWorkout}
            deleteWorkout={handleDeleteWorkout}
            addWorkoutToContext={addWorkoutToContext}
          />
        )}
      </section>
    </>
  );
}

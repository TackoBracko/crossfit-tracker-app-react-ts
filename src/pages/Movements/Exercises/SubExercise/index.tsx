import classes from "../Exercise/Exercise.module.css";
import { useParams, NavLink } from "react-router-dom";
import Button from "../../../../components/Button";
import { ArrowLeft } from "lucide-react";
import { crossfitData } from "../../../../Data/Exercises";

export default function SubExercise() {
  const { categoryId, exerciseId, subExerciseId } = useParams<{
    categoryId: string;
    exerciseId: string;
    subExerciseId: string;
  }>();

  const selectedCategory = crossfitData.find(
    (category) => category.id === Number(categoryId)
  );
  if (!selectedCategory) {
    return <p>Category not found</p>;
  }

  const selectedExercise = selectedCategory.exercises.find(
    (exercise) => exercise.id === Number(exerciseId)
  );
  if (!selectedExercise) {
    return <p>Exercise not fount</p>;
  }

  const selectedSubExercise = selectedExercise.subExercises?.find(
    (sub) => sub.id === Number(subExerciseId)
  );
  if (!selectedSubExercise) {
    return <p>No sub exercises for this exercise</p>;
  }

  return (
    <>
      <header className={classes.exerciseHeader}>
        <NavLink to={`/categories/${categoryId}/exercises/${exerciseId}`}>
          <Button
            variation="secondary"
            iconLeft={<ArrowLeft className={classes.icon} />}
          />
        </NavLink>
      </header>
      <section className={classes.exerciseSection}>
        <div className={classes.exerciseVideo}>
          <h1>{selectedSubExercise.name}</h1>
          <img
            src={selectedSubExercise.picture}
            alt={selectedSubExercise.name}
          />

          <p className={classes.videoDescription}>
            {selectedSubExercise.description} <br />
            <span>(watch video for better experience)</span>
          </p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedSubExercise.video}`}
            title="YouTube video of movement"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}

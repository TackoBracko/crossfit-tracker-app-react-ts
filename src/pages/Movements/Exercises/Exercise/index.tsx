import classes from "./Exercise.module.css";
import { crossfitData } from "../../../../Data/Exercise";
import { useParams, NavLink } from "react-router-dom";
import Button from "../../../../components/Button";
import { ArrowLeft } from "lucide-react";

export default function Exercise() {
  const { categoryId, exerciseId } = useParams<{
    categoryId: string;
    exerciseId: string;
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
    return <p>There is no selected exercise</p>;
  }

  return (
    <>
      <header className={classes.exerciseHeader}>
        <NavLink to={`/categories/${categoryId}`}>
          <Button
            variation="secondary"
            iconLeft={<ArrowLeft className={classes.icon} />}
          />
        </NavLink>
      </header>

      <section className={classes.exerciseSection}>
        <div className={classes.exerciseVideo}>
          <h1>{selectedExercise.name}</h1>
          <img src={selectedExercise.picture} alt={selectedExercise.name} />

          <p className={classes.videoDescription}>
            {selectedExercise.description} <br />
            <span>(watch video for better experience)</span>
          </p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedExercise.video}`}
            title="YouTube video of movement"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section className={classes.subCategorySection}>
        {selectedExercise.subExercises && (
          <>
            <h3>Subcategories:</h3>
            <div className={classes.subCategoryList}>
              {selectedExercise.subExercises.map((subExercise) => (
                <div key={subExercise.id} className={classes.subCategoryBox}>
                  <NavLink
                    to={`/categories/${categoryId}/exercises/${exerciseId}/${subExercise.id}`}
                  >
                    <h4>{subExercise.name}</h4>
                    <img src={subExercise.picture} alt={subExercise.name} />
                  </NavLink>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}

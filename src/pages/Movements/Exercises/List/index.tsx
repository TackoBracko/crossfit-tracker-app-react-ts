import classes from "./ExercisesList.module.css";
import { NavLink, useParams } from "react-router-dom";
import Button from "../../../../components/Button";
import { ArrowLeft } from "lucide-react";
import { crossfitData } from "../../../../Data/Exercises";

export default function ExercisesList() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const selectedCategory = crossfitData.find(
    (category) => category.id === Number(categoryId)
  );

  if (!selectedCategory) {
    return <p>Category not found</p>;
  }

  return (
    <>
      <header className={classes.exercisesHeader}>
        <div className={classes.exercisesInfo}>
          <NavLink to="/categories">
            <Button
              variation="secondary"
              iconLeft={<ArrowLeft className={classes.icon} />}
            />
          </NavLink>
          <h1>{selectedCategory.title}</h1>
        </div>
        <p>{selectedCategory.categoryDescription}</p>
      </header>

      <section className={classes.exercisesSection}>
        {selectedCategory.exercises.map((exercise) => (
          <NavLink to={`/categories/${categoryId}/exercises/${exercise.id}`}>
            <div key={exercise.id} className={classes.exercisesList}>
              <h3>{exercise.name}</h3>
              <img src={exercise.picture} alt={exercise.name} />
            </div>
          </NavLink>
        ))}
      </section>
    </>
  );
}

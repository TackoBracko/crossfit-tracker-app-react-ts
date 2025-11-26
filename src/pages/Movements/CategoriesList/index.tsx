import classes from "./CategoriesList.module.css";
import { crossfitData } from "../../../Data/Exercise";

export default function CategoriesList() {
  return (
    <>
      <header className={classes.categoriesHeader}>
        <h1>Categories</h1>
      </header>

      <section className={classes.categoriesSection}>
        {crossfitData.map((category) => (
          <div key={category.id} className={classes.categoryBox}>
            <div className={classes.categoryCard}>
              <img src={category.icon} alt={category.title} />
              <h3>{category.title}</h3>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

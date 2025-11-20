import { NavLink, Form } from "react-router-dom";
import classes from "./Edit.module.css";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

export default function Edit() {
  return (
    <>
      <header className={classes.editHeader}>
        <div className={classes.headerInfo}>
          <NavLink to="/profile">
            <Button variation="secondary" />
          </NavLink>
          <h1>Edit Profile</h1>
        </div>

        <div className={classes.editProfileImg}>
          <p>A</p>
        </div>
      </header>

      <section className={classes.editFormSection}>
        <Form className={classes.editForm}>
          <div className={classes.editInput}>
            <Input
              name="name"
              type="text"
              label="Full name"
              placeholder="Your name"
            />
          </div>

          <div className={classes.editInput}>
            <Input name="email" type="email" label="Email address" />
          </div>

          <div className={classes.editInput}>
            <div className={classes.unitContainer}>
              <Input
                name="password"
                type="text"
                label="Password"
                placeholder="Your password"
              />
            </div>
          </div>

          <div className={classes.editInput}>
            <div className={classes.unitDiv}>
              <Input
                name="weight"
                type="number"
                label="Weight"
                placeholder="Your weight"
              />
              <span className={classes.unit}>kg</span>
            </div>
          </div>

          <div className={classes.editInput}>
            <div className={classes.unitDiv}>
              <Input
                name="height"
                type="number"
                label="Height"
                placeholder="Your height"
              />
              <span className={classes.unit}>cm</span>
            </div>
          </div>

          <div className={`${classes.setupInput} ${classes.genderField}`}>
            <label>Gender</label>
            <div className={classes.genderSelection}>
              <label className={classes.genderOption}>
                <input type="radio" name="gender" value="Male" />
                Male
              </label>
              <label className={classes.genderOption}>
                <input type="radio" name="gender" value="Female" />
                Female
              </label>
            </div>
          </div>

          <div className={classes.editInput}>
            <Input
              name="age"
              type="number"
              label="Age"
              placeholder="Your age"
            />
          </div>

          <Button variation="primary" type="submit">
            Edit Profile
          </Button>
        </Form>
      </section>
    </>
  );
}

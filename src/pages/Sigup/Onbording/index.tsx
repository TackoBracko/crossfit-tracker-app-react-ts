//import React from 'react'
import classes from "./Onbording.module.css";
import { Form } from "react-router-dom";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function Onbording() {
  return (
    <>
      <header className={classes.setupHeader}>
        <h2>Tell us about yourself</h2>
        <p>We need a few details to personalize your experience</p>
      </header>

      <section className={classes.setupSection}>
        <Form>
          {/*{setupInfoError ? <p>Please fill out all fields</p> : null}*/}

          <div className={classes.setupInput}>
            <Input
              label="Your name"
              name="name"
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className={classes.setupInput}>
            <Input
              label="Birthday"
              name="birthday"
              type="date"
              //value={}
              //onChange={}
            />
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

          <div className={classes.setupInput}>
            <div className={classes.unitDiv}>
              <Input
                label="Weight"
                type="number"
                name="weight"
                placeholder="Weight (kg)"
                //value={}
                //onChange={}
              />
              <span className={classes.unit}>kg</span>
            </div>
          </div>

          <div className={classes.setupInput}>
            <div className={classes.unitDiv}>
              <Input
                label="Height"
                name="height"
                type="number"
                placeholder="Height (cm)"
                //value={}
                //onChange={}
              />
              <span className={classes.unit}>cm</span>
            </div>
          </div>

          <Button variation="primary" type="submit">
            Start
          </Button>
        </Form>
      </section>
    </>
  );
}

//import React from 'react'
import { Form } from "react-router-dom";
import classes from "./Signup.module.css";

export default function Signup() {
  return (
    <>
      <header className={classes.signupHeader}>
        <h3>
          Hello <span>new Member</span>
        </h3>
        <p>Enter your informations below or login </p>
      </header>

      <section className={classes.signupFormSection}>
        <Form>
          <div>
            <input type="email" placeholder="Email" name="email" />
          </div>

          <div>
            <input type="password" placeholder="Password" name="password" />
          </div>

          <div>
            <input
              type="password"
              placeholder="Repeat Password"
              name="repeat password"
            />
          </div>

          <button type="submit">Sign up</button>
        </Form>
      </section>
    </>
  );
}

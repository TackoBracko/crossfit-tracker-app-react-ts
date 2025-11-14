//import React from 'react'
import classes from "./Login.module.css";
import { Form } from "react-router-dom";

export default function Login() {
  return (
    <>
      <header className={classes.loginHeader}>
        <h3>
          Welcom back <span></span>
        </h3>
      </header>

      <section className={classes.loginFormSection}>
        <Form>
          <div>
            <input type="email" placeholder="Email" name="email" />
          </div>

          <div>
            <input type="passwor" placeholder="Password" name="password" />
          </div>

          <button type="submit">Login</button>
        </Form>
      </section>
    </>
  );
}

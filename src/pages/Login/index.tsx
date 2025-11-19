//import React from 'react'
import classes from "./Login.module.css";
import { Form, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmailValid = email.trim() !== "" && email.includes("@");
    const isPasswordValid = password.trim() !== "";

    if (!isEmailValid || !isPasswordValid) {
      setLoginError({
        email: !isEmailValid,
        password: !isPasswordValid,
      });

      return;
    }
    console.log("Login succseful");

    navigate("/");
  };

  const handleOnBlur = (input: string) => {
    setLoginError((prev) => {
      return { ...prev, [input]: false };
    });
  };

  return (
    <>
      <header className={classes.loginHeader}>
        <h3>
          Welcom back <span></span>
        </h3>
      </header>

      <section className={classes.loginFormSection}>
        <Form onSubmit={handleLoginSubmit}>
          <div>
            {loginError.email ? <p>Email is required</p> : null}
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleOnBlur("email")}
            />
          </div>

          <div>
            {loginError.password ? <p>Password is required</p> : null}

            <Input
              type="passwor"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handleOnBlur("password")}
            />
          </div>

          <Button variation="primary" type="submit">
            Login
          </Button>
        </Form>
      </section>
    </>
  );
}

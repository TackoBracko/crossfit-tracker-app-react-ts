//import React from 'react'
import { Form, useNavigate } from "react-router-dom";
import classes from "./Signup.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const navigate = useNavigate();

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmailValid = email.trim() !== "" && email.includes("@");
    const isPasswordValid = password.trim() !== "";
    const isConfirmPassword = password === confirmPassword;

    if (!isEmailValid || !isPasswordValid || !isConfirmPassword) {
      setSignupError({
        email: !isEmailValid,
        password: !isPasswordValid,
        confirmPassword: !isConfirmPassword,
      });

      return;
    }
    console.log("Signin succseful");
    navigate("/on-bording");
  };

  const handleOnBlur = (input: string) => {
    setSignupError((prev) => {
      return { ...prev, [input]: false };
    });
  };

  return (
    <>
      <header className={classes.signupHeader}>
        <h3>Welcom!</h3>
        <p>Get started by creating your profile</p>
      </header>

      <section className={classes.signupFormSection}>
        <Form onSubmit={handleSignupSubmit}>
          <div>
            {signupError.email ? <p>Email is required</p> : null}

            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onBlur={() => {
                handleOnBlur("email");
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            {signupError.password ? <p>Password is required</p> : null}

            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onBlur={() => handleOnBlur("password")}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            {signupError.confirmPassword ? <p>Passwords do not match</p> : null}

            <Input
              type="password"
              placeholder="Repeat Password"
              name="confirmpassword"
              value={confirmPassword}
              onBlur={() => handleOnBlur("confirmPassword")}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <Button type="submit" variation="primary">
            Sign up
          </Button>
        </Form>
      </section>
    </>
  );
}

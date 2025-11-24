import classes from "./Signup.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserDataContext } from "../../components/Context/UserContext";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const { handleUserData } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmailValid = email.trim() !== "" && email.includes("@");
    const isPasswordValid = password.trim() !== "" && password.length > 5;

    const isConfirmPassword = password === confirmPassword;

    if (!isEmailValid || !isPasswordValid || !isConfirmPassword) {
      setSignupError({
        email: !isEmailValid,
        password: !isPasswordValid,
        confirmPassword: !isConfirmPassword,
      });

      return;
    }

    console.log("Signup succseful", email, password);
    handleUserData({
      email,
      password,
    });
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
            {signupError.email ? (
              <p className={classes.errorText}>Email is required</p>
            ) : null}

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
            {signupError.password ? (
              password.trim() === " " ? (
                <p className={classes.errorText}>Password is required</p>
              ) : (
                <p className={classes.errorText}>
                  Password has to be longer than 6 characters
                </p>
              )
            ) : null}

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
            {signupError.confirmPassword ? (
              <p className={classes.errorText}>Passwords do not match</p>
            ) : null}

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

import classes from "./Onbording.module.css";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Form, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserDataContext } from "../../../components/Context/UserContext";
import { AuthContext } from "../../../components/Context/AuthContext";

export default function Onbording() {
  const { user, handleUserData } = useContext(UserDataContext);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userSetupInfo, setUserSetupInfo] = useState({
    name: user.name,
    birthday: user.birthday,
    weight: user.weight,
    height: user.height,
    gender: user.gender,
    age: user.age,
  });

  const [setupInfoError, setSetupInfoError] = useState(false);

  const handleSetupInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserSetupInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleGender = (gender: string) => {
    setUserSetupInfo((prev) => {
      return { ...prev, gender };
    });
  };

  const handleAge = (birthday: string) => {
    const age = Date.now() - new Date(birthday).getTime();
    return Math.floor(age / (365.25 * 24 * 60 * 60 * 1000));
  };

  const handleSetupInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !userSetupInfo.name ||
      !userSetupInfo.birthday ||
      !userSetupInfo.weight ||
      !userSetupInfo.height ||
      !userSetupInfo.gender
    ) {
      setSetupInfoError(true);
      return;
    }

    const user = {
      ...userSetupInfo,
      age: handleAge(userSetupInfo.birthday),
    };

    handleUserData(user);
    console.log(userSetupInfo);
    login();
    navigate("/profile");
  };

  return (
    <>
      <header className={classes.setupHeader}>
        <h2>Tell us about yourself</h2>
        <p>We need a few details to personalize your experience</p>
      </header>

      <section className={classes.setupSection}>
        <Form onSubmit={handleSetupInfoSubmit}>
          {setupInfoError ? <p>Please fill out all fields</p> : null}

          <div className={classes.setupInput}>
            <Input
              label="Your name"
              name="name"
              type="text"
              value={userSetupInfo.name}
              onChange={handleSetupInfo}
            />
          </div>

          <div className={classes.setupInput}>
            <Input
              label="Birthday"
              name="birthday"
              type="date"
              value={userSetupInfo.birthday}
              onChange={handleSetupInfo}
            />
          </div>

          <div className={`${classes.setupInput} ${classes.genderField}`}>
            <label>Gender</label>
            <div className={classes.genderSelection}>
              <label className={classes.genderOption}>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={userSetupInfo.gender === "Male"}
                  onChange={() => handleGender("Male")}
                />
                Male
              </label>
              <label className={classes.genderOption}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={userSetupInfo.gender === "Famale"}
                  onChange={() => handleGender("Female")}
                />
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
                value={userSetupInfo.weight}
                onChange={handleSetupInfo}
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
                value={userSetupInfo.height}
                onChange={handleSetupInfo}
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

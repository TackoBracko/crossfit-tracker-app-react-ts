import { NavLink, Form, useNavigate } from "react-router-dom";
import classes from "./Edit.module.css";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import { useContext, useState } from "react";
import { UserDataContext } from "../../../../components/Context/UserContext";

export default function Edit() {
  const { user, handleUserData } = useContext(UserDataContext);
  const navigate = useNavigate();

  const [userEditData, setUserEditData] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
    birthday: user.birthday,
    weight: user.weight,
    height: user.height,
    gender: user.gender,
    age: user.age,
  });

  const [editError, setEditError] = useState({
    name: false,
    password: false,
    weight: false,
    height: false,
    age: false,
  });

  const userInitial = user.name ? user.name.charAt(0).toUpperCase() : "";

  const handleEditData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserEditData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNameValid = userEditData.name.trim() !== "";
    const isPasswordValid =
      userEditData.password.trim() !== "" && userEditData.password.length > 5;

    const isWeightValid = Number(userEditData.weight) >= 0;
    const isHeightValid = Number(userEditData.height) >= 0;
    const isAgeValid = Number(userEditData.age) >= 0;

    if (
      !isNameValid ||
      !isPasswordValid ||
      !isWeightValid ||
      !isHeightValid ||
      !isAgeValid
    ) {
      setEditError({
        name: !isNameValid,
        password: !isPasswordValid,
        weight: !isWeightValid,
        height: !isHeightValid,
        age: !isAgeValid,
      });

      return;
    }

    handleUserData({ ...userEditData });
    console.log(userEditData);
    navigate("/profile");
  };

  const handleGender = (gender: string) => {
    setUserEditData((prev) => ({ ...prev, gender }));
  };

  const handleOnBlur = (input: string) => {
    setEditError((prev) => ({ ...prev, [input]: false }));
  };

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
          <p>{userInitial}</p>
        </div>
      </header>

      <section className={classes.editFormSection}>
        <Form className={classes.editForm} onSubmit={handleEditSubmit}>
          <div className={classes.editInput}>
            <Input
              name="name"
              type="text"
              label="Full name"
              placeholder="Your name"
              value={userEditData.name}
              onChange={handleEditData}
              onBlur={() => handleOnBlur("name")}
              error={editError.name ? "You did not enter any name" : ""}
            />
          </div>

          <div className={classes.editInput}>
            <Input
              name="email"
              type="email"
              label="Email address"
              value={userEditData.email}
              disabled
            />
          </div>

          <div className={classes.editInput}>
            <div className={classes.unitDiv}>
              <Input
                name="password"
                type="text"
                label="Password"
                placeholder="Your password"
                value={userEditData.password}
                onChange={handleEditData}
                onBlur={() => handleOnBlur("password")}
                error={
                  editError.password
                    ? "Password has to be longer than 6 characters"
                    : ""
                }
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
                value={userEditData.weight}
                onChange={handleEditData}
                onBlur={() => handleOnBlur("weight")}
                error={
                  editError.weight ? "Weight cannot be negative number" : ""
                }
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
                value={userEditData.height}
                onChange={handleEditData}
                onBlur={() => handleOnBlur("height")}
                error={
                  editError.height ? "Height cannot be negative number" : ""
                }
              />
              <span className={classes.unit}>cm</span>
            </div>
          </div>

          <div className={`${classes.setupInput} ${classes.genderField}`}>
            <label>Gender</label>
            <div className={classes.genderSelection}>
              <label className={classes.genderOption}>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={userEditData.gender === "Male"}
                  onChange={() => handleGender("Male")}
                />
                Male
              </label>
              <label className={classes.genderOption}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={userEditData.gender === "Female"}
                  onChange={() => handleGender("Female")}
                />
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
              value={userEditData.age}
              onChange={handleEditData}
              onBlur={() => handleOnBlur("age")}
              error={editError.age ? "Age cannot be negative number" : ""}
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

import { useContext } from "react";
import classes from "./Profile.module.css";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";
import { AuthContext } from "../../../components/Context/AuthContext";

export default function Profile() {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <header className={classes.profileHeader}>
        <h1>Profile</h1>
      </header>

      <section className={classes.profileSection}>
        <div className={classes.leftInfo}>
          <p className={classes.profilePic}></p>
          <h3>
            <span>Ana</span>
          </h3>
        </div>

        <div className={classes.rightInfo}>
          <p>
            <span>Weight: </span>
            <span>52 kg</span>
          </p>

          <p>
            <span>Height: </span>
            <span>160 cm</span>
          </p>

          <p>
            <span>Age: </span>
            <span>34 years</span>
          </p>
        </div>
      </section>

      <section className={classes.profileSettings}>
        <ul>
          <li>
            <NavLink to="/edit">Edit Profile</NavLink>
          </li>
          <li>
            <NavLink to="">Privacy Policy</NavLink>
          </li>
        </ul>

        <Button variation="tertiary" onClick={() => logout()}>
          Sign out
        </Button>
      </section>
    </>
  );
}

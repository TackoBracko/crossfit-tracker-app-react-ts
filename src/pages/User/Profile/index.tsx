import classes from "./Profile.module.css";
import Button from "../../../components/Button";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../components/Context/AuthContext";
import { UserDataContext } from "../../../components/Context/UserContext";

export default function Profile() {
  const { user } = useContext(UserDataContext);
  const { logout } = useContext(AuthContext);
  const userInitial = user.name ? user.name.charAt(0).toUpperCase() : "";

  return (
    <>
      <header className={classes.profileHeader}>
        <h1>Profile</h1>
      </header>

      <section className={classes.profileSection}>
        <div className={classes.leftInfo}>
          <p className={classes.profilePic}>{userInitial}</p>
          <h3>
            <span>{user.name}</span>
          </h3>
        </div>

        <div className={classes.rightInfo}>
          <p>
            <span>Weight: </span>
            <span>{user.weight} kg</span>
          </p>

          <p>
            <span>Height: </span>
            <span>{user.height} cm</span>
          </p>

          <p>
            <span>Age: </span>
            <span>{user.age} years</span>
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

import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import { useState } from "react";

export default function Navigation() {
  const [isUserLogged] = useState(false);

  return (
    <header
      className={
        isUserLogged
          ? `${classes.appHeader} ${classes.dark} `
          : classes.appHeader
      }
    >
      <nav className={classes.appNavigation}>
        {isUserLogged ? (
          <ul className={classes.loggedNav}>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className={classes.activeNav}>
            <li>
              <NavLink
                to="log-in"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                LogIn
              </NavLink>
            </li>
            <li>
              <NavLink
                to="sign-up"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

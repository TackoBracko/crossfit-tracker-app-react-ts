import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Home, Dumbbell, Calendar, Utensils, User } from "lucide-react";

export default function Navigation() {
  const { isUserLogged } = useContext(AuthContext);
  return (
    <header
      className={
        isUserLogged
          ? `${classes.appHeader} ${classes.dark} `
          : classes.appHeader
      }
    >
      <nav
        className={`${classes.appNavigation} ${
          isUserLogged ? classes.navLogged : classes.navPublic
        }`}
      >
        {isUserLogged ? (
          <ul className={classes.loggedNav}>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <Home className={classes.icon} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <Dumbbell className={classes.icon} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meals"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <Utensils className={classes.icon} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calendar"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <Calendar className={classes.icon} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <User className={classes.icon} />
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className={classes.publicNav}>
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

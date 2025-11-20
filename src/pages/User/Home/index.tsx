//import React from 'react'
import { useContext } from "react";
import classes from "./Home.module.css";
import { UserDataContext } from "../../../components/Context/UserContext";

export default function Home() {
  const { user } = useContext(UserDataContext);

  return (
    <>
      <header className={classes.homeHeader}>
        <h1>
          Welcome back, <br /> {user?.name}
        </h1>
        <p>Push yourself, because no one else is going to do it for you</p>
      </header>
    </>
  );
}

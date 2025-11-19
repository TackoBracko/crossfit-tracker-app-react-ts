//import React from 'react'
import classes from "./Home.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.homeHeader}>
        <h1>
          Welcome back, <br /> anonimus
        </h1>
        <p>Push yourself, because no one else is going to do it for you</p>
      </header>
    </>
  );
}

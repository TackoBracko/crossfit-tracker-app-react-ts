import classes from "./Calendar.module.css";
import { useState } from "react";
import CalendarHeader from "../../components/Calendar/Header";
import CalendarComponent from "../../components/Calendar/Component";
import type { CalendarDay } from "../../Data/Calendar/types";

export default function Calendar() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDay, setCurrentDay] = useState(new Date());

  const changeCurrentDay = (day: CalendarDay) => {
    const newDate = new Date(day.year, day.month, day.number);
    setCurrentDay(newDate);
  };

  const nextMonth = () => {
    setCurrentDay(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const previousMonth = () => {
    setCurrentDay(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  return (
    <>
      <section className={classes.calendarSection}>
        <CalendarHeader
          currentDay={currentDay}
          previousMonth={previousMonth}
          nextMonth={nextMonth}
        />

        <div className={classes.daysName}>
          {daysOfWeek.map((day, index) => {
            return <div key={index}>{day}</div>;
          })}
        </div>

        <CalendarComponent
          currentDay={currentDay}
          changeCurrentDay={changeCurrentDay}
        />
      </section>
    </>
  );
}

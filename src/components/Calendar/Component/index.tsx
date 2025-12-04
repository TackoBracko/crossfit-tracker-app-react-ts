import type { CalendarComponentProps } from "../../../Data/Calendar/types";
import classes from "./CalendarComponent.module.css";

export default function CalendarComponent({
  currentDay,
  changeCurrentDay,
}: CalendarComponentProps) {
  const firstDayOfMonth = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    1
  );

  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];
  const todayDate = new Date();

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    currentDays.push({
      currentMonth: firstDayOfMonth.getMonth() === currentDay.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: todayDate.toDateString() === firstDayOfMonth.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    });
  }

  return (
    <div className={classes.dates}>
      {currentDays.map((day, index) => {
        return (
          <div
            key={index}
            className={`${classes.day} ${
              day.currentMonth ? classes.allDays : ""
            } ${day.selected ? classes.currentDay : ""} `}
            onClick={() => changeCurrentDay(day)}
          >
            <p>{day.number}</p>
          </div>
        );
      })}
    </div>
  );
}

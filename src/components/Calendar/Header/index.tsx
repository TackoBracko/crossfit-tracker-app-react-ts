import type { CalendarHeaderProps } from "../../../Data/Calendar/types";
import classes from "./CalendarHeader.module.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CalendarHeader({
  currentDay,
  previousMonth,
  nextMonth,
}: CalendarHeaderProps) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <header className={classes.calendarHeader}>
        <div onClick={previousMonth}>
          <ArrowLeft />
        </div>
        <h1>{months[currentDay.getMonth()]}</h1>
        <div onClick={nextMonth}>
          <ArrowRight />
        </div>
      </header>
    </>
  );
}

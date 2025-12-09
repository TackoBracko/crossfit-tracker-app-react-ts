import classes from "./Calendar.module.css";
import { useRef, useState } from "react";
import CalendarHeader from "../../components/Calendar/Header";
import CalendarComponent from "../../components/Calendar/Component";
import CreateWorkoutModal from "../../components/WorkoutModalContent/Create";
import type { CalendarDay } from "../../Data/Calendar/types";
import type { ModalRef } from "../../components/Modal";
import Modal from "../../components/Modal";
import WorkoutHeader from "../../components/WorkoutModalContent/Header";
import LayoutForModal from "../../components/Modal/Layout";

export default function Calendar() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | string>("");
  const openCreateModalRef = useRef<ModalRef>(null);
  const openEditModalRef = useRef<ModalRef>(null);

  const changeCurrentDay = (day: CalendarDay) => {
    const newDate = new Date(day.year, day.month, day.number);
    setCurrentDay(newDate);
    setSelectedDay(newDate);
    openCreateModalRef.current?.open();
    console.log(selectedDay, "Create Modal is open");
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

        <Modal ref={openCreateModalRef}>
          <LayoutForModal>
            <WorkoutHeader
              modalTitle={`Workout for ${currentDay.toLocaleDateString(
                "en-GB"
              )}`}
            />
            <CreateWorkoutModal />
          </LayoutForModal>
        </Modal>

        <Modal ref={openEditModalRef}>
          <LayoutForModal>
            <WorkoutHeader
              modalTitle={`Edit workout for ${currentDay.toLocaleDateString(
                "en-GB"
              )}`}
            />
            <CreateWorkoutModal />
          </LayoutForModal>
        </Modal>
      </section>
    </>
  );
}

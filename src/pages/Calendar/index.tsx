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
import EditWorkoutModal from "../../components/WorkoutModalContent/Edit";

export default function Calendar() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDay, setCurrentDay] = useState(new Date());
  const openCreateModalRef = useRef<ModalRef>(null);
  const openEditModalRef = useRef<ModalRef>(null);
  const [workoutTitle, setWorkoutTitle] = useState("");

  const changeCurrentDay = (day: CalendarDay) => {
    const newDate = new Date(day.year, day.month, day.number);

    const selectedDay = `${newDate.getDate()}_${
      newDate.getMonth() + 1
    }_${newDate.getFullYear()}`;
    setCurrentDay(newDate);
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

  const closeCreateModal = () => {
    if (openCreateModalRef.current) {
      openCreateModalRef.current.close();
    }
  };

  const closeEditModal = () => {
    if (openEditModalRef.current) {
      openEditModalRef.current.close();
    }
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
              workoutTitle={workoutTitle}
              setWorkoutTitle={setWorkoutTitle}
              modalTitle={`Workout for ${currentDay.toLocaleDateString(
                "en-GB"
              )}`}
            />
            <CreateWorkoutModal
              closeModal={closeCreateModal}
              workoutTitle={workoutTitle}
              setWorkoutTitle={setWorkoutTitle}
              currentDate={currentDay.toLocaleDateString("en-GB")}
            />
          </LayoutForModal>
        </Modal>

        <Modal ref={openEditModalRef}>
          <LayoutForModal>
            <WorkoutHeader
              workoutTitle={workoutTitle}
              setWorkoutTitle={setWorkoutTitle}
              modalTitle={`Edit workout for ${currentDay.toLocaleDateString(
                "en-GB"
              )}`}
            />
            <EditWorkoutModal closeModal={closeEditModal} />
          </LayoutForModal>
        </Modal>
      </section>
    </>
  );
}

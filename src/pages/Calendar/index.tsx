import classes from "./Calendar.module.css";
import { useContext, useRef, useState } from "react";
import CalendarHeader from "../../components/Calendar/Header";
import DayPicker from "../../components/Calendar/DayPicker";
import CreateWorkoutModal from "../../components/Calendar/WorkoutModalContent/Create";
import type { CalendarDay } from "../../Data/Calendar/types";
import type { ModalRef } from "../../components/Modal";
import Modal from "../../components/Modal";
import WorkoutHeader from "../../components/Calendar/WorkoutModalContent/Header";
import LayoutForModal from "../../components/Modal/Layout";
import EditWorkoutModal from "../../components/Calendar/WorkoutModalContent/Edit";
import { WorkoutContext } from "../../Context/WorkoutContext";
import WorkoutsForDay from "../../components/Calendar/WorkoutsForDay";

export default function Calendar() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDay, setCurrentDay] = useState(new Date());
  const [workoutTitle, setWorkoutTitle] = useState("");

  const openCreateModalRef = useRef<ModalRef>(null);
  const openEditModalRef = useRef<ModalRef>(null);

  const { allWorkouts } = useContext(WorkoutContext);

  const currentDate = `${currentDay.getDate()}_${
    currentDay.getMonth() + 1
  }_${currentDay.getFullYear()}`;
  const dateHasWorkout = allWorkouts[currentDate];

  const changeCurrentDay = (day: CalendarDay) => {
    const newDate = new Date(day.year, day.month, day.number);

    const selectedDay = `${newDate.getDate()}_${
      newDate.getMonth() + 1
    }_${newDate.getFullYear()}`;
    setCurrentDay(newDate);

    if (!allWorkouts[selectedDay]) {
      console.log(selectedDay, "Create Modal is open");
      openCreateModalRef.current?.open();
    }
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

  const openCreateModal = () => {
    if (openCreateModalRef.current) {
      openCreateModalRef.current.open();
    }
  };

  const closeCreateModal = () => {
    if (openCreateModalRef.current) {
      openCreateModalRef.current.close();
    }
  };

  /*const openEditModal = () => {
    if (openEditModalRef.current) {
      openEditModalRef.current.open();
    }
  };*/

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

        <DayPicker
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
              currentDate={currentDate}
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

        {dateHasWorkout && (
          <WorkoutsForDay
            openCreateModal={openCreateModal}
            workouts={dateHasWorkout}
          />
        )}
      </section>
    </>
  );
}

export interface CalendarHeaderProps {
  currentDay: Date;
  previousMonth: () => void;
  nextMonth: () => void;
}

export interface CalendarComponentProps {
  currentDay: Date;
  changeCurrentDay: (day: CalendarDay) => void;
}

export interface CalendarDay {
  currentMonth: boolean;
  date: Date;
  month: number;
  number: number;
  selected: boolean;
  year: number;
}

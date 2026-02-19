//vjezba
export interface ExerciseProps {
  id: number;
  name: string;
  categoryId: number;
  category: string;
  subExercise: number | null;
  picture: string;
  note: string;

  sets: number;
  reps: number;
  weight: string;
  work: number;
  rest: number;
  hasWeight: boolean;
}

//trening
export interface WorkoutProps {
  id: string;
  title: string;
  exercises: ExerciseProps[];
  category: string;
  date: string;
  //picture: string;
}

//treninzi za jedan datum
export interface WorkoutsForDateProps {
  workout: WorkoutProps[];
}

//svi trennzi
export interface AllWorkouts {
  [date: string]: WorkoutsForDateProps;
}

//za context
export interface WorkoutContextProps {
  allWorkouts: AllWorkouts;
  workoutDetails: WorkoutProps | null;
  createWorkout: (currentDate: string, workouts: WorkoutsForDateProps) => void;
  deleteWorkout: (currentDate: string, id: string) => void;
  changeWorkout: (currentDate: string, updatedWorkout: WorkoutProps) => void;
  addWorkoutToContext: (workout: WorkoutProps) => void;
}

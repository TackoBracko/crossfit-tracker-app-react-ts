export interface Metrics {
  sets: string;
  reps: string;
  weight: string;
  work: string;
  rest: string;
}

export interface NoteProps {
  name: string;
  sets: number;
  reps: number;
  weight: string;
  work: number;
  rest: number;
  hasWeight: boolean;
}

export interface ExerciseInWorkoutProps {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: string;
  work: number;
  rest: number;
  hasWeight: boolean;
  note: string;
}

export interface ExerciseInfo {
  id: number;
  name: string;
  categoryId: number;
  category: string;
  subExercise: number | null;
  picture: string;
  hasWeight: boolean;
}

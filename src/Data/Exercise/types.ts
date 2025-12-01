export interface Category {
  id: number;
  title: string;
  icon: string;
  categoryDescription: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  picture: string;
  video: string;
  hasWeight: boolean;
  subExercises?: SubExercise[];
}

export interface SubExercise {
  id: number;
  name: string;
  description: string;
  picture: string;
  video: string;
  hasWeight: boolean;
}

export interface Category {
  id: number;
  title: string;
  icon: string;
  categoryDescription: string;
  exercise: [];
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  picture: string;
  video: string;
  hasWeight: string;
  subExercise?: [];
}

export interface SubExercise {
  id: number;
  name: string;
  description: string;
  picture: string;
  video: string;
  hasWeight: boolean;
}

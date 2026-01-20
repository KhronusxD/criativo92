export interface QuizAnswer {
  questionId: number;
  answer: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
}

export type AppState = 'landing' | 'quiz' | 'results';
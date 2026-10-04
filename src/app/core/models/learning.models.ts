export type SectionKind =
  | 'communication' | 'reading' | 'vocabulary' | 'spelling'
  | 'grammar' | 'literature' | 'writing' | 'media' | 'review';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface TheoryBlock {
  type: 'text' | 'important' | 'example' | 'list' | 'tip';
  title?: string;
  text?: string;
  items?: string[];
}

export interface Answer {
  id: string;
  text: string;
  correct: boolean;
  emoji?: string;
}

export interface Question {
  id: string;
  question: string;
  difficulty: Difficulty;
  points: number;
  answers: Answer[];
  explanation: string;
  hint?: string;
}

export interface LearningSection {
  id: string;
  title: string;
  subtitle: string;
  kind: SectionKind;
  emoji: string;
  theory: TheoryBlock[];
  questions: Question[];
}

export interface Topic {
  id: string;
  order: number;
  title: string;
  description: string;
  emoji: string;
  sections: LearningSection[];
}

export interface SectionProgress {
  topicId: string;
  sectionId: string;
  bestScore: number;
  attempts: number;
  completed: boolean;
}

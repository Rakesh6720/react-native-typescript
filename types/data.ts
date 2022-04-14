export interface Workout {
  slug: string;
  name: string;
  duration: number;
  difficulty: Difficulty;
  sequence: Sequence[];
}

export type Difficulty = "easy" | "normal" | "hard";

export type SequenceType = "exercise" | "stretch" | "break";
export interface Sequence {
  slug: string;
  name: string;
  type: SequenceType;
  reps?: number;
  duration: number;
}

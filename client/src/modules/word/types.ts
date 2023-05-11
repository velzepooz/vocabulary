export type Word = {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  word: string;
  transcription: string | null;
  meaning: string;
  comment: string | null;
};

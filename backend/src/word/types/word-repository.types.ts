import { IDIContainer } from '../../di-container';

export type Word = {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  word: string;
  transcription: string;
  meaning: string;
  comment: string;
};

export type Deps = {
  db: IDIContainer['db'];
};

export type CreateWordData = Pick<Word, 'word' | 'meaning'> &
  Partial<Pick<Word, 'comment' | 'transcription'>>;

export type FindAllParamsType = {
  search?: string;
  cursor?: number;
  take?: number;
};

export interface IWordRepository {
  create(data: CreateWordData): Promise<Word>;
  findAll(params: FindAllParamsType): Promise<Word[]>;
  deleteOne(id: number): Promise<void>;
}

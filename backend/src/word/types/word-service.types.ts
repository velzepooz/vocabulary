import { CreateWordData, IWordRepository, Word } from './word-repository.types';

export type Deps = {
  wordRepository: IWordRepository;
};

export type GetAllParamsType = {
  search: string;
};

export interface IWordService {
  createWord(data: CreateWordData): Promise<Word>;
  getAll(params: GetAllParamsType): Promise<Word[]>;
  deleteWord(id: number): Promise<void>;
}

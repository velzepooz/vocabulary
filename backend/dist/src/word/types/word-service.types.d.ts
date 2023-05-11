import { CreateWordData, IWordRepository, Word } from './word-repository.types';
export type Deps = {
    wordRepository: IWordRepository;
};
export interface IWordService {
    createWord(data: CreateWordData): Promise<Word>;
    getAll(): Promise<Word[]>;
    deleteWord(id: number): Promise<void>;
}

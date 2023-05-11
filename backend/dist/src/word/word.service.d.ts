import { Deps, IWordService } from './types/word-service.types';
import { CreateWordData, Word } from './types/word-repository.types';
export declare class WordService implements IWordService {
    private readonly _wordRepository;
    constructor({ wordRepository }: Deps);
    createWord(data: CreateWordData): Promise<Word>;
    getAll(): Promise<Word[]>;
    deleteWord(id: number): Promise<void>;
}

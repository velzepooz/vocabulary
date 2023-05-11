import { CreateWordData, Deps, IWordRepository, Word } from './types/word-repository.types';
export declare class WordRepository implements IWordRepository {
    private readonly _db;
    constructor({ db }: Deps);
    create({ comment, word, transcription, meaning, }: CreateWordData): Promise<Word>;
    getAll(): Promise<Word[]>;
    deleteOne(id: number): Promise<void>;
}

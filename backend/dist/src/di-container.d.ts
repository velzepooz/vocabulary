import { Pool } from 'pg';
import { IWordRepository } from './word/types/word-repository.types';
import { IWordService } from './word/types/word-service.types';
export interface IDIContainer {
    db: Pool;
    wordRepository: IWordRepository;
    wordService: IWordService;
}
declare const _default: IDIContainer;
export default _default;

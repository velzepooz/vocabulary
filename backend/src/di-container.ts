import diContainer from 'true-di';
import { Pool } from 'pg';
import { config } from './config';
import { initDb } from './db';
import { WordRepository } from './word/word.repository';
import { IWordRepository } from './word/types/word-repository.types';
import { WordService } from './word/word.service';
import { IWordService } from './word/types/word-service.types';

export interface IDIContainer {
  db: Pool;
  wordRepository: IWordRepository;
  wordService: IWordService;
}

export default diContainer<IDIContainer>({
  db: () => initDb(config.db),
  wordRepository: ({ db }) => new WordRepository({ db }),
  wordService: ({ wordRepository }) => new WordService({ wordRepository }),
});

import diContainer from 'true-di';
import { Pool } from 'pg';
import { config } from './config';
import { initDb } from './db';
import { WordRepository } from './word/word.repository';
import { IWordRepository } from './word/types/word-repository.types';
import { WordService } from './word/word.service';
import { IWordService } from './word/types/word-service.types';
import { initLogger, Logger } from './logger';

export interface IDIContainer {
  logger: Logger;
  db: Pool;
  wordRepository: IWordRepository;
  wordService: IWordService;
}

export default diContainer<IDIContainer>({
  logger: () => initLogger(),
  db: () => initDb(config.db),
  wordRepository: ({ db }) => new WordRepository({ db }),
  wordService: ({ wordRepository }) => new WordService({ wordRepository }),
});

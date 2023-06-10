import { Word } from '../../src/word/types/word-repository.types';
import { faker } from '../utils/faker';
import { initDb } from '../../src/db';
import { config } from '../../src/config';

export const createWord = async ({
  word = faker.word(),
  transcription,
  meaning = faker.word(),
  comment = faker.word(),
}: Omit<Partial<Word>, 'id'>): Promise<Word> => {
  const db = initDb(config.db);

  const createdWord = (
    await db.query(
      'INSERT INTO word (word, transcription, meaning, comment) VALUES ($1, $2, $3, $4) RETURNING *;',
      [word, transcription, meaning, comment],
    )
  ).rows[0];

  await db.end();

  return createdWord;
};

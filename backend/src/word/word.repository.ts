import {
  CreateWordData,
  Deps,
  FindAllParamsType,
  IWordRepository,
  Word,
} from './types/word-repository.types';

export class WordRepository implements IWordRepository {
  private readonly _db;

  constructor({ db }: Deps) {
    this._db = db;
  }

  async create({
    comment,
    word,
    transcription,
    meaning,
  }: CreateWordData): Promise<Word> {
    return (
      await this._db.query(
        'INSERT INTO word (word, transcription, meaning, comment) VALUES ($1, $2, $3, $4) RETURNING *;',
        [word, transcription, meaning, comment],
      )
    ).rows[0];
  }

  async findAll({ search }: FindAllParamsType): Promise<Word[]> {
    return (
      await this._db.query(
        `
        SELECT * 
        FROM word LOWER(manufacturer) 
        WHERE LOWER(word) LIKE LOWER(CONCAT('%', $1::text, '%')) OR LOWER(meaning) LIKE LOWER(CONCAT('%', $1::text, '%'))
        ORDER BY "createdDate" DESC;`,
        [search],
      )
    ).rows;
  }

  async deleteOne(id: number): Promise<void> {
    await this._db.query('DELETE FROM word WHERE id=$1;', [id]);
  }
}

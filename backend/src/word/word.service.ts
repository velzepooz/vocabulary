import {
  Deps,
  GetAllParamsType,
  IWordService,
} from './types/word-service.types';
import {
  CreateWordData,
  IWordRepository,
  Word,
} from './types/word-repository.types';

export class WordService implements IWordService {
  private readonly _wordRepository: IWordRepository;

  constructor({ wordRepository }: Deps) {
    this._wordRepository = wordRepository;
  }

  async createWord(data: CreateWordData): Promise<Word> {
    return await this._wordRepository.create(data);
  }

  async getAll(data: GetAllParamsType): Promise<Word[]> {
    return await this._wordRepository.findAll(data);
  }

  async deleteWord(id: number): Promise<void> {
    return await this._wordRepository.deleteOne(id);
  }
}

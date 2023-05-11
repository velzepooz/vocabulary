import { url } from '../../constants/apiUrl';
import type { HttpRequestError } from '../../utils/request';
import { makeHttpRequest } from '../../utils/request';

import type { Word } from './types';

export class WordService {
  static async getWordsList(): Promise<Word[] | HttpRequestError> {
    return await makeHttpRequest<Word[]>({
        url: `${url.mainApiUrl}/${url.word.main}`,
        options: {
          method: 'GET'
        }
      });
  }

  static async deleteWord(id: number): Promise<void | HttpRequestError> {
    return await makeHttpRequest<void>({
      url:`${url.mainApiUrl}/${url.word.main}/${id}`,
      options: {
        method: 'DELETE'
      }
    });
  }
}

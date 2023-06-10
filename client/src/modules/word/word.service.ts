import { url } from '../../constants/apiUrl';
import type { HttpRequestError } from '../../utils/request';
import { makeHttpRequest } from '../../utils/request';

import type { Word } from './types';

export type createWordDataType = Pick<Word, 'word' | 'meaning' | 'comment'>;
export type getWordsListType = {
  search?: string;
  take?: number;
  cursor?: number | null;
};

export class WordService {
  static async getWordsList({search, take = 30, cursor = null}: getWordsListType): Promise<Word[] | HttpRequestError> {
    return await makeHttpRequest<Word[]>({
        url: `${url.mainApiUrl}/${url.word.main}?search=${search || ''}&take=${take}${cursor ? `&cursor=${cursor}` : ''}`,
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
  
  static async createWord(createData: createWordDataType): Promise<Word | HttpRequestError> {
    return await makeHttpRequest<Word>({
      url:`${url.mainApiUrl}/${url.word.main}/${url.word.create}`,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      },
      data: createData,
    });
  }
}

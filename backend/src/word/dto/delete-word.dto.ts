import { WordDto } from './word.dto';

export const DeleteWordDto = {
  type: 'object',
  properties: {
    id: WordDto.properties.id,
  },
};

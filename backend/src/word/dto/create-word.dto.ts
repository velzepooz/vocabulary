import { WordDto } from './word.dto';

export const CreateWordDto = {
  type: 'object',
  properties: {
    word: WordDto.properties.word,
    transcription: WordDto.properties.transcription,
    meaning: WordDto.properties.meaning,
    comment: WordDto.properties.comment,
  },
  required: ['word', 'meaning'],
};

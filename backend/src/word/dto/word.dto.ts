export const WordDto = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      minimum: 0,
    },
    word: {
      type: 'string',
      minLength: 1,
    },
    transcription: {
      type: ['string', 'null'],
      minLength: 1,
    },
    meaning: {
      type: 'string',
      minLength: 1,
    },
    comment: {
      type: ['string', 'null'],
      minLength: 1,
    },
  },
};

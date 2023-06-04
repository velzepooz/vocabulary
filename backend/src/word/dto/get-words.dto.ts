export const GetWordsDto = {
  type: 'object',
  properties: {
    search: {
      type: 'string',
    },
    cursor: {
      type: 'integer',
      minimum: 0,
    },
    take: {
      type: 'integer',
      minimum: 0,
      default: 10,
    },
  },
};

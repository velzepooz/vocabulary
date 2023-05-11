"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordDto = void 0;
exports.WordDto = {
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
            type: 'string',
            minLength: 1,
        },
        meaning: {
            type: 'string',
            minLength: 1,
        },
        comment: {
            type: 'string',
            minLength: 1,
        },
    },
};
//# sourceMappingURL=word.dto.js.map
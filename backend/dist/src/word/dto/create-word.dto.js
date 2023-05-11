"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWordDto = void 0;
const word_dto_1 = require("./word.dto");
exports.CreateWordDto = {
    type: 'object',
    properties: {
        word: word_dto_1.WordDto.properties.word,
        transcription: word_dto_1.WordDto.properties.transcription,
        meaning: word_dto_1.WordDto.properties.meaning,
        comment: word_dto_1.WordDto.properties.comment,
    },
    required: ['word', 'meaning'],
};
//# sourceMappingURL=create-word.dto.js.map
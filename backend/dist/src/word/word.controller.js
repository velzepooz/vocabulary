"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWordControllers = void 0;
const create_word_dto_1 = require("./dto/create-word.dto");
const delete_word_dto_1 = require("./dto/delete-word.dto");
const initWordControllers = (container) => {
    const urlPrefix = '/word';
    const { wordService } = container;
    return [
        {
            method: 'POST',
            schema: {
                body: create_word_dto_1.CreateWordDto,
            },
            url: `${urlPrefix}/create`,
            handler: async (request, reply) => {
                const data = request.body;
                const word = await wordService.createWord(data);
                reply.code(201).send(word);
            },
        },
        {
            method: 'GET',
            url: `${urlPrefix}`,
            handler: async (request, reply) => {
                const words = await wordService.getAll();
                reply.code(200).send(words);
            },
        },
        {
            method: 'DELETE',
            schema: {
                params: delete_word_dto_1.DeleteWordDto,
            },
            url: `${urlPrefix}/:id`,
            handler: async (request, reply) => {
                const { id } = request.params;
                await wordService.deleteWord(id);
                reply.code(200).send({});
            },
        },
    ];
};
exports.initWordControllers = initWordControllers;
//# sourceMappingURL=word.controller.js.map
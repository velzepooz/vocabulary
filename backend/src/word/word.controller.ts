import { FastifyRequest, RouteOptions } from 'fastify';
import { IDIContainer } from '../di-container';
import { CreateWordDto } from './dto/create-word.dto';
import { CreateWordData } from './types/word-repository.types';
import { DeleteWordDto } from './dto/delete-word.dto';

export const initWordControllers = (
  container: IDIContainer,
): RouteOptions[] => {
  const urlPrefix = '/word';
  const { wordService } = container;

  return [
    {
      method: 'POST',
      schema: {
        body: CreateWordDto,
      },
      url: `${urlPrefix}/create`,
      handler: async (
        request: FastifyRequest<{ Body: CreateWordData }>,
        reply,
      ) => {
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
        params: DeleteWordDto,
      },
      url: `${urlPrefix}/:id`,
      handler: async (
        request: FastifyRequest<{ Params: { id: number } }>,
        reply,
      ) => {
        const { id } = request.params;

        await wordService.deleteWord(id);

        reply.code(200).send({});
      },
    },
  ];
};

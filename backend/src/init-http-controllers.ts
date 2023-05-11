import { RouteOptions } from 'fastify';
import { initWordControllers } from './word/word.controller';
import { IDIContainer } from './di-container';

export const initControllers = (container: IDIContainer): RouteOptions[] => {
  const wordRoutes = initWordControllers(container);

  return [...wordRoutes];
};

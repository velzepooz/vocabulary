import fastify from 'fastify';
import fastifyCookie from '@fastify/cookie';
import cors from '@fastify/cors';
import { initControllers } from './init-http-controllers';
import diContainer from './di-container';

/**
 * Create fastify app and create http routes for app
 */
export const buildFastifyApp = (opts = { logger: true }) => {
  const app = fastify(opts);

  app.register(fastifyCookie);
  app.register(cors);
  // app.setErrorHandler(httpErrorHandler);

  const routes = initControllers(diContainer);

  for (const route of routes) {
    app.route(route);
  }

  return app;
};

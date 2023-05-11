import * as process from 'process';
import { buildFastifyApp } from './build-fastify-app';
import { config } from './config';

(async () => {
  const server = buildFastifyApp();

  try {
    await server.listen(config.server);
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }
})();

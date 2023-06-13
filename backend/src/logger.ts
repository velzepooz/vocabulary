import logger from 'pino';

export type Logger = logger.BaseLogger;

export const initLogger = (): Logger => logger();

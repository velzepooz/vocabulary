import dotenv from 'dotenv';
import { PoolConfig } from 'pg';

dotenv.config();

export type Config = {
  server: {
    host: string;
    port: number;
  };
  db: PoolConfig;
};

export const config: Config = {
  server: {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT ? +process.env.PORT : 3000,
  },
  db: {
    host: process.env.POSTGRES_HOST || '127.0.0.1',
    port: process.env.POSTGRES_PORT ? +process.env.POSTGRES_PORT : 5432,
    database: process.env.POSTGRES_DATABASE_NAME || '',
    user: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
  },
};

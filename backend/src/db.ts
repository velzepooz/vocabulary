import { Pool } from 'pg';
import { Config } from './config';

export const initDb = (config: Config['db']): Pool => new Pool(config);

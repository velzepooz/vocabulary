import { Pool } from 'pg';
import { Config } from './config';
export declare const initDb: (config: Config['db']) => Pool;

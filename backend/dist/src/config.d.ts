import { PoolConfig } from 'pg';
export type Config = {
    server: {
        host: string;
        port: number;
    };
    db: PoolConfig;
};
export declare const config: Config;

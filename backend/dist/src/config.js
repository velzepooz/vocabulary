"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
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
//# sourceMappingURL=config.js.map
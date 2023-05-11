"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDb = void 0;
const pg_1 = require("pg");
const initDb = (config) => new pg_1.Pool(config);
exports.initDb = initDb;
//# sourceMappingURL=db.js.map
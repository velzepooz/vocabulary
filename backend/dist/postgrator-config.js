"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const config_1 = require("./src/config");
fs_1.default.writeFileSync('.postgratorrc.json', JSON.stringify(config_1.config.db, null, 2));
//# sourceMappingURL=postgrator-config.js.map
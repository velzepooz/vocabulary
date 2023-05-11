"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const true_di_1 = __importDefault(require("true-di"));
const config_1 = require("./config");
const db_1 = require("./db");
const word_repository_1 = require("./word/word.repository");
const word_service_1 = require("./word/word.service");
exports.default = (0, true_di_1.default)({
    db: () => (0, db_1.initDb)(config_1.config.db),
    wordRepository: ({ db }) => new word_repository_1.WordRepository({ db }),
    wordService: ({ wordRepository }) => new word_service_1.WordService({ wordRepository }),
});
//# sourceMappingURL=di-container.js.map
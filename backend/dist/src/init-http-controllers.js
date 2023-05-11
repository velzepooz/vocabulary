"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initControllers = void 0;
const word_controller_1 = require("./word/word.controller");
const initControllers = (container) => {
    const wordRoutes = (0, word_controller_1.initWordControllers)(container);
    return [...wordRoutes];
};
exports.initControllers = initControllers;
//# sourceMappingURL=init-http-controllers.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFastifyApp = void 0;
const fastify_1 = __importDefault(require("fastify"));
const cookie_1 = __importDefault(require("@fastify/cookie"));
const cors_1 = __importDefault(require("@fastify/cors"));
const init_http_controllers_1 = require("./init-http-controllers");
const di_container_1 = __importDefault(require("./di-container"));
const buildFastifyApp = (opts = { logger: true }) => {
    const app = (0, fastify_1.default)(opts);
    app.register(cookie_1.default);
    app.register(cors_1.default);
    const routes = (0, init_http_controllers_1.initControllers)(di_container_1.default);
    for (const route of routes) {
        app.route(route);
    }
    return app;
};
exports.buildFastifyApp = buildFastifyApp;
//# sourceMappingURL=build-fastify-app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordService = void 0;
class WordService {
    _wordRepository;
    constructor({ wordRepository }) {
        this._wordRepository = wordRepository;
    }
    async createWord(data) {
        return await this._wordRepository.create(data);
    }
    async getAll() {
        return await this._wordRepository.getAll();
    }
    async deleteWord(id) {
        return await this._wordRepository.deleteOne(id);
    }
}
exports.WordService = WordService;
//# sourceMappingURL=word.service.js.map
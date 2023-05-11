"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordRepository = void 0;
class WordRepository {
    _db;
    constructor({ db }) {
        this._db = db;
    }
    async create({ comment, word, transcription, meaning, }) {
        return (await this._db.query('INSERT INTO word (word, transcription, meaning, comment) VALUES ($1, $2, $3, $4) RETURNING *;', [word, transcription, meaning, comment])).rows[0];
    }
    async getAll() {
        return (await this._db.query('SELECT * FROM word;')).rows;
    }
    async deleteOne(id) {
        await this._db.query('DELETE FROM word WHERE id=$1;', [id]);
    }
}
exports.WordRepository = WordRepository;
//# sourceMappingURL=word.repository.js.map
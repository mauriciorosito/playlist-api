// Importa a conexão pool com o banco de dados
const db = require('../config/database');

class SongModel {
    // Busca todas as músicas
    static async findAll() {
        const [rows] = await db.query('SELECT * FROM songs');
        return rows;
    }

    // Cria uma nova música
    static async create(song) {
        const { title, artist, album, year } = song;
        const [result] = await db.query('INSERT INTO songs (title, artist, album, year) VALUES (?, ?, ?, ?)', [title, artist, album, year]);
        return result.insertId; // Retorna o ID da música criada
    }

    // Atualiza uma música existente
    static async update(id, song) {
        const { title, artist, album, year } = song;
        const [result] = await db.query('UPDATE songs SET title = ?, artist = ?, album = ?, year = ? WHERE id = ?', [title, artist, album, year, id]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }

    // Deleta uma música pelo ID
    static async delete(id) {
        const [result] = await db.query('DELETE FROM songs WHERE id = ?', [id]);
        return result.affectedRows; // Retorna o número de linhas afetadas
    }
}

module.exports = SongModel;

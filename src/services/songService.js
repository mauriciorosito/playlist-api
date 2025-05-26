// Importa o Model responsável pelo acesso ao banco de dados (tabela songs)
const SongModel = require("../models/songModel");

class SongService {
    // Busca todas as músicas cadastradas
    static async getAllSongs() {
        return await SongModel.findAll();
    }

    // Cria uma nova música
    static async createSong(song) {
        return await SongModel.create(song); // Cria a nova música
    }

    // Atualiza informações de uma música existente
    static async updateSong(id, song) {
        const updatedRows = await SongModel.update(id, song);
        if (updatedRows === 0) {
            throw new Error("Música não encontrada."); // Caso nenhuma música tenha sido atualizada
        }
        return updatedRows;
    }

    // Deleta uma música pelo ID
    static async deleteSong(id) {
        const deletedRows = await SongModel.delete(id);
        if (deletedRows === 0) {
            throw new Error("Música não encontrada."); // Caso nenhuma música tenha sido deletada
        }
        return deletedRows;
    }
}

module.exports = SongService;

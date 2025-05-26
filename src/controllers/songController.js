// Importa o serviço que contém a lógica de negócio para manipular músicas
const SongService = require('../services/songService');

class SongController {
    // Método para listar todas as músicas
    static async getAll(req, res) {
        try {
            const songs = await SongService.getAllSongs(); // Chama o service para buscar músicas
            res.json(songs); // Retorna a lista em formato JSON
        } catch (error) {
            res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
        }
    }

    // Método para criar uma nova música
    static async create(req, res) {
        try {
            const id = await SongService.createSong(req.body); // Chama o service para criar uma música
            res.status(201).json({ message: 'Música criada com sucesso.', id }); // Retorna status 201 (criado) e o ID
        } catch (error) {
            res.status(400).json({ error: error.message }); // Em caso de erro de validação, retorna status 400
        }
    }

    // Método para atualizar uma música existente
    static async update(req, res) {
        try {
            const id = req.params.id; // Pega o ID da URL
            await SongService.updateSong(id, req.body); // Chama o service para atualizar
            res.json({ message: 'Música atualizada com sucesso.' });
        } catch (error) {


            res.status(400).json({ error: error.message }); // Retorna erro se não encontrar ou problema nos dados
        }
    }

    // Método para deletar uma música
    static async delete(req, res) {
        try {
            const id = req.params.id; // Pega o ID da URL
            await SongService.deleteSong(id); // Chama o service para deletar
            res.json({ message: 'Música deletada com sucesso.' });
        } catch (error) {
            res.status(400).json({ error: error.message }); // Retorna erro se usuário não encontrado
        }
    }
}

module.exports = SongController;
// Exporta o Controller para ser usado nas rotas

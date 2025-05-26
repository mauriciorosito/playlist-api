const express = require('express');
const SongController = require('../controllers/songController');
const router = express.Router();

// Define as rotas sobre as músicas
router.get('/', SongController.getAll);
router.post('/', SongController.create);
router.put('/:id', SongController.update);
router.delete('/:id', SongController.delete);

module.exports = router;

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Importa as rotas relacionadas às músicas
const songRoutes = require('./routes/songRoutes');

// Cria uma instância do aplicativo Express
const app = express();

// Middlewares globais
app.use(cors());              // Habilita o CORS em todas as rotas da aplicação
app.use(helmet());            // Adiciona proteção automática contra vulnerabilidades HTTP  
app.use(express.json());      // Permite que o servidor interprete requisições com corpo em formato JSON  

// Rotas da aplicação
app.use('/songs', songRoutes);
// Define que todas as requisições iniciadas com /songs serão encaminhadas para o arquivo songRoutes

module.exports = app;
// Exporta a aplicação configurada para ser utilizada pelo servidor (server.js)

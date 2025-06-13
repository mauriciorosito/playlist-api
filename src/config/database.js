const mysql = require("mysql2/promise");
require("dotenv").config();


// Cria a conexão com o banco
const pool = mysql.createPool({
  host: process.env.DB_HOST,         // Host do banco de dados
  user: process.env.DB_USER,         // Usuário do banco de dados
  port: process.env.DB_PORT || 3306, // Porta do banco de dados
  password: process.env.DB_PASSWORD, // Senha correspondente
  database: process.env.DB_DATABASE, // Nome do banco (ex: projeto_api_db)
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
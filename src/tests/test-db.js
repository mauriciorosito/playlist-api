const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

// 🔧 Configuração da conexão com o banco Railway
const pool = mysql.createPool({
  host: 'tramway.proxy.rlwy.net',        // Ex: containers-us-west-143.railway.app
  user: 'root',             // Ex: root
  password: 'gxAfXyIUDLAIeCNBzYLuNDnSPrNzyxvZ',
  database: 'railway',
  port: 24851                       // Ou a porta que o Railway fornecer
});

// 🚀 Rota para testar a conexão com o banco
app.get('/test-connection', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    res.json({
      status: 'Conectado com sucesso!',
      serverTime: rows[0].now
    });
  } catch (error) {
    console.error('Erro ao conectar com o banco:', error);
    res.status(500).json({
      status: 'Erro na conexão',
      error: error.message
    });
  }
});

// 🟢 Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

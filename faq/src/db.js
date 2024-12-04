// db.js (Archivo para la conexión con la base de datos)
const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log('Conexión exitosa a SQL Server');
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
  }
};

module.exports = { connectDB, sql };

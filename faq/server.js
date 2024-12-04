const express = require('express');
const sql = require('mssql'); // Asumiendo que usas SQL Server

const app = express();
app.use(express.json());

// Configuración de la conexión a la base de datos (ajusta según tus credenciales)
const config = {
  user: 'sa',
  password: 'samm',
  server: 'samm',
  database: 'dicError',
};

// Función para conectar a la base de datos
async function connectToDb() {
  try {
    await sql.connect(config);
    console.log('Conectado a la base de datos');
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
  }
}

// Endpoint para obtener los productos
app.get('/api/productos', async (req, res) => {
  try {
    const result = await sql.query('SELECT id, producto FROM producto');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error al obtener los productos:', err);
    res.status(500).send('Error en el servidor');
  }
});

// Endpoint para registrar una nueva FAQ
app.post('/api/registrar', async (req, res) => {
  const { error, erro_codigo, descripcion, id_producto, solucion, link_video } = req.body;

  try {
    await sql.query(`
      INSERT INTO [dbo].[faq]
      (error, erro_codigo, descripcion, id_producto, solucion, link_video)
      VALUES (@error, @erro_codigo, @descripcion, @id_producto, @solucion, @link_video)
    `, {
      error,
      erro_codigo,
      descripcion,
      id_producto,
      solucion,
      link_video,
    });
    res.status(201).send('FAQ registrada exitosamente');
  } catch (err) {
    console.error('Error al registrar la FAQ:', err);
    res.status(500).send('Error en el servidor');
  }
});

// Conectar a la base de datos al iniciar el servidor
connectToDb();

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
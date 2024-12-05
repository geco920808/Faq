const config = {
  server: '127.0.0.1', // Cambia por tu servidor
  authentication: {
    type: 'default',
    options: {
      userName: 'sa', // Usuario de la base de datos
      password: 'samm' // Contraseña de la base de datos
    }
  },
  options: {
    encrypt: false, // Cambia a true si usas Azure
    database: 'dicError', // Nombre de la base de datos
    port: 1433
  }
};

module.exports = config;

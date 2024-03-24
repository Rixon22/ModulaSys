const mysql = require('mysql');

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Cambia esto si tu base de datos no está en localhost
  user: 'root',
  password: '',
  database: 'modulasys'
});

// Conectar a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos', error);
    throw error;
  }
  console.log('Conexión establecida a la base de datos MySQL');
});

module.exports = connection;

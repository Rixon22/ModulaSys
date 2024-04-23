const prompt = require('prompt-sync')();
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

const pt = prompt({ sigint: true });

console.log('Bienvenido al inicializador de la base de datos!');

const initDB = async (queries) => {
  try {
    const connectionInit = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      port: 3305 // Cambia el puerto si es necesario
    });
    
    const [result, fields] = await connectionInit.execute(queries);
    console.log(result);
    await connectionInit.end();
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
};

const fillAll = async () => {
  try {
    const query = fs.readFileSync(path.join('init_db', 'fill_db.sql')).toString();
    const connectionInit = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'modulasys',
      port: 3305 // Cambia el puerto si es necesario
    });

    await connectionInit.execute(query);
    console.log("Tarea en 'user' completada");
    await connectionInit.end();
  } catch (error) {
    console.error('Error al llenar la base de datos:', error);
  }
};

(async () => {
  try {
    const queries = fs.readFileSync(path.join('init_db', 'init_db.sql')).toString();
    await initDB(queries);

    await fillAll();

    console.log('¡Listo! Usa Ctrl + C para salir.');
  } catch (e) {
    console.error('Error:', e);

    if (e.code === 'ENOENT') {
      console.error('Error: Archivo no encontrado:', e.path);
    } else if (e.errno === 1045) {
      console.error('Error de acceso a la base de datos: credenciales incorrectas.');
    }
  }
})();

import prompt from 'prompt-sync';
import { connection } from '../src/database/connection/connection.js';
import fs from 'fs';

const pt = prompt({ sigint: true });

const initDB = async (queries) => {
  const xd = await connection.query(queries);
  console.log(xd);
};

const fillAll = async () => {
    const query = fs
      .readFileSync(process.cwd() + '/fill_db.sql')
      .toString();
    await connection.query(query);
    console.log("task on 'user' done");
};

try {
    const queries = fs
      .readFileSync(process.cwd() + '/init_db.sql')
      .toString();
    await initDB(queries);
  
    const opt = pt('llenar la BD de usuarios? (y/n)');
    if (opt === 'y') await fillAll();
  
    console.log('DONE! use ctrl + c to get out from here');
  } catch (e) {
    console.log(e);
  
    if (e.errno === 1045) { //wut? access denied? 
      console.log(
        '!!!!!!!!!!!!!!!!####################!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n\n'
      );
      console.error('HEY!');
      console.error('HEY! LISTEN!');
      console.log(
        'Recuerda alctualizar el archivo Variables de Entorno.js con tus credenciales de MySQL!!\n\n'
      );
    }
}
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost:3305',
    user: 'root',
    password: '',
    database: 'modulasys'
});

module.exports = connection;
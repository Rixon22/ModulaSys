const connection = require('../models/db');
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) => {
    const { username, password } = req.body;
    const consult = 'SELECT * FROM users WHERE userid = ? AND password = ?';

    try {
        connection.query(consult, [username, password], (err, result) => {
            if (err) {
                console.error('Error en la consulta SQL:', err);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            if (result.length > 0) {
                const token = jwt.sign({ username }, "Stack", {
                    expiresIn: '3m'
                });
                return res.status(200).json({ token });
            } else {
                console.log('Usuario o contraseña incorrectos');
                return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
            }
        });
    } catch (error) {
        console.error('Error en la función login:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

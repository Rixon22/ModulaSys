const connection = require('../models/db')

module.exports.getEmployees = (req, res) =>{
    const consult = 'SELECT * FROM empleados';

    try {
        connection.query(consult, (err, results)=>{
            console.log(results)
            res.json(results)
        });
    } catch (e) {

    }
}

// Agregar un nuevo empleado
module.exports.addEmployee = (req, res) => {
    const { nombre, apellido, direccion, foto } = req.body;

    const insertQuery = 'INSERT INTO empleados (nombreEmpleado, apellidEmpleado, direaccionEmpleado, urlFotoEmpleado) VALUES (?, ?, ?, ?)';
    
    try {
        connection.query(insertQuery, [nombre, apellido, direccion, foto], (err, result) => {
            if (err) {
                console.error('Error:', err);
                res.status(500).json({ error: 'Error al agregar el empleado' });
                return;
            }
            console.log('Empleado agregado:', result.insertId);
            res.status(201).json({ message: 'Empleado agregado correctamente', id: result.insertId });
        });
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Error al agregar el empleado' });
    }
}

// Editar un empleado
module.exports.editEmployee = (req, res) => {
    const { id, nombre, apellido, direccion, foto } = req.body;

    const updateQuery = 'UPDATE empleados SET nombreEmpleado = ?, apellidEmpleado = ?, direaccionEmpleado = ?, urlFotoEmpleado = ? WHERE idempleado = ?';
    
    try {
        connection.query(updateQuery, [nombre, apellido, direccion, foto, id], (err, result) => {
            if (err) {
                console.error('Error:', err);
                res.status(500).json({ error: 'Error al editar el empleado' });
                return;
            }
            console.log('Empleado editado:', id);
            res.status(200).json({ message: 'Empleado editado correctamente' });
        });
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Error al editar el empleado' });
    }
}

// Eliminar un empleado
module.exports.deleteEmployee = (req, res) => {
    const { id } = req.body;

    const deleteQuery = 'DELETE FROM empleados WHERE idempleado = ?';
    
    try {
        connection.query(deleteQuery, [id], (err, result) => {
            if (err) {
                console.error('Error:', err);
                res.status(500).json({ error: 'Error al eliminar el empleado' });
                return;
            }
            console.log('Empleado eliminado:', id);
            res.status(200).json({ message: 'Empleado eliminado correctamente' });
        });
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Error al eliminar el empleado' });
    }
}
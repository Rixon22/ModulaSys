const connection = require('../models/db')

// Traer todas las ventas
module.exports.getSales = (req, res) =>{
    const consult = `
    SELECT v.idVenta, e.nombreEmpleado, i.nombreProducto, v.cantidadVendida, v.fecha 
    FROM ventas v
    INNER JOIN empleados e ON v.empleados_idempleado = e.idempleado
    INNER JOIN inventarios i ON v.inventarios_idinventarios = i.idinventarios
`;
    try {
        connection.query(consult, (err, results)=>{
            console.log(results)
            res.json(results)
        });
    } catch (e) {
        console.error('Error al obtener las ventas:', error);
        res.status(500).json({ message: 'Error al obtener las ventas' });
    }
}

// Agregar venta
module.exports.addSale = (req, res) => {
    const { empleadoId, productoId, cantidad, fecha } = req.body;
    const query = 'INSERT INTO ventas (empleados_idempleado, inventarios_idinventarios, cantidadVendida, fecha) VALUES (?, ?, ?, ?)';
    const values = [empleadoId, productoId, cantidad, fecha];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error al agregar la venta:', err);
            res.status(500).json({ error: 'Error al agregar la venta' });
            return;
        }
        console.log('Venta agregada correctamente');
        res.status(200).json({ message: 'Venta agregada correctamente' });
    });
};
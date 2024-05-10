const connection = require('../models/db')

module.exports.getProducts = (req, res) =>{
    const consult = 'SELECT * FROM inventarios';

    try {
        connection.query(consult, (err, results)=>{
            console.log(results)
            res.json(results)
        });
    } catch (e) {

    }
}

// Agragar producto
module.exports.addProduct = (req, res) => {
    const { nombre, existencia, precio, foto } = req.body;
    const query = 'INSERT INTO inventarios (nombreProducto, existenciaProducto, precioProducto, urlFotoProducto) VALUES (?, ?, ?, ?)';
    const values = [nombre, existencia, precio, foto];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error al agregar el producto:', err);
            res.status(500).json({ error: 'Error al agregar el producto' });
            return;
        }
        console.log('Producto agregado correctamente');
        res.status(200).json({ message: 'Producto agregado correctamente' });
    });
};

// Editar producto
module.exports.editProduct = (req, res) => {
    const { nombre, existencia, precio, foto, id } = req.body;
    const query = 'UPDATE inventarios SET nombreProducto = ?, existenciaProducto = ?, precioProducto = ?, urlFotoProducto = ? WHERE idinventarios = ?';
    const values = [nombre, existencia, precio, foto, id];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error al editar el producto:', err);
            res.status(500).json({ error: 'Error al editar el producto' });
            return;
        }
        console.log('Producto editado correctamente');
        console.log("Rows affected:", result.affectedRows);
        res.status(200).json({ message: 'Producto editado correctamente'});
    });
};

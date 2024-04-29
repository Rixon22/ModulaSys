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

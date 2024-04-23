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

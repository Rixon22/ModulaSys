const express = require('express');

const router = express.Router();
const { login } = require('../controllers/loginController')
const { ping } = require('../controllers/pingController')
const { getEmployees} = require('../controllers/employeesController')
const { getProducts } = require('../controllers/productController')

router.get('/ping', ping);
router.post('/login', login);
router.get('/employees', getEmployees);
router.get('/products', getProducts);

module.exports = router;
const express = require('express');

const router = express.Router();
const { login } = require('../controllers/loginController')
const { ping } = require('../controllers/pingController')
const { getEmployees, addEmployee, editEmployee, deleteEmployee} = require('../controllers/employeesController')
const { getProducts, addProduct, editProduct } = require('../controllers/productController')

router.get('/ping', ping);
router.post('/login', login);

// Employees
router.get('/employees', getEmployees);
router.post('/employees/add', addEmployee);
router.post('/employees/edit', editEmployee);
router.post('/employees/delete', deleteEmployee);

// Products
router.get('/products', getProducts);
router.post('/products/add', addProduct);
router.post('/products/edit', editProduct);

module.exports = router;
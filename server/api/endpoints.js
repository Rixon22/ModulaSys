const express = require('express');

const router = express.Router();
const { login } = require('../controllers/loginController')
const { ping } = require('../controllers/pingController')
const { getEmployees, addEmployee, editEmployee, deleteEmployee} = require('../controllers/employeesController')
const { getProducts, addProduct, editProduct } = require('../controllers/productController')
const { getSales, addSale } = require('../controllers/salesController')

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

// Sales
router.get('/sales', getSales);
router.post('/sales/add', addSale);

module.exports = router;
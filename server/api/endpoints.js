const express = require('express');
const router = express.Router();
const { login } = require('../controllers/loginController')
const { ping } = require('../controllers/pingController')
const { getEmployees} = require('../controllers/employeesController')

router.get('/ping', ping);
router.post('/login', login);
router.get('/employees', getEmployees);

module.exports = router;
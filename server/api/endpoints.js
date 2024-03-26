const express = require('express');
const router = express.Router();
const { login } = require('../controllers/loginController')
const { ping } = require('../controllers/pingController')

router.get('/ping', ping);
router.post('/login', login);

module.exports = router;
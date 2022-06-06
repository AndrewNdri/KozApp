const express = require('express');
const router = express.Router();
const {registerController} = require('../controllers/registerController');
const {loginController} = require('../controllers/loginController');


router.get('/register', registerController);
router.get('/login', loginController);

module.exports = router;
const express = require('express');
const router = express.Router();
const {createPostController} = require('../controllers/createPostController');

router.post('/', createPostController);

module.exports = router;
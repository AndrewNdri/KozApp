const express = require('express');
const router = express.Router();
const {createPostController} = require('../controllers/createPostController');
const {updatePostController} = require('../controllers/updatePostController');

router.post('/', createPostController);
router.put('/:id', updatePostController);

module.exports = router;
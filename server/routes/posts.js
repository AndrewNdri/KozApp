const express = require('express');
const router = express.Router();
const {createPostController} = require('../controllers/createPostController');
const {updatePostController} = require('../controllers/updatePostController');
const {deletePostController} = require('../controllers/deletePostController');

router.post('/', createPostController);
router.put('/:id', updatePostController);
router.delete('/:id', deletePostController);

module.exports = router;
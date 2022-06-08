const express = require('express');
const router = express.Router();
const {createPostController} = require('../controllers/createPostController');
const {updatePostController} = require('../controllers/updatePostController');
const {deletePostController} = require('../controllers/deletePostController');
const {likePostController} = require('../controllers/likePostController');

router.post('/', createPostController);
router.put('/:id', updatePostController);
router.delete('/:id', deletePostController);
router.put('/:id/like', likePostController);

module.exports = router;
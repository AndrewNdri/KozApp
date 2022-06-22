const express = require('express');
const router = express.Router();
const multer = require("multer");
const {createPostController} = require('../controllers/createPostController');
const {updatePostController} = require('../controllers/updatePostController');
const {deletePostController} = require('../controllers/deletePostController');
const {likePostController} = require('../controllers/likePostController');
const {getPostController} = require('../controllers/getPostController');
const {timelinePostsController} = require('../controllers/timelinePostsController');
const {userAllPostController} = require('../controllers/userAllPostController');
const {uploadController} = require('../controllers/uploadController');
const upload = multer();

router.post('/', upload.single('file'), createPostController);
router.put('/:id', updatePostController);
router.delete('/:id', deletePostController);
router.put('/:id/like', likePostController);
router.get('/:id', getPostController);
router.get('/timeline/:userId', timelinePostsController);
router.get('/profile/:username', userAllPostController);
//router.post('/upload', upload.single('file'), uploadController);

module.exports = router;
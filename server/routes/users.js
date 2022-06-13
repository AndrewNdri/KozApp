const express = require('express');
const router = express.Router();
const {updateUserController} = require('../controllers/updateUserController');
const {getUserController} = require('../controllers/getUserController');
const {deleteUserController} = require('../controllers/deleteUserController');
const {followUserController} = require('../controllers/followUserController');
const {unfollowUserController} = require('../controllers/unfollowUserController');


router.put('/:id', updateUserController);
router.get('/', getUserController);
router.delete('/:id', deleteUserController);
router.put('/:id/follow', followUserController);
router.put('/:id/unfollow', unfollowUserController);

module.exports = router;
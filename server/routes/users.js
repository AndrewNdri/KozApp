const express = require('express');
const router = express.Router();
const {updateUserController} = require('../controllers/updateUserController');
const {getUserController} = require('../controllers/getUserController');
const {deleteUserController} = require('../controllers/deleteUserController');
const {followUserController} = require('../controllers/followUserController');
const {unfollowUserController} = require('../controllers/unfollowUserController');
const {getFriendsController} = require('../controllers/getFriendsController');
const {getAllUsersController} = require('../controllers/getAllUsersController');



router.put('/:id', updateUserController);
router.get('/', getUserController);
router.get('/allUsers', getAllUsersController);
router.get('/friends/:userId', getFriendsController);
router.delete('/:id', deleteUserController);
router.patch('/:id/follow', followUserController);
router.patch('/:id/unfollow', unfollowUserController);


module.exports = router;
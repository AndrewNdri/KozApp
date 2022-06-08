const express = require('express');
const router = express.Router();
const {updateUserController} = require('../controllers/updateUserController');
const {getUserController} = require('../controllers/getUserController');
const {deleteUserController} = require('../controllers/deleteUserController');
const {followUserController} = require('../controllers/followUserController');


router.put('/:id', updateUserController);
router.get('/:id', getUserController);
router.delete('/:id', deleteUserController);
router.put('/:id/follow', followUserController);
//unfollow user

module.exports = router;
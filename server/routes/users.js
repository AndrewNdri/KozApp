const express = require('express');
const router = express.Router();
const {updateUserController} = require('../controllers/updateUserController');
const {getUserController} = require('../controllers/getUserController');
const {deleteUserController} = require('../controllers/deleteUserController');


router.put('/:id', updateUserController);
router.get('/', getUserController);
router.delete('/:id', deleteUserController);
//follow user
//unfollow user

module.exports = router;
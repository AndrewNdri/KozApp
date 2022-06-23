const express = require('express');
const router = express.Router();
const {createNewMessageController} = require("../controllers/createNewMessageController");

//add
router.post("/", createNewMessageController);

//get

module.exports = router;
const express = require('express');
const router = express.Router();
const {createNewConversationController} = require("../controllers/createNewConversationController");

//new conversation

router.post("/", createNewConversationController);

//get conversation of a user

module.exports = router;
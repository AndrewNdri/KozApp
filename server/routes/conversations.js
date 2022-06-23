const express = require('express');
const router = express.Router();
const {createNewConversationController} = require("../controllers/createNewConversationController");
const {getUserConversationController} = require("../controllers/getUserConversationController");

//new conversation

router.post("/", createNewConversationController);

//get conversation of a user
router.get("/:userId", getUserConversationController);

module.exports = router;
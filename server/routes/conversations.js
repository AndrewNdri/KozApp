const express = require('express');
const router = express.Router();
const {createNewConversationController} = require("../controllers/createNewConversationController");
const {getUserConversationController} = require("../controllers/getUserConversationController");
const {getTwoUsersConversationController} = require("../controllers/getTwoUsersConversationController");
//new conversation

router.post("/", createNewConversationController);

//get conversation of a user
router.get("/:userId", getUserConversationController);

//get conversation includes two userId
router.get("/find/:firstUserId/:secondUserId", getTwoUsersConversationController);

module.exports = router;
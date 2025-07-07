const express = require('express');
const router = express.Router();
const {createNewMessageController} = require("../controllers/createNewMessageController");
const {getMessageController} = require("../controllers/getMessageController");

//add
router.post("/", createNewMessageController);
//get
router.get("/:conversationId", getMessageController);
module.exports = router;
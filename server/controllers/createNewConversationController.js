const Conversation = require('../models/Conversation');

module.exports.createNewConversationController = async (req, res) =>{
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
    });

    try{
        const savedConversation = await newConversation.save();
        res.status(200).send(savedConversation);
    }catch(err){
        res.status(500).json(err);
    }
};
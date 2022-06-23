const Message = require("../models/Message");

module.exports.getMessageController = async (req, res) =>{
    try{
        const messages = await Message.find({
            conversationId: req.params.conversationId
        });
        res.status(200).json(messages);
    }catch(err){
        res.status(500).json(err);
    }
};
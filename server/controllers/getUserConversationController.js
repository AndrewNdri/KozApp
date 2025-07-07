const Conversation = require('../models/Conversation');

module.exports.getUserConversationController = async (req, res) =>{
    try{
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId]},
        });
        res.status(200).json(conversation);
    }catch(err){
        res.status(500).json(err);
    }
};
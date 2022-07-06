const Conversation = require("../models/Conversation");

module.exports.getTwoUsersConversationController = async (req, res)=>{
    try{
        const conversation = await Conversation.findOne({
            members: {$in: [req.params.firstUserId, req.params.secondUserId]}
        });
        res.status(200).json(conversation);
    }catch(err){
        res.status(500).json(err);
    }
};
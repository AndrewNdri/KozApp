const User = require('../models/User');

module.exports.deleteUserController = async (req, res) =>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete({_id: req.params.id});
            res.status(200).send("Account has been deleted");
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        res.status(403).send("You can delete only your account");
    }
};
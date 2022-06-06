const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports.updateUserController = async (req, res) =>{
    if(req.body.userId === req.params.id || req.user.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                return res.status(500).json(err);
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });
            res.status(200).send("Account has been updated");
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        res.status(403).send("You can update only your account");
    }
};
const User = require('../models/User');

module.exports.getUserController = async (req, res) =>{
    try{
        const user = await User.findById(req.params.id);
        const {password, updatedAt,...other} = user._doc;
        res.status(200).json(other);
    }catch(err){
        res.status(500).send(err);
    }
};
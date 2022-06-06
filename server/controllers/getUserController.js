const User = require('../models/User');

module.exports.getUserController = async (req, res) =>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        res.status(500).send(err);
    }
};
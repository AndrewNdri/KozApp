const User = require('../models/User');

module.exports.getUserController = async (req, res) =>{
    const userId = req.query.userId;
    const username = req.query.username;
    try{
        const user = userId ? await User.findById(userId) : await User.findOne({username: username});
        const {password, updatedAt,...other} = user._doc;
        res.status(200).json(other);
    }catch(err){
        console.log(err)
        res.status(500).send(err);
    }
};
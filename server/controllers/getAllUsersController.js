const User = require('../models/User');

module.exports.getAllUsersController = async (req, res) =>{
    try{
        const getAllUsers = await User.find({});
        res.status(200).json(getAllUsers.map(user => user.username));
    }catch(err){
        res.status(500).json(err);
    }
};
const Post = require('../models/Posts');
const User = require('../models/User');

module.exports.userAllPostController = async (req, res)=>{
    try{
        const user = await User.findOne({username: req.params.username});
        const posts = await Post.find({userId: user._id});
        res.status(200).json(posts);
    }catch(err){
        res.status(500).send(err);
    }
};
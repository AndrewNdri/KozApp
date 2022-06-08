const Post = require('../models/Posts');

module.exports.getPostController = async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).send(err);
    }
};
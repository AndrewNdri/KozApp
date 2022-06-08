const Post = require('../models/Posts');

module.exports.createPostController = async (req, res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).send(err);
    }
};
const Post = require('../models/Posts');

module.exports.updatePostController = async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).send('The post has been updated');
        }else{
            res.status(403).send('You can update your post only');
        }
    }catch(err){
        res.status(500).send(err);
    }
};
const Post = require('../models/Posts');

module.exports.likePostController = async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).send('The post has been liked');
        }else{
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).send('The post has been disliked');
        }
    }catch(err){
        res.status(500).send(err);
    }
};
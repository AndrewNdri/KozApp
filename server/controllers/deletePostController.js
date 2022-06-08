const Post = require('../models/Posts');

module.exports.deletePostController = async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).send('The post has been deleted');
        }else{
            res.status(403).send('You can delete your post only');
        }
    }catch(err){
        res.status(500).send(err);
    }
};
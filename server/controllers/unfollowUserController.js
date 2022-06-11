const User = require('../models/User');

module.exports.unfollowUserController = async (req, res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {followings: req.params.id}});
                res.status(200).send("User has been unfollowed");
            }else{
                res.status(403).send("You don't follow this user");
            }
        }catch(err){
            res.status(500).send(err);
        }
    }else{
        res.status(403).send("You can't unfollow yourself");
    }
};
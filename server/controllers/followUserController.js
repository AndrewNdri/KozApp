const User = require('../models/User');

module.exports.followUserController = async (req, res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {followings: req.params.id}});
                res.status(200).send("User has been followed");
            }else{
                res.status(403).send("You already follow this user");
            }
        }catch(err){
            res.status(500).send(err);
        }
    }else{
        res.status(403).send("You can't follow yourself");
    }
};
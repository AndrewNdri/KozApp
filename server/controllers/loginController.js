const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {loginValidation} = require('../utils/validation');

module.exports.loginController = async(req, res) =>{
    try{
        //Data validation
        const {error} = loginValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //checking if the email exists
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(404).send('User not found');

        //checking if the password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send('Invalid password');

        console.log(user);
        res.status(200).send("User logged in");
    }catch(err){
        res.status(500).json(err);
    }
};
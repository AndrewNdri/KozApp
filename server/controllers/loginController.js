const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {loginValidation} = require('../utils/validation');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id)=>{
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    });
};

module.exports.loginController = async(req, res) =>{
    try{
        //Data validation
        const {error} = loginValidation(req.body);
        if(error) return res.status(400).json(error.details[0].message);

        //checking if the email exists
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(404).send('User not found');

        //checking if the password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send('Invalid password');
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge});
        console.log(user);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
};
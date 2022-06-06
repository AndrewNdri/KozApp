const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports.registerController = async(req, res) =>{
    //checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create a new user
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json({
            message: "User registered",
            userDetails: savedUser
        });
    }catch(err){
        res.status(400).send(err);
    }
};
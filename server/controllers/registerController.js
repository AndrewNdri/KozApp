const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {registerValidation} = require('../utils/validation');

module.exports.registerController = async(req, res) =>{
    //Data validation
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
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
        password: hashedPassword,
        profilePicture: req.body.profilePicture
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
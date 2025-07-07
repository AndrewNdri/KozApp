const Post = require('../models/Posts');
const fs = require('fs');
const {promisify} = require('util');
const pipeline = promisify(require('stream').pipeline);
const cloudinary = require('../utils/cloudinary');

module.exports.createPostController = async (req, res)=>{
    console.log(req.body.userId);
    try{
        if(req.file.detectedMimeType !== 'image/jpg' && req.file.detectedMimeType !== 'image/png' && req.file.detectedMimeType !== 'image/jpeg'){
            throw Error('Invalid file');
        }

        if(req.file.size > 1900000) throw Error('max size');
    }catch(err){
        console.log(err)
        return res.status(400).send(err);
    }

    let fileName = req.body.name;
    const path = `${__dirname}/../../client/public/assets/posts/${fileName}`;
    await pipeline(
        req.file.stream, 
        fs.createWriteStream(path)
    );

    const result = await cloudinary.uploader.upload(path, {
        folder: "Posts Images"
    })
    const newPost = new Post({
        userId: req.body.userId,
        desc: req.body.desc,
        img: req.file !== null ? result.url : ""
    });

    fs.unlinkSync(path);
    try{
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    }catch(err){
        res.status(500).send(err);
    }
};
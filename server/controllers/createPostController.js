const Post = require('../models/Posts');
const fs = require('fs');
const {promisify} = require('util');
const pipeline = promisify(require('stream').pipeline);

module.exports.createPostController = async (req, res)=>{
    console.log(req.body.userId);
    try{
        if(req.file.detectedMimeType !== 'image/jpg' && req.file.detectedMimeType !== 'image/png' && req.file.detectedMimeType !== 'image/jpeg'){
            throw Error('Invalid file');
        }

        if(req.file.size > 500000) throw Error('max size');
    }catch(err){
        console.log(err)
        return res.status(400).send(err);
    }

    let fileName = req.body.name;
    await pipeline(
        req.file.stream, 
        fs.createWriteStream(
            `${__dirname}/../../client/public/assets/posts/${fileName}`
        )
    );

    const newPost = new Post({
        userId: req.body.userId,
        desc: req.body.desc,
        img: req.file !== null ? `posts/${fileName}` : ""
    });


    try{
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    }catch(err){
        res.status(500).send(err);
    }
};
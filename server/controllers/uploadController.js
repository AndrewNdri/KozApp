const Post = require('../models/Posts');
const fs = require('fs');
const {promisify} = require('util');
const pipeline = promisify(require('stream').pipeline);


module.exports.uploadController = async (req, res)=>{
    try{
        if(req.file.detectedMimeType !== 'image/jpg' && req.file.detectedMimeType !== 'image/png' && req.file.detectedMimeType !== 'image/jpeg'){
            throw Error('Invalid file');
        }

        if(req.file.size > 500000) throw Error('max size');
    }catch(err){
        console.log(err)
        return res.status(400).send(err);
    }

    const fileName = req.body.name + ".jpg";

    await pipeline(
        req.file.stream, 
        fs.createWriteStream(
            `${__dirname}/../../client/public/assets/${fileName}`
        )
    );

    try{
        await Post.findById(
            req.body.postId,
            {$set: {img: `${__dirname}/../../client/public/assets/${fileName}`}},
            {new: true, upsert: true, setDefaultsOnInsert: true},
            (err, docs) =>{
                if(!err) return res.send(docs);
            }
        );
    }catch(err){
        return res.status(500).send({message: err});
    }
};
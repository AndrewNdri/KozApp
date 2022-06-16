const multer = require('multer');

const storage = multer.diskStorage({
    distination: function(req, file, cb){
        cb(null, "public/images");
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
});

// const fileFilter = (req, file, cb) =>{
//     if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
//         cb(null, true);
//     }else{
//         cb({message: 'unsupported file format'}, false);
//     }
// };

const upload = multer({
    storage: storage,
    // limits: {fileSize: 2048 * 2048},
    // fileFilter: fileFilter
});

module.exports = {upload};
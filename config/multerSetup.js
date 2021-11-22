const multer = require('multer');

const storage = multer.diskStorage({
    filename: function (req, file, callback){
        callback(null, Date.now() + file.originalname);
    }
});

const imageFilter = function (req, file, cb){
    if(![file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)]){
        return cb(new Error('only image files are allowed!'), false);
    }
}

const upload = multer({
    storage,
    imageFilter,
})

module.exports = upload
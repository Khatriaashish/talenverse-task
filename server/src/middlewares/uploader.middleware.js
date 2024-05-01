const multer = require('multer');
const fs = require('fs');

const myStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const path = req.uploadDir??"./public/uploads/others";
        if(!fs.existsSync(path)){
            fs.mkdirSync(path, {recursive: true});
        }
        cb(null, path);
    },
    filename: (req, file, cb)=>{
        let random = Math.round(Math.random()*9999);
        let ext = file.originalname.split('.').pop().toLowerCase();
        let filename = random + '_' + Date.now() + '.' + ext;
        cb(null, filename)
    }
})

const imageFilter = (req, file, cb)=>{
    const allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp']
    let ext = (file.originalname.split('.').pop()).toLowerCase();
    if(allowed.includes(ext)){
        cb(null, true);
    }
    else{
        cb({code: 404, message: "File format not supported"}, null)
    }
}

const uploader = multer({
    storage: myStorage,
    fileFilter: imageFilter,
    limits: {
        fileSize: 3000000
    }
})

module.exports = uploader;
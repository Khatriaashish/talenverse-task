const fs = require('fs');
const generateRandomString = (len = 100)=>{
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFFGHIJKLMNOPQRSTUVWXYZ';
    let random = "";
    for(let i=1; i<=len; i++){
        let posn = Math.ceil(Math.random()*(chars.length-1))
        random += chars[posn];
    }
    return random
}

const generateRandomNumber = (limit, lower=0)=>{
    let posn = Math.ceil(lower + (Math.random()*limit));
    return posn;      
}
const getTokenFromHeaders = (req)=>{
    let token = null;

        if(req.headers['authorization'])
            token = req.headers['authorization'];

        if(req.headers['x-xsrf-token'])
            token = req.headers['x-xsrf-token'];

        if(req.query['token'])
            token = req.query['token'];

    return token;
}

const deleteFile = (path, filename)=>{
    if(fs.existsSync(path + filename))
        fs.unlinkSync(path + filename);
}

module.exports = {generateRandomString, generateRandomNumber, getTokenFromHeaders, deleteFile}
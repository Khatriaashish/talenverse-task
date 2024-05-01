const jwt = require('jsonwebtoken');
require('dotenv').config()
const {getTokenFromHeaders} = require('../config/helpers');
const UserModel = require('../modules/user/user.model');
const PATModel = require('../modules/auth/personal-access-token.model');
const CheckLogin = async (req, res, next)=>{
    try{
        let token = getTokenFromHeaders(req);
        if(token===null){
            next({
                code: 401, message: "Login Required"
            })
        }
        else{
            token = (token.split(" ")).pop();
            if(!token){
                next({
                    code: 401, message: "Token Required"
                })
            }
            else{
                let patData = await PATModel.findOne({token: token});
                if(patData){
                    
                    let data = jwt.verify(token, process.env.JWT_SECRET);
                    let userDetail = await UserModel.findOne({_id: data.userId})
                    if(userDetail){
                        req.authUser = userDetail;
                        next();
                    }
                    else{
                        next({code: 401, message: "User doesn't exists anymore"});
                    }
                }
                else{
                    next({code:401, message: "Token already expired or invalid"});
                }
            }
        }
    }
    catch(excpt){
        next({code: 401, message: excpt.message})
    }
}

module.exports = CheckLogin
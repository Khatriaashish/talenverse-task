const ValidateRequest = require('../../middlewares/validate-request');
const UserModel = require('../user/user.model');
const { registerSchema, loginSchema } = require('./auth.validator');
const jwt = require('jsonwebtoken');
const PATModel = require('./personal-access-token.model');
const CheckLogin = require('../../middlewares/auth.middleware');
const router = require('express').Router();
const { getTokenFromHeaders } = require('../../config/helpers');
const bcrypt = require('bcryptjs');

router.post('/signup', ValidateRequest(registerSchema), async(req, res, next)=>{
    try {
        const payload = req.body;
        payload.status = "active"; 
        payload.role = "client";
        payload.password = bcrypt.hashSync(payload.password, 10);
        
        const user = new UserModel(payload);
        const response = await user.save();
        res.json({
            result: response,
            message: "User Registration Successful",
            meta: null
        })
    } catch (error) {
        next(error);
    }

})

router.post('/login', ValidateRequest(loginSchema), async(req, res, next)=>{
    try {
        const credentials = req.body;
        let userDetail = await UserModel.findOne({email: credentials.email});
        if(userDetail){
            if(userDetail.status === 'active'){
                if (bcrypt.compareSync(credentials.password, userDetail.password)) {
                    let token = jwt.sign({
                        userId: userDetail._id
                    }, process.env.JWT_SECRET, {
                        algorithm: "HS256",  
                        expiresIn: "1d"  
                    })
                    let refreshToken = jwt.sign({
                        userId: userDetail._id
                    }, process.env.JWT_SECRET, {
                        algorithm: "HS256",  
                        expiresIn: "2d"  
                    })

                    let patData = {
                        userId: userDetail._id,
                        token: token,
                        refreshToken: refreshToken
                    }
                    const pat = new PATModel(patData);
                    await pat.save();
                    res.json({
                        result: {
                            token: token,
                            refreshToken: refreshToken,
                            type: "Bearer",
                            userDetail: {
                                userId: userDetail._id,
                                name: userDetail.name,
                                role: userDetail.role
                            }
                        },
                        message: "Logged In",
                        meta: null
                    })
                } else {
                    next({ code: 400, message: "Credential doesn't match" });
                }
            }
            else{
                next({code: 401, messsage: "User not active"});
            }
        }else{
            next({code: 400, message: "User doesn't exist"})
        }
    } catch (error) {
        next(error);
    }
})

router.get('/me', CheckLogin, (req, res, next)=>{
    res.json({
        result: req.authUser
    })
})

router.post('/logout', CheckLogin, async(req, res, next)=>{
    try{
        let token = getTokenFromHeaders(req);
        token = token.split(" ").pop();
        if(!token){
            next({ code: 401, message: "Token Required"})
        }
        else{
            let deleted = await PATModel.findOneAndDelete({
                token: token
            })
            if(deleted){
                res.json({
                    result: null,
                    message: "Logged Out Success",
                    meta: null
                })
            }
            else{
                throw {code: 404, message: "Token does not exists"}
            }
        }
    }
    catch(except){
        next(except);
    }
});

module.exports = router
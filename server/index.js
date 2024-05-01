const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const router = require("./src/router");
const { MulterError } = require('multer');
const { ZodError } = require('zod');
require('./src/config/db.config');

//cross origin access
app.use(cors());

//bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//serving static images
app.use("/asset", express.static("public/uploads"));

//api
app.get('/check', (req, res)=>{
    res.send("Success");
})

app.use('/api/v1', router)

//404 Handle
app.use((req, res, next)=>{
    next({code: 404, message: "Page not found"});
})

//exception handling
app.use((error, req, res, next)=>{
    let code = error.code??500;
    let message = error.message??"Internal Server Error";
    let result = error.result??null;

    //todo
    //Multer exceptions
    if(error instanceof MulterError){
        if(error.code === 'LIMIT_FILE_SIZE'){
            code = 400;
            message = error.message
        }
    }
    //ZOD Exceptions
    if(error instanceof ZodError){
        code = 400;
        let msg = {}

        error.errors.map((err)=>{
            msg[err.path[0]] = err.message;
        })
        message = "Validation Failure";
        result = msg;
    }

    //mongodb error handling
    if(error.code === 11000){
        code = 400;
        let uniqueKeys = Object.keys(error.keyPattern)
        let msgBody = uniqueKeys.map((key)=> {
            return{
                [key]: key + 'should be unique'
            }
        })
        result = msgBody;
        message = "Validation Fail"
    }

    res.status(code).json({
        result: result,
        message: message,
        meta: null
    })
})


const PORT = process.env.PORT
app.listen(2345, (err)=>{
    if(!err){
        console.log(`Server is up at port ${PORT}`)
    }
})
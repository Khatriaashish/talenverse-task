const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL, {
    dbName: process.env.MONGODB_NAME,
    autoCreate: true,
    autoIndex: true
}).then((success)=>{
    console.log("Db Connection Success");
}).catch((except)=>{
    console.log("Error establishing connection with mongodb");
    process.exit(1);
})

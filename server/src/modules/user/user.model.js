const mongoose = require("mongoose")

const UserSchemaDef = new mongoose.Schema({
    name: {
        type: String,  
        required: true, 
        min: 2, 
        max: 50
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String,
        default: null
    },
    status: {
        type: String, 
        enum: ["active",'inactive'],
        default: "inactive"
    },
    role: {
        type: String,
        enum: ['admin', 'client'],
        default: "client"
    }
}, {
    timestamps: true ,
    autoCreate: true, 
    autoIndex: true
});

const UserModel = mongoose.model("User", UserSchemaDef);
module.exports = UserModel;
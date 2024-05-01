const mongoose = require('mongoose');
const ContactSchemaDef = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: null
    },
    subject: {
        type: String,
        default: null
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true
});

const ContactModel = mongoose.model('Contact', ContactSchemaDef);
module.exports = ContactModel;
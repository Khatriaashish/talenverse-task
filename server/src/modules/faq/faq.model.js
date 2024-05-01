const mongoose = require('mongoose');
const FAQSchemaDef = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true
});

const FAQModel = mongoose.model('FAQ', FAQSchemaDef);
module.exports = FAQModel;
const mongoose = require('mongoose');
const TeamSchemaDef = new mongoose.Schema({
    name: {
        type: String,
        min: 2,
        max: 50,
        required: true
    },
    designation: {
        type: String,
        min: 2,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    linkedIn: {
        type: String,
        required: true
    },
    telegram: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'https://picsum.photos/id/1/560'
    }
}, {
    timestamps: true,
    autoCreate: true,
    autoIndex: true
});

const TeamModel = mongoose.model('Team', TeamSchemaDef);
module.exports = TeamModel;
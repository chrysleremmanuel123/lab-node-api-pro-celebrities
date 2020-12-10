const mongoose = require('../config/db'), Schema = mongoose.Schema
//creating schema
const CelebDetail = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})
//creating table
const Celeb = mongoose.model('celebraties_data', CelebDetail)

module.exports = { Celeb }
const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    region: {type: String},
    imgHeader: {data:Buffer, contentType:String},
    logo: {data:Buffer, contentType:String},
    name: {type: String},
    texto:{type: String},
    imgNews: {data:Buffer, contentType:String},
    titleNews: {type: String},
    textNews: {type:String},
});

const BlogSchema = mongoose.model('BlogSchema', blogSchema);

module.exports = BlogSchema;
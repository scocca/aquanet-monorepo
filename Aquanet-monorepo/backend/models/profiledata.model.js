const mongoose = require('mongoose');

const {Schema} = mongoose;

const profileSchema = new Schema({
    profileName:{type:String, required:true, default:"nombre aqui"},
    profileDescription:{type:String, required:true, default:"nombre aqui"},
    profileMail:{type:String, required:true, default:"nombre aqui"},
    profilePhone:{type:String, required:true, default:"nombre aqui"},
    profileWeb:{type:String, required:true, default:"nombre aqui"},
    profileProyect1:{type:String, required:true, default:"nombre aqui"},
    profileProyect2:{type:String, required:true, default:"nombre aqui"},
    profileProyect3:{type:String, required:true, default:"nombre aqui"},
    profileBlog:{type:String, required:true, default:"nombre aqui"},
    profileBlogDescription:{type:String, required:true, default:"nombre aqui"},
    portraitPhoto:{type:String, default:''},
    profilePhoto:{type:String, default:''},
    proyect1Photo:{type:String, default:''},
    proyect2Photo:{type:String, default:''},
    proyect3Photo:{type:String, default:''},
    blogPhoto:{type:String, default:''}
})

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
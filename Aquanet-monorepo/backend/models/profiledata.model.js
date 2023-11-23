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
    portraitPhoto:{type:String, default:'https://res.cloudinary.com/dfnyutgxt/image/upload/v1700728858/aquanet/kjdc9bm6teikou0hvb4c.jpg'},
    profilePhoto:{type:String, default:'https://res.cloudinary.com/dfnyutgxt/image/upload/v1700728858/aquanet/kjdc9bm6teikou0hvb4c.jpg'},
    proyect1Photo:{type:String, default:'https://res.cloudinary.com/dfnyutgxt/image/upload/v1700728631/aquanet/d339cfxhbpvvyinbzfhv.jpg'},
    proyect2Photo:{type:String, default:'https://res.cloudinary.com/dfnyutgxt/image/upload/v1700728858/aquanet/kjdc9bm6teikou0hvb4c.jpg'},
    proyect3Photo:{type:String, default:'https://res.cloudinary.com/dfnyutgxt/image/upload/v1700728631/aquanet/zjd7wyr5kpczb1bufnx6.jpg'},
    blogPhoto:{type:String, default:'https://res.cloudinary.com/dfnyutgxt/image/upload/v1700728727/aquanet/ybfuaat8vbrkcqzo3pvd.png'}
})

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
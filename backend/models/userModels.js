const mongoose = require('mongoose');


const userSchema =  new mongoose.Schema({
    username: {type: String, required:Boolean},
    password: {type: String, required:Boolean},
    email: {type: String, required:Boolean},
    firstName: {type: String},
    lastname: {type: String},
    avatar: {type: String},
    gender: {type: String}, 
    city: {type: String},
    phone: {type: Number},
 
    isAdmin: {type: String, required:Boolean, default: false},
  
    isActivate: {type: String, required:Boolean, default: false}

     
})
const UserModel = mongoose.model('users',userSchema);

module.exports = UserModel;

const mongoose = require('mongoose');


const userSchema =  new mongoose.Schema({
    username: {type: 'string', required:'Boolean'},
    password: {type: 'string', required:'Boolean'},
    email: {type: 'string', required:'Boolean'},
    firstName: {type: 'string'},
    lastname: {type: 'string'},
    avatar: {type: 'string'},
    gender: {type: 'string'},
    city: {type: 'string'},
    phone: {type: Number},
    isAdmin: {type: 'string', required:'Boolean', default: false}
     
})
const UserModel = mongoose.model('users',userSchema);

module.exports = UserModel;

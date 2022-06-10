const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const dbConfig = require('./config/dbConfig');
const serverConfig = require('./config/serverConfig');
const app = express();

mongoose.connect(dbConfig.MONGO_URL)
.then((response => {
    console.log('MONGO DB is connected!');
}))
.catch((error) => {
    console.log("MONGO DB is fail, the reason is this one ->", error);
})

app.post('/api/login', (req,res) => {
    const reqBody = req.body;


    const user = User.findOne(reqBody, (err,data) => {
        if(err) {
            const error = `There is some error ${err}`;
            // console.log(error);
            return;
        }
        if(data){
            console.log(data);
            res.send(data);
        }
      
    })
})

app.post('/api/register', async(req,res) => {
    const reqbody = req.body;
    User.findOne(reqbody, async(err,data) => {
        if(err){
            const errorMsg = `Error on reqister user: ${err}`;
            console.log(err);
            res.send(errorMsg);
            return;
        }
        else {
            if(data){
                res.send(`user already exist ${data.username}`)
            }
            else {
                const newUser = new User(reqbody);
                const saveNewUser = await newUser.save();
                res.send(saveNewUser || `User not registered`);
            }
        }
    })
   
})


app.listen(serverConfig.port, err=> {
if(err){
    console.log(err);
}
else {
    console.log(serverConfig.serverRunningMsg);
}
});
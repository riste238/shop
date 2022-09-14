const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./config/dbConfig');
const Users = require('./models/userModels');
const serverConfig = require('./config/serverConfig');
const app = express();

mongoose.connect(dbConfig.MONGO_URL)
.then((response) => 
    console.log('MONGO DB is connected!'))
.catch((error) => 
    console.log("MONGO DB is fail, the reason is this one ->", error));

    // set up permission for converting binary code to json format code through this one code below:
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());
    app.use(cors());

app.post('/api/login', (req,res) => {
    const reqBody = req.body;
    // console.log(reqBody);


    const user = Users.findOne(reqBody, (err,data) => {
        if(err) {
            const error = `There is some error ${err}`;
            // console.log(error);
            return;
        }
        if(data){
            console.log(data);
            res.send(data);
            console.log("User is found in data base");
        }
      
    })
})

app.post('/api/register', async(req,res) => {
    const reqbody = req.body;
    Users.findOne(reqbody, async(err,data) => {
        if(err){
            const errorMsg = `Error on reqister user: ${err}`;
            console.log(err);
            res.send(errorMsg);
            return;
        }
        
            if(data){
                res.send(`user already exist ${data.username}`)
            }
            else {
                const newUser = new Users(reqbody);
                const saveNewUser = await newUser.save();
                console.log(saveNewUser);
                res.send(data || `User not registered`);
            }
        
    })
   
})

app.listen(serverConfig.port, (err)=> {
if(err){
    console.log(err);
}
else {
    console.log(serverConfig.serverRunningMsg);
}
});
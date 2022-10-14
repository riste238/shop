const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./config/dbConfig');
const Users = require('./models/userModels');
const nodemailer = require('nodemailer');
const serverConfig = require('./config/serverConfig');
// const mainService = require('./services/mailService');
const products = require('./fakeDb/products.json');
const Product = require("./models/productModel");
const app = express();

mongoose.connect(dbConfig.MONGO_URL)
    .then((response) =>
        console.log('MONGO DB is connected!'))
    .catch((error) =>
        console.log("MONGO DB is fail, the reason is this one ->", error));

// set up permission for converting binary code to json format code through this one code below:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

console.log("Ova se dobienite producti od fakeApi",products);

app.post('/api/login', (req, res) => {
    const reqBody = req.body;
    // console.log(reqBody);


    const user = Users.findOne(reqBody, (err, data) => {
        if (err) {
            const error = `There is some error ${err}`;
            // console.log(error);
            return;
        }
        if (data) {
            console.log(data);
            res.send(data);
            console.log("User is found in data base");
        }

    })
})

app.post('/api/register', async (req, res) => {
    const reqbody = req.body;
    Users.findOne(reqbody, async (err, data) => {
        if (err) {
            const errorMsg = `Error on reqister user: ${err}`;
            console.log(err);
            res.send(errorMsg);
            return;
        }

        if (data) {
            res.send(`user already exist ${data.username}`)
        }
        else {
            const newUser = new Users(reqbody);
            const saveNewUser = await newUser.save();

            console.log(saveNewUser._id.toString());

            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
        
            //This transporter help us to send email multiple times
            let transporter = nodemailer.createTransport({
        
                host: "smtp.ethereal.email",
                port: 587, 
                secure: false, // true for 465, false for other ports
                auth: {
                    user: testAccount.user, // generated ethereal user
                    pass: testAccount.pass, // generated ethereal password
                },
                // tls property was added about solving problem;
                tls: {
                    rejectUnauthorized: false
                }
            });



            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"Fred Foo 👻" <office@onlineShop.com>', // sender address
                to: reqbody.email, // list of receivers
                subject: "Activate account", // Subject line
                text: "", // plain text body
                html: `
                <h1>Activate account</h1>
                <p>Dear, ${reqbody.username}</p>
                <p>Please click on the link bellow to activate your account</p>
                <a href="http://localhost:3000/user-activate/${saveNewUser._id.toString()}" target="_blank">Activate link</a> 
                
                `, 
            });

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

            res.send(saveNewUser || `User not registered`);
        }

    })

})

app.post('/api/complete-registration', (req,res)=> {
    const userId = req.body.userId;
    console.log("give me this user logged", userId);
    
    Users.updateOne({_id: userId}, {isActivate: true}, (err,result) => {
        if(err){
            console.log('error from update user', err);
            res.send(err)
        }
        else {
            console.log('activate user...' , result);
            res.send(result);
        }
    })
})

// app.get('/shop/products/get-rating/:id', (req, res) => {
//     const id = req.params.id;
//     Product.find({ _id: id }, (error, data) => {
//         if (error) {
//             console.log(error);
//             res.send(error)
//         }
//         res.send({ allRatings: data[0].allRatings, rating: data[0].rating })
//     })
// })

// app.get('/api/top-products/:top', (req, res) => {
//     let topNumber = req.params.top;
//     let copyProduct = [...products];
//     let sorted = copyProduct.sort((a,b) => {
//         return b.rating.rate - a.rating.rate;
//     })
//     res.send(sorted.splice(0,topNumber));
// }
// )

app.listen(serverConfig.port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(serverConfig.serverRunningMsg);
    }
});

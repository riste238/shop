// const nodemailer = require('nodemailer');
// // async..await is not allowed in global scope, must use a wrapper
// async function configureMail() {
//     let testAccount = await nodemailer.createTestAccount();

//     // create reusable transporter object using the default SMTP transport

//     //This transporter help us to send email multiple times
//     let transporter = nodemailer.createTransport({
//         // ovie se od google predefinirani so key value : host,post i secure;
//         // a nie ja popolnuvame avtentifikacijata, odnosno auth objectot so nasi user i pass values;

//         host: "smtp.ethereal.email",
//         port: 587, 
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: testAccount.user, // generated ethereal user
//             pass: testAccount.pass, // generated ethereal password
//         },
//     });

//     return transporter;
// }


// module.exports = {
//     configureMail: configureMail
// }


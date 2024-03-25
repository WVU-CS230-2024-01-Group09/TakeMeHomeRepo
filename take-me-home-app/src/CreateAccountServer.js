const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.post('/createAccount', (req, res) => {
    const { email, password } = req.body;

    sendVerificationEmail(email);

    res.sendStatus(200);
});

function sendVerificationEmail(email) {
    const transporter = nodemailer.createTransport({
        // Configure your email service here
    });

    const mailOptions = {
        from: 'your-email@example.com',
        to: email,
        subject: 'Account Verification',
        text: 'Please click the link to verify your account.',
       
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

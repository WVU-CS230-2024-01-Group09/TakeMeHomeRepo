const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle account creation
app.post('/createAccount', (req, res) => {
    const { email, password } = req.body;

    // Send verification email
    sendVerificationEmail(email);

    // Respond to the client
    res.sendStatus(200);
});

// Function to send verification email
function sendVerificationEmail(email) {
    const transporter = nodemailer.createTransport({
        // Configure the email service here
    });

    const mailOptions = {
        from: 'your-email@example.com',
        to: email,
        subject: 'Account Verification',
        text: 'Please click the link to verify your account.',
        // we can also include an HTML version of the email if needed
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

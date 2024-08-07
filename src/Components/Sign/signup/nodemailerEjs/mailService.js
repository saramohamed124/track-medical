const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like SendGrid, etc.
    auth: {
        user: "user@gmail",
        pass: "pass"
    }
});

const sendWelcomeEmail = async (to, name) => {
    try {
        // Load and render the EJS template
        const templatePath = path.join(__dirname, 'views', 'welcome-email.ejs');
        const template = fs.readFileSync(templatePath, 'utf-8');
        const html = ejs.render(template, { name });

        // Send email
        await transporter.sendMail({
            from: "companyEmail",
            to:  "user@email",
            subject: 'Welcome to Our Service!',
            html
        });

        console.log('Welcome email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = { sendWelcomeEmail };

require("dotenv").config();
const nodemailer = require("nodemailer");

function getTransporter() {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASS
        }
    });

    return transporter;
}

function sendEmail(senderName, to, subject, text = "", attachments = []) {
    const transporter = getTransporter();
    const mailOptions = {
        from: `${senderName} <${process.env.SENDER_EMAIL}>`,
        to,
        subject: `[NO_REPLY] ${subject}`,
        text,
        attachments
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Email send : " + info.response);
        }
    });
}

function sendHtmlEmail(senderName, to, subject, html = "", attachments = []) {
    const transporter = getTransporter();
    const mailOptions = {
        from: `${senderName} <${process.env.SENDER_EMAIL}>`,
        to,
        subject: `[NO_REPLY] ${subject}`,
        html,
        attachments
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Email send : " + info.response);
        }
    });
}

module.exports = {
    sendEmail,
    sendHtmlEmail
}
const { sendEmail } = require("../helpers/email");

sendEmail(
    "Jean Claude",
    "example@gmail.com",
    "Test nodemailer",
    "test message"
);

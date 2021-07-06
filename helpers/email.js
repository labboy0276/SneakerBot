require('dotenv-flow').config({path: '/home/sneakerbot/SneakerBot'});
const nodemailer = require('nodemailer');

exports.sendEmail = async ({ recipient: to, subject, text }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_PORT === 465,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to,
      subject,
      text
    });

    return info.messageId;
  } catch (err) {
    throw err;
  }
};

// test-mail.js
import 'dotenv/config';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: 'Test',
  text: 'Hello from Nodemailer!',
}, (err, info) => {
  if (err) console.error(err);
  else console.log('Email sent:', info.response);
});
import nodemailer from "nodemailer";

const sendEmail = async (email, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      serivce: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });
    const mailData = {
      from: `"DeerBooks" <${process.env.GMAIL_USER}>`,
      to: email,
      subject,
      text: message,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      });
    });
  } catch (error) {
    console.error("Email error:", error.message);
  }
};

export default sendEmail;

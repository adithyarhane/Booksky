import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 465,
  auth: {
    user: "smtp@mailtrap.io",
    pass: "201e846c1b5b78e320370e4be30a49fe",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = async (email, subject, message) => {
  // Send an email using async/await
  (async () => {
    const info = await transporter.sendMail({
      from: '"DeerBooks" <adithyarhane@gmail.com>',
      to: email,
      subject: subject,
      text: message, // Plain-text version of the message
    });

    console.log("Message sent:", info.messageId);
  })();
};

import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use true for port 465, false for port 587
  auth: {
    user: "adithyarhane@gmail.com",
    pass: "jhcx ogrq tsfn sipc",
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

import nodemailer from "nodemailer";

const sendEmail = async (email, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Must be false for 587
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      // Add this to handle production certificate issues
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 1. CRITICAL: Test the connection before sending
    await transporter.verify();
    console.log("Connection to Gmail established");

    const mailData = {
      from: `"DeerBooks" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: subject,
      text: message,
    };

    // 2. Use the promise-based sendMail directly
    const info = await transporter.sendMail(mailData);
    console.log("Email sent successfully! ID:", info.messageId);
    return true;
  } catch (error) {
    // 3. Log the FULL error object so you can see it in your production logs
    console.error("PRODUCTION EMAIL ERROR:", {
      message: error.message,
      code: error.code,
      command: error.command,
    });
    return false;
  }
};

export default sendEmail;

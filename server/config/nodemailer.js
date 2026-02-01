import nodemailer from "nodemailer";

const sendEmail = async (email, subject, message) => {
  try {
    // 1. Create Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // Use 16-character App Password
      },
    });

    // 2. Verify connection configuration
    // This is crucial for production debugging
    await transporter.verify();

    // 3. Define Mail Options
    const mailOptions = {
      from: `"DeerBooks" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: subject,
      text: message,
      // html: `<b>${message}</b>`, // Optional: Use HTML for better looking emails
    };

    // 4. Send Mail
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully: %s", info.messageId);
    return { success: true, info };
  } catch (error) {
    // Detailed error logging for production troubleshooting
    console.error("Nodemailer Error:", error.message);
    return { success: false, error: error.message };
  }
};

export default sendEmail;

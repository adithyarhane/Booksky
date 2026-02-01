import { Resend } from "resend";

const sendEmailByResend = async (email, subject, message) => {
  const resend = new Resend("re_D8GsL4bM_GxcuY6Ai1GGVC7SRNGfQnXX8");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "adithyarhane@gmail.com",
    subject: subject,
    text: message,
  });
};

export default sendEmailByResend;

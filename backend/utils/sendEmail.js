import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASS } from "../config/index.js";
import { emailVerificationTemplate, welcomeEmailTemplate } from "./emailTemplate.js";
export default async function EmailSend(email, subject, msg) {
  try {
    await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });
    let template = ''
    if (subject === "Welcome Email") {
      template = welcomeEmailTemplate(msg);
    }
    if (subject === "Verify Email") {
      template = emailVerificationTemplate(email, msg);
    }
    let mailOptions = {
      from: "'iA Coder'  <estiyak1122@gmail.com>",
      to: email,
      subject: subject,
      html: template,
    };

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
    return error;
  }
}

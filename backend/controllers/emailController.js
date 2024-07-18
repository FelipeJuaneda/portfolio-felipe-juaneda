import nodemailer from "nodemailer";
import config from "../config/config.js";

export const sendEmail = (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  });

  const mailOptions = {
    from: email,
    to: config.emailUser,
    replyTo: email,
    subject: `Nuevo mensaje de ${name} | ${email}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error al enviar el mensaje.");
    }
    res.status(200).send(`Mensaje enviado: ${info.response}`);
  });
};

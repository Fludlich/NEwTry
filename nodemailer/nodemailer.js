const nodemailer = require("nodemailer");

const { requestError } = require("../helpers");
const { passwordMailHandler } = require("./passwordMail");
const { redistrationMailHandler } = require("./registrationMail");

async function mailHandler(registrationInf, changePassword) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    if (registrationInf) {
      await redistrationMailHandler(registrationInf, transporter);
    }
    if (changePassword) {
      await passwordMailHandler(changePassword, transporter);
    }
  } catch (error) {
    throw requestError(503, "Service Unavailable");
  }
}

module.exports = {
  mailHandler,
};

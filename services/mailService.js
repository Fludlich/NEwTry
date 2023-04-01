const { mailHandler } = require("../nodemailer/nodemailer");
const { User } = require("../db/userModel");
const { requestError } = require("../helpers");
const bcrypt = require("bcrypt");
const { resendVerificationEmail } = require("../schemas/contacts");

const verifaingEmail = async (verificationToken) => {
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw requestError(404, `User not found`);
  }
  const verify = true;
  verificationToken = null;
  await User.findByIdAndUpdate(user._id, { verify, verificationToken });
};

const resendVerifyingEmail = async (
  name,
  email,
  password,
  verificationToken
) => {
  const { error } = resendVerificationEmail.validate({ name, email, password });
  if (error) {
    throw requestError(400, "Missing fields");
  }
  // if(!email || !name || !password){
  //   throw requestError(400, "Missing required fields")
  // }
  const user = await User.findOne({ email });
  if (!user) {
    throw requestError(401, `Email or password is wrong`);
  }
  if (!(await bcrypt.compare(password, user.password)) || user.name !== name) {
    throw requestError(401, `Email or password is wrong`);
  }
  const registrationInf = {
    name: name,
    verificationToken: verificationToken,
    email: email,
  };
  await User.findByIdAndUpdate(user._id, { verificationToken });
  await mailHandler(registrationInf, null);
};

module.exports = {
  verifaingEmail,
  resendVerifyingEmail,
};

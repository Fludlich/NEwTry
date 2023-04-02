const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { User } = require("../db/userModel");
const { requestError } = require("../helpers");
const { mailHandler } = require("../nodemailer/nodemailer");
const { photoUpload } = require("../cloudinary/cloudinary");

const registration = async (
  login,
  email,
  password,
  avatar,
  verificationToken
) => {
  const user = new User({ login, email, password, avatar, verificationToken });
  const emailInUse = await User.findOne({ email });
  if (emailInUse) {
    throw requestError(409, `Email in use`);
  }
  let photoUploaded;
  if (!avatar.default) {
    photoUploaded = await photoUpload(avatar.avatarUrl, "avatar");
  }

  if (!avatar.default && photoUploaded?.message === "Upload success") {
        user.avatar.avatarUrl = photoUploaded.url;
  }
  console.log(user)
  console.log(photoUploaded.url);

  const registrationInf = {
    login: login,
    verificationToken: verificationToken,
    email: email,
  };
  await user.save();
  await mailHandler(registrationInf, null);
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw requestError(401, `Email or password is wrong`);
  }
  if (!(await bcrypt.compare(password, user.password))) {
    throw requestError(401, `Email or password is wrong`);
  }
  if (user.verify === false) {
    throw requestError(401, `Please verify youre email`);
  }
  const token = jsonwebtoken.sign(
    {
      _id: user._id,
    },
    process.env.JSONWEBTOKEN_SECRET
  );
  await User.findByIdAndUpdate(user._id, { token });
  const result = [token, user];
  return result;
};

module.exports = {
  registration,
  login,
};

const { registration } = require("../../services/authService");
var gravatar = require("gravatar");
const { mailHandler } = require("../../nodemailer/nodemailer");
const { nanoid } = require("nanoid");
const date = Date.now();
const created = new Date(date);

const registrationController = async (request, response) => {
  const {
    login,
    email,
    password,
    // file,
  } = request.body;
  let file 
  // { path: file } = request?.file;
  if (request.file && request.file !== undefined) {
    return (file = request.file.path);
  }

  const userAvatar = {
    default: false,
    id: date,
    avatarUrl: file,
    created: created,
  };

  const defAvatar = {
    default: true,
    id: date,
    avatarUrl: gravatar.url(email, { s: "100", r: "x", d: "retro" }, true),
    created: created,
  };

  const avatar = file ? userAvatar : defAvatar;
  console.log(avatar);

  const verificationToken = nanoid();
  await registration(login, email, password, avatar, verificationToken);
  response.status(201).json({
    user: {
      login: request.body,
      email: request.file,
    },
  });
};

module.exports = { registrationController };

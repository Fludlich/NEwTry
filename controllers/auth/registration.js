const { registration } = require("../../services/authService");
var gravatar = require("gravatar");
const { mailHandler } = require("../../nodemailer/nodemailer");
const { nanoid } = require("nanoid");
const date = Date.now();
const created = new Date(date);

const registrationController = async (request, response) => {
  const { login, email, password } = request.body;

  // let file

  // console.log(request.file)

  // if (request.file) {
  //   return file = request.file.path
  // }

  // console.log(file)
  // { path: file } = request?.file;
  // if (request.file !== undefined) {

  //   return (file = request.file.path);
  // }

  let userAvatar;
  let defAvatar;

  const avatar =
    request.file !== undefined
      ? (userAvatar = {
          default: false,
          id: date,
          avatarUrl: request.file.path,
          created: created,
        })
      : (defAvatar = {
          default: true,
          id: date,
          avatarUrl: gravatar.url(
            email,
            { s: "100", r: "x", d: "retro" },
            true
          ),
          created: created,
        });

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

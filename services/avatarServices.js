const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const { User } = require("../db/userModel");
const Jimp = require("jimp");
const PORT = process.env.PORT;

const avatarDir = path.join(__dirname, "../", "public", "avatars/");

const created = new Date(Date.now());

const upload = async (request) => {
  const { path: tempUpload, originalname } = request.file;

  const image = await Jimp.read(tempUpload)
    .then((photo) => {
      return photo.resize(250, 250);
    })
    .catch((err) => {
      console.error(err);
    });
  image.write(`${avatarDir}${originalname}`);

  await fs.unlink(tempUpload, (err) => {
    if (err) {
      throw err;
    }
  });

  const avatarUrl = `http://locahost:${PORT}/avatars/${originalname}`;

  const newAvatar = {
    id: nanoid(),
    ...request.body,
    avatarUrl,
    created,
  };
  const id = request.user._id;
  await User.findOneAndUpdate({ _id: id }, { $set: { newAvatar } });
  return newAvatar;
};

module.exports = {
  upload,
};

const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const { nanoid } = require("nanoid");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const photoUpload = async (file, folder) => {
  const cloudFilePath = folder + "/" + nanoid();

  const options = {
    public_id: cloudFilePath + Math.floor(Math.random() * 10000),
    overwrite: false,
  };
  //   console.log("public_id:", options.public_id);

  try {
    const { url } = await cloudinary.uploader.upload(file, options);

    await fs.unlinkSync(file);

    return {
      message: "Upload success",
      url,
    };
  } catch (error) {
    fs.unlinkSync(file);

    return {
      message: "Upload fail",
      error,
    };
  }
};

const photoDelete = async (url) => {
  console.log(url);
  //   const cloudFilePath = folder + "/" + nanoid();

  //   const options = {
  //     public_id: cloudFilePath + Math.floor(Math.random() * 10000),
  //     overwrite: false,
  //   };
  //   console.log("public_id:", options.public_id);

  //   try {
  //       //const { url } = await cloudinary.uploader.upload(file, options);
  //       cloudinary.uploader.destroy(
  //         "your_public_id_here",
  //         function (error, result) {
  //           console.log(result, error);
  //         }
  //       );

  //     await fs.unlinkSync(url);

  //     return {
  //       message: "Delete success",
  //       url,
  //     };
  //   } catch (error) {
  //     fs.unlinkSync(url);

  //     return {
  //       message: "Upload fail",
  //       error,
  //     };
  //   }
};
module.exports = { photoUpload };

//https://api.cloudinary.com/v1_1/<cloud_name>/image/destroy

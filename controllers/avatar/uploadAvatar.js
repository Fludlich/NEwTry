const { upload } = require("../../services/avatarServices");

const uploadController = async (request, response) => {
  const result = await upload(request);
  response.json({ status: "success", result });
};

module.exports = { uploadController };

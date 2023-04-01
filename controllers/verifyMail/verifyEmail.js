const { requestError } = require("../../helpers");
const { verifaingEmail } = require("../../services/mailService");

const verifaingEmailController = async (request, response) => {
  const verificationToken = request.params.token;
  if (!verificationToken) {
    throw requestError(404, `User not found`);
  }
  await verifaingEmail(verificationToken);
  response.status(200).json({ message: "Verification successful" });
};

module.exports = { verifaingEmailController };

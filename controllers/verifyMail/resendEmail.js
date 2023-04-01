const { nanoid } = require("nanoid");
const { resendVerifyingEmail } = require("../../services/mailService");

const resendVerifyingEmailController = async (request, response) => {
  const { name, email, password } = request.body;
  const verificationToken = nanoid();
  await resendVerifyingEmail(name, email, password, verificationToken);
  response.status(200).json({ message: "Verification email sent" });
};

module.exports = { resendVerifyingEmailController };

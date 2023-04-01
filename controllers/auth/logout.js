const { User } = require("../../db/userModel");

const logout = async (request, response) => {
  const { _id } = request.user;
  await User.findByIdAndUpdate(_id, { token: "" });
  response.json({ message: "Logout success" });
};

module.exports = { logout };

const { User } = require("../../db/userModel");

const current = async (request, response) => {
  const { _id } = request.user;
  const user = await User.findById(_id);
  response.json({ email: user.email });
};

module.exports = { current };

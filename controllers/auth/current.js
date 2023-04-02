const { User } = require("../../db/userModel");

const current = async (request, response) => {
  const [, token] = req.headers.authorization.split(" ");
  // const user = await User.findById(_id);
  const user = await getCurrentUser(token);
  // console.log(user)
  response.json({ token: user.token, user: user});
};

module.exports = { current };

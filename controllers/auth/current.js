const { User } = require("../../db/userModel");
const jsonwebtoken = require("jsonwebtoken");

const current = async (request, response) => {
  const [, token] = request.headers.authorization.split(" ");
  // const user = await User.findById(_id);
 // const user = await getCurrentUser(token);
  // console.log(user)
  const user = jsonwebtoken.verify(token, process.env.JSONWEBTOKEN_SECRET);
    const findedUser = await User.findByIdAndUpdate(user?._id).select([
      "-password",
      "-createdAt",
      "-updatedAt",
    ]);

  if (!findedUser) throw new NotAuthorizedError("Not authorized");
  response.json({ token: findedUser.token, user: findedUser });
};

module.exports = { current };

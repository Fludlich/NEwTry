const jsonwebtoken = require("jsonwebtoken");
const { requestError } = require("../helpers");
const { User } = require("../db/userModel");

const authMiddleware = async (request, response, next) => {
  try {
    const [tokenType, token] = request.headers["authorization"].split(" ");
    if (!token) {
      next(requestError(401));
    }
    if (tokenType !== "Bearer") {
      next(requestError(401));
    }
    const { _id } = jsonwebtoken.verify(token, process.env.JSONWEBTOKEN_SECRET);
    const user = await User.findById(_id);
    if (!user || !user.token || user.token !== token) {
      throw requestError(401);
    }
    request.token = token;
    request.user = user;
    next();
  } catch (error) {
    next(requestError(401, "Not authorized"));
  }
};

module.exports = authMiddleware;

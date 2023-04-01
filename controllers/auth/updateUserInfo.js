const { User } = require("../../db/userModel");
const { changeSubsription } = require("../../schemas/contacts");
const { requestError } = require("../../helpers");

const updateUserInfoController = async (request, response) => {
  const { _id } = request.user;
  const { subscription } = request.body;
  await User.findOneAndUpdate(_id, { subscription: subscription });

  const { error } = changeSubsription.validate({ subscription });
  if (error) {
    throw requestError(404, "invalid subscription");
  }
  response.status(201).json({
    user: {
      subscription: subscription,
    },
  });
};

module.exports = { updateUserInfoController };

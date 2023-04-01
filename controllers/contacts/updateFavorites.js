const { updateFavorite } = require("../../services/contactService");

const updateFavoriteController = async (request, response) => {
  const { favorite } = request.body;
  const { id: contactId } = request.params;
  const { _id: owner } = request.user;
  const result = await updateFavorite(contactId, { favorite }, owner);
  response.status(200).json(result);
};

module.exports = updateFavoriteController;

const { updateContact } = require("../../services/contactService");

const updateByIDController = async (request, response) => {
  const { name, email, phone } = request.body;
  const { id: contactId } = request.params;
  const { _id: owner } = request.user;
  const result = await updateContact(contactId, { name, email, phone }, owner);
  response.status(200).json(result);
};

module.exports = updateByIDController;

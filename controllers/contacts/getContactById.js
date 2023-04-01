const { getContactByID } = require("../../services/contactService");

const getContactByIDController = async (request, response) => {
  const { id: contactId } = request.params;
  const { _id: owner } = request.user;
  const contact = await getContactByID(contactId, owner);

  response.json(contact);
};

module.exports = getContactByIDController;

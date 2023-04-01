const { removeContact } = require("../../services/contactService");

const removeContactController = async (request, response) => {
  const { id: contactId } = request.params;
  const { _id: owner } = request.user;
  await removeContact(contactId, owner);

  response.status(200).json({
    message: "Contact deleted",
  });
};

module.exports = removeContactController;

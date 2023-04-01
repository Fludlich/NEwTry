const { addContact } = require("../../services/contactService");

const addContactController = async (request, response) => {
  const { name, email, phone } = request.body;
  const { _id: owner } = request.user;
  await addContact({ name, email, phone }, owner);

  response.json({ status: "success" });
};

module.exports = addContactController;

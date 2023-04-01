const { getContacts } = require("../../services/contactService");

const listContactsController = async (request, response) => {
  const { _id: owner } = request.user;
  let { skip = 0, limit = 5, sort = "" } = request.query;
  skip = parseInt(skip);
  limit = parseInt(limit) > 20 ? 20 : parseInt(limit);
  const result = await getContacts(owner, { skip, limit, sort });
  response.json(result, skip, limit);
};

module.exports = listContactsController;

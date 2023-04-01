const listContactsController = require("./listContacts");
const getContactByIDController = require("./getContactById");
const addContactController = require("./addContact");
const removeContactController = require("./removeContact");
const updateByIDController = require("./updateByID");
const updateFavoriteController = require("./updateFavorites");

module.exports = {
  listContactsController,
  getContactByIDController,
  addContactController,
  removeContactController,
  updateByIDController,
  updateFavoriteController,
};

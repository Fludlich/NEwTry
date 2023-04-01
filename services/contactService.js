const { Contact } = require("../db/contactModel");
const { requestError } = require("../helpers");
const { addSchema, updateFavoriteSchema } = require("../schemas/contacts");

const getContacts = async (owner, { skip, limit, sort }) => {
  const result = await Contact.find({ owner })
    .select({ __v: 0 })
    .skip(parseInt(skip))
    .limit(parseInt(limit))
    .sort(sort);
  return result;
};

const getContactByID = async (contactId, owner) => {
  const contact = await Contact.findOne({ _id: contactId, owner });

  if (!contact) {
    throw requestError(404, "Not found");
  }
  return contact;
};

const addContact = async ({ name, email, phone }, owner) => {
  const { error } = addSchema.validate({ name, email, phone });
  if (error) {
    throw requestError(400, "Missing fields");
  }
  const contact = new Contact({ name, email, phone, owner });
  await contact.save();
};

const updateContact = async (contactId, { name, email, phone }, owner) => {
  const { error } = addSchema.validate({ name, email, phone });

  if (error) {
    throw requestError(400, "Missing fields");
  }
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    { $set: { name, email, phone } }
  );
  if (!result) {
    throw requestError(404, "Not found");
  }
  return result;
};

const updateFavorite = async (contactId, { favorite }, owner) => {
  const { error } = updateFavoriteSchema.validate({ favorite });

  if (error) {
    throw requestError(400, "Missing fields");
  }
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    { $set: { favorite } }
  );
  if (!result) {
    throw requestError(404, "Not found");
  }
  return result;
};

const removeContact = async (contactId, owner) => {
  const result = await Contact.findOneAndRemove({ _id: contactId, owner });
  if (!result) {
    throw requestError(404, "Not found");
  }
};

module.exports = {
  getContacts,
  getContactByID,
  addContact,
  updateContact,
  removeContact,
  updateFavorite,
};

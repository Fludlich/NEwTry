const mongoose = require("mongoose");

const phonePatern = /[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}/;

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    match: phonePatern,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userId",
    required: true,
  },
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = { Contact };

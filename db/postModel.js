const mongoose = require("mongoose");
const created = Date.now()

const postSchema = new mongoose.Schema({
  location: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  file: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true
  },
  favorite: {
    type: Object,
    default: {},
  },
  comments: {
    type: Object,
    default: {},
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userId",
    required: true,
  },
});

const Post = mongoose.model("post", postSchema);

module.exports = { Post };

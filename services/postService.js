const { Post } = require("../db/postModel");
const { addPostSchema } = require("../schemas/contacts");
const { photoUpload } = require("../cloudinary/cloudinary");
const { requestError } = require("../helpers");


const createPost = async ({ location, description, file }, owner) => {

  const { error } = addPostSchema.validate({ location, description, file });
  if (error) {
    throw requestError(400, "Missing fields");
  }
  const created = Date.now();
  const post = new Post({ location, description, file, owner, createdAt: created });
  const photoUploaded = await photoUpload(file, "post");
    if (photoUploaded?.message === "Upload success") {
      post.file = photoUploaded.url;
    }
  await post.save();
};

const getOwnPosts = async (owner, { skip, limit }) => {
  const result = await Post.find({ owner })
    .select({ __v: 0 })
    .skip(parseInt(skip))
    .limit(parseInt(limit))
    .sort({ createdAt: 1 });
  return result;
};

const postsList = async (owner, { skip, limit }) => {
  const result = await Post.find({})
    .select({ __v: 0 })
    .skip(parseInt(skip))
    .limit(parseInt(limit))
    .sort({ createdAt: -1 });
  return result;
};

module.exports = {
  createPost,
  getOwnPosts,
  postsList,
};

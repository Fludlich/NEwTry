const { createPost } = require("../../services/postService");

const createPostController = async (request, response) => {
  const { location, description } = request.body;
  const {path} = request.file
  const { _id: owner } = request.user;
  await createPost({ location, description, file:path }, owner);

  response.json({ status: "success" });
};

module.exports = createPostController;

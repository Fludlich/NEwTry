const { postsList } = require("../../services/postService");

const postsListController = async (request, response) => {
  const { _id: owner } = request.user;
  let { skip = 0, limit = 20, sort = "" } = request.query;
  skip = parseInt(skip);
  limit = parseInt(limit) > 20 ? 20 : parseInt(limit);
  const result = await postsList(owner, { skip, limit, sort });
  response.json(result, skip, limit);
};

module.exports = postsListController;

const Post = require("../../models/post.model");

module.exports = async (req, res) => {
  const {
    params,
    query: { per_page = 5, page = 1 },
  } = req;

  console.log({ params, per_page, page });
  const skip = per_page * (page - 1);
  const limit = per_page * 1;
  const numberOfPosts = await Post.find({}).countDocuments();
  console.log({ numberOfPosts, skip });

  const posts = await Post.find({}).limit(limit).skip(skip);

  const meta = {
    currentPage: page,
    numberOfPage: Math.ceil(numberOfPosts / per_page),
    limit,
  };

  return res.status(200).json({
    statusText: "Sucessfully fetched all posts...",
    meta,
    data: posts,
  });
};

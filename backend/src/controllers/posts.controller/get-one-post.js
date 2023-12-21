const Post = require("../../models/post.model");

module.exports = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post)
      return res.status(404).json({ msg: "This post does not exist." });

    return res.status(200).json({ msg: "Found it!", post });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

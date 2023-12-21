const Post = require("../../models/post.model");

module.exports = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post)
      return res.status(404).json({ msg: "This post does not exist." });

    return res.status(200).json({ msg: "Delete Success!" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

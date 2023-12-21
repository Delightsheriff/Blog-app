const constants = require("../../configs/constants");
const Post = require("../../models/post.model");
const Joi = require("joi");

const schema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  body: Joi.string().optional(),
  category: Joi.string()
    .valid(...constants.postCategories)
    .optional(),
  createdBy: Joi.string().optional(),
});

module.exports = async (req, res) => {
  const body = req.body;
  const { value, error } = schema.validate(body);
  if (error) {
    return res
      .status(400)
      .json({ error: error.details[0].message, statusText: "fail" });
  }
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, body, {
      new: true,
    });
    if (!post) {
      console.log("error");
      return;
    }
    return res
      .status(201)
      .json({ statusText: "Sucessfully created a post", data: post });
  } catch (error) {
    return res.status(500).json(error);
  }
};

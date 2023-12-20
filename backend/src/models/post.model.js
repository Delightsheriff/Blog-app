const { Schema, model } = require("mongoose");
const constants = require("../configs/constants");

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: constants.postCategories,
    },
    createdBy: {
      type: String,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = model("Post", BlogSchema);

module.exports = Blog;

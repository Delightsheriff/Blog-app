const createPost = require("../controllers/posts.controllers/create-post");
const deletePost = require("../controllers/posts.controllers/delete-post");
const getAllPosts = require("../controllers/posts.controllers/get-all-posts");
const getOnePost = require("../controllers/posts.controllers/get-one-post");
const updatePost = require("../controllers/posts.controllers/update-post");

const postsRouter = require("express").Router();

postsRouter.get("/", getAllPosts);
postsRouter.post("/", createPost);
postsRouter.delete("/post/:id", deletePost);
postsRouter.patch("/post/:id", updatePost);
postsRouter.get("/post/:id", getOnePost);

module.exports = postsRouter;

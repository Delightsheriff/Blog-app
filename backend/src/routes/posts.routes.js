const createPost = require("../controllers/posts.controller/create-post");
const deletePost = require("../controllers/posts.controller/delete-post");
const getAllPosts = require("../controllers/posts.controller/get-all-posts");
const getOnePost = require("../controllers/posts.controller/get-one-post");
const updatePost = require("../controllers/posts.controller/update-post");
const userAuth = require("../middleware/user-authentication");

const postsRouter = require("express").Router();

postsRouter.get("/", getAllPosts);
postsRouter.post("/", userAuth, createPost);
postsRouter.delete("/post/:id", deletePost);
postsRouter.patch("/post/:id", updatePost);
postsRouter.get("/post/:id", getOnePost);

module.exports = postsRouter;

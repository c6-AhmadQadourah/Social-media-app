const express = require("express");

const {getUserPosts,addPost,removePost,updatePost} =require("../controllers/posts")

const postsRouter = express.Router()

postsRouter.get("/" , getUserPosts)
postsRouter.put("/add/:userId" , addPost)
postsRouter.put("/remove/:userId" , removePost)
postsRouter.put("/update/:userId" , updatePost)



module.exports= postsRouter
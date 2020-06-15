
const express = require('express');
const { getPosts , createPost ,postsByUser,postById,isPoster,updatePost,deletePost} = require('../controllers/post');
const { requiresSignin} = require('../controllers/auth');
const { userById } = require('../controllers/user');
const {createPostValidator} = require('../validator/index')

const router =express.Router();

router.get("/posts", getPosts);
router.post("/post/new/:userId",requiresSignin,createPost,createPostValidator);
router.get("/posts/by/:userId",postsByUser)
router.put("/post/:postId", requiresSignin , isPoster ,updatePost)
router.delete("/post/:postId", requiresSignin , isPoster ,deletePost)

//any route  containing user id will use execute userbyid
router.param("userId",userById);
//any route  containing post id will use execute postbyid
router.param("postId", postById);

module.exports=router;

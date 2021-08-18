const express = require('express');
const {
  createPost, showPosts, showSinglePost, singlePost,
} = require('./postController');
const { showComments, createComment } = require('./commentsController');
const { showCategories } = require('./categoriesController');

const router = express.Router();

router.get('/posts', showPosts);
router.get('/posts/:postId', singlePost);
router.get('/posts/:postId/show', showSinglePost);
router.get('/comments/:postId', showComments);
router.post('/post/create', createPost);
router.post('/comments/:postId/create', createComment);
router.get('/categories', showCategories);
module.exports = router;

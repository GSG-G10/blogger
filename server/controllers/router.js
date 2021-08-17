const express = require('express');
const createPost = require('./postController');

const router = express.Router();

router.post('/post', createPost);

module.exports = router;

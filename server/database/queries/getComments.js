const connection = require('../config/connection');

const getComments = (id) => connection
  .query('select * from comments where post_id = $1', [id]);

module.exports = getComments;

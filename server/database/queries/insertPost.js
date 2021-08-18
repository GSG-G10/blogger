const connection = require('../config/connection');

const addPost = async ({
  username, title, body, createdAt, categories,
}) => {
  try {
    await connection.query('BEGIN');

    const insertPost = await connection
      .query('insert into posts (username,title, body, created_at) values($1,$2,$3,$4) returning id, title', [username, title, body, createdAt]);

    await insertPost().then((data) => {
      const postId = data.rows[0].id;
      categories.forEach((id) => {
        connection
          .query('insert into category_post (category_id, post_id) values($1,$2)', [id, postId]);
      });
    });

    await connection.query('COMMIT');
  } catch (e) {
    await connection.query('ROLLBACK');
    throw e;
  }
};

module.exports = addPost;

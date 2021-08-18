/* eslint-disable no-undef */
const dbBuild = require('../server/database/builds/build');
const connection = require('../server/database/config/connection');
const {
  getPosts, getComments, insertPost,
} = require('../server/database/queries');

beforeEach(() => dbBuild());

test('check get posts function', () => {
  getPosts()
    .then((data) => { expect(data.rows.length).toBe(2); });
});

test('check get comments function', () => {
  getComments(1)
    .then((data) => { expect(data.rowCount).toBe(3); });
});

test('check insert post function', () => {
  const testPost = {
    username: 'nizar', title: 'for test', body: 'nooooooooo', createdAt: '2021-08-18', categorytId: 1,
  };
  insertPost(testPost)
    .then((data) => {
      expect(data.rows[0].id).toBe(3);
      expect(data.rows[0].title).toBe(testPost.title);
    });
});

afterAll(() => connection.end());

require('env2')('.env');
const { Pool } = require('pg');

const { DB_URL, TEST_DB_URL, DEV_DB_URL } = process.env;

let dbUrl = '';
if (process.env.NODE_ENV === 'test') {
  dbUrl = TEST_DB_URL;
} else if (process.env.NODE_ENV === 'development') {
  dbUrl = DEV_DB_URL;
} else {
  dbUrl = DB_URL;
}
if (!dbUrl) throw new Error('sth wroing');

const options = {
  connectionString: DB_URL,
  ssl: false,
};

module.exports = new Pool(options);

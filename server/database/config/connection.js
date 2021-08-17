require('env2')('.env');
const { Pool } = require('pg');

const { DB_URL } = process.env;
if (!DB_URL) throw new Error('sth wroing');
const options = {
  connectionString: DB_URL,
  ssl: false,
};

module.exports = new Pool(options);

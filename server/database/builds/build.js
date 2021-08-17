const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('../config/connection');

const sql = readFileSync(join(__dirname, 'build.sql')).toString();

const dbBuild = () => connection
  .query(sql);

module.exports = dbBuild;

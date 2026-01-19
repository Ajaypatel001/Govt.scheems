const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

pool.getConnection((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
  } else {
    console.log('✅ MySQL connected');
  }
});

module.exports = pool.promise();

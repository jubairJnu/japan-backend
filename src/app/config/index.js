/* eslint-disable no-undef */
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(process.cwd(), ".env") });

module.exports = {
  port: process.env.PORT || 30001,
  database_url: process.env.DATABASE_URL,

  node_env: process.env.NODE_ENV,
};

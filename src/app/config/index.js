const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(process.cwd(), ".env") });

module.exports = {
  port: process.env.PORT || 30001,
  database_url: process.env.DATABASE_URL,
  jwt_access_token: process.env.JWT_ACCESS_TOKEN,
  jwt_refresh_token: process.env.JWT_REFRESH_TOKEN,

  node_env: process.env.NODE_ENV,
};

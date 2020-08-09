require("dotenv").config();
const db = require("monk")(process.env.DB);
const port = process.env.PORT;

module.exports = { db, port };

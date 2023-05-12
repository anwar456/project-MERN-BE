const mongoose = require("mongoose");
const { dbName, dbPort } = require("../app/config");

mongoose.connect(`mongodb://127.0.0.1:${dbPort}/${dbName}`);

const db = mongoose.connection;

db.once("open", () => console.log("Database connection..."));
// set debug=eduwork-server:* && nodemon start

module.exports = db;

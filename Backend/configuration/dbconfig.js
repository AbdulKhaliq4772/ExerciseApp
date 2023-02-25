const mongoose = require("mongoose");
const dbName = "exercise";
const URI = `mongodb://127.0.0.1:27017/${dbName}`;

const connection = () => {
  mongoose
    .connect(URI)
    .then(() => {
      console.log(`connected to database:${dbName} `);
    })
    .catch(() => {
      console.log("Failed to connect");
    });
};

module.exports.connection = connection;

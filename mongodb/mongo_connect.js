const mongoose = require('mongoose')

function ConnectToDb() {
  const url =
    "mongodb url";

  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to the database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. n${err}`);
    });
  
}

module.exports = ConnectToDb;
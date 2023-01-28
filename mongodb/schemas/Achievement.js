const mongoose = require("mongoose");
const { Schema } = mongoose;

const Achievement = new Schema({
    title: String,
    description: String,
    club_id : String,
    members: [
      {
        name: String,
        dept: String,
        usn: String,
        year: String,
      },
    ],
    date: { type: Date, default: Date.now },
  });
  

module.exports = Achievement;
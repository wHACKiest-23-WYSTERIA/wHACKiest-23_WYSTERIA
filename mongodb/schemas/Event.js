const mongoose = require("mongoose");
const { Schema } = mongoose;

const Event = new Schema({
    title: String,
    description: String,
    club_id : String,
    state: String,
    start_date: {
      type: Date,
      default: Date.now,
    },
    end_date: {
      type: Date,
      default: Date.now,
    },
    image1 : String,
  });

module.exports = Event;
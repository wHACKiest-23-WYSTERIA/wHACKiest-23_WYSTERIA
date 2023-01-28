const mongoose = require("mongoose");
const { Schema } = mongoose;

const Announcement = new Schema({
    title: {type:String,required:true},
    description: {type:String,required:true},
    club_id :{type:String,required:true},
    timestamp: {
        type: Date,
        default: Date.now,
      },
    doc_link : {type:String,required:false}
  });

module.exports = Announcement;
const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommitteMember = new Schema({
    name: String,
    designation: String,
    about: String,
    club_name : String,
    club_rank : String,
    profile_pic : String
  });

module.exports = CommitteMember;
  
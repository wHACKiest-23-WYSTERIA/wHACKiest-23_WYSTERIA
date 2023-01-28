const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
    name: {type :String, unique : true, required : true},
    usn: {type :String, required : true},
    uid :{type :String, required : true},
    age:{type :String, required : true},
    gender:{type :String, required : true},
    password: {type :String, required : true},
    email: {type :String, required : true},
    phone_number: {type :String, required : true},
    interests: {type :[String], required : true},
    hobbies: {type :[String], required : true},
    burning_desire: {type :String, required : true},
    passion: {type :String, required : true},
    tech_stack: {type :[String], required : true},
    programming_languages: {type :[String], required : true},
    profile_pic: {type :String, required : false}
  });

  module.exports = User;
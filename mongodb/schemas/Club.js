const mongoose = require("mongoose");
const { Schema } = mongoose;

const Club = new Schema({
    club_name: {type:String,required:true},
    description: {type:String,required:true},
    club_id :{type:String,required:true},
    club_logo : {type:String,required:false},
    keywords : {type:[String],required:true}
  });

module.exports = Club;
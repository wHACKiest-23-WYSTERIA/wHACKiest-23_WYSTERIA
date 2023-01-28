const mongoose = require("mongoose");
const { Schema } = mongoose;

const Message = new Schema({
    from_user_id: {type:String,required:true},
    to_user_id : {type:String,required:true},
    text: {type:String,required:true},
  });

module.exports = Message;
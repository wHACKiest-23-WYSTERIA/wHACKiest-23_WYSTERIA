const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");

const GetMessages = async (req,res) => {
  const _user_id = req.query.user_id;
  var newMessageSchema = schemas.Message;
  // compile schema to model
  var Message = mongoose.model("Message", newMessageSchema, "messages");
  Message.find({to_user_id : _user_id}, (err, messages) => {
    // users is an array which may be empty for no results
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    } else {
      // there are user(s)
      res.status(200).json({ "messages": messages });
    }
  });
};

module.exports = GetMessages;
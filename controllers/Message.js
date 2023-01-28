const mongoose = require('mongoose');
const schemas = require('../mongodb/schemas/schemas');

const SendMessage = async (req,res) =>
{
    var newMessageSchema = schemas.Message;
    // compile schema to model
    var NewMessage = mongoose.model('Message', newMessageSchema, 'messages');
    // a document instance
    var message = new NewMessage({
        from_user_id: req.body.from_user_id,
        to_user_id : req.body.to_user_id,
        text: req.body.text,
  });
  
    // save model to database
    message.save(function (err) {
      if (err) res.status(400).json({message: err.message});
      else {
        console.log(" saved to messages collection.");
        res.status(200).json({message: "Successfully sent new message"});
      }
    });
}

module.exports = SendMessage;
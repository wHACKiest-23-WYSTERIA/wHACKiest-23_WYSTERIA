const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");
const UploadDocument = require('../firebase/UploadDocument')

const NewEvent = async (req,res) => {
  const _club_id = req.query.club_id
  var newEventSchema = schemas.Event;
  // compile schema to model
  var NewEvent = mongoose.model("Event", newEventSchema, "events");
  var doc_url = await UploadDocument(req.file);

  // a document instance
  var event = new NewEvent({
    title: req.body.title,
    description: req.body.description,
    state: req.body.state,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    image1 : doc_url,
    club_id : _club_id
  });

  // save model to database
  event.save(function (err) {
    if (err) res.status(400).json({message: err.message});
    else {
      console.log(" saved to events collection.");
      res.status(200).json({message: "successfully registered new event"});
    }
  });
};

module.exports = NewEvent;
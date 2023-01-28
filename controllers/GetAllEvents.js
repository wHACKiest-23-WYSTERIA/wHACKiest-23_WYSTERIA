const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");

const GetAllEvents = async (req,res) => {
  const _club_id = req.query.club_id
  var newEventSchema = schemas.Event;
  // compile schema to model
  var Event = mongoose.model("Event", newEventSchema, "events");
  
    Event.find({club_id:_club_id}, (err, events) => {
    // users is an array which may be empty for no results
    if (err) {
      res.status(400).json({ message: error.message });
    } else {
      // there are user(s)
      res.status(200).json({ all_events: events });
    }
  });
};

module.exports = GetAllEvents;
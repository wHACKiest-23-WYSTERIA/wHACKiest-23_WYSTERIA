const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");

const GetCompletedEvents = async (req,res) => {
  const _club_id = req.query.club_id
  const _state = "completed";
  var newEventSchema = schemas.Event;
  // compile schema to model
  var Event = mongoose.model("Event", newEventSchema, "events");
  Event.find({state : _state,club_id:_club_id}, (err, events) => {
    // users is an array which may be empty for no results
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    } else {
      // there are user(s)
      res.status(200).json({ "completed_events": events });
    }
  });
};

module.exports = GetCompletedEvents;
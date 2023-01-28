const mongoose = require("mongoose");
const moment = require('moment');
const schemas = require("../mongodb/schemas/schemas");

const GetOngoingEvents = async (req, res) => {
  const _club_id = req.query.club_id
  const _state = "ongoing";
  var newEventSchema = schemas.Event;
  // compile schema to model
  var Event = mongoose.model("Event", newEventSchema, "events");
  Event.find({state : _state,club_id:_club_id}, (err, events) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    } else {
      // there are user(s)
      res.status(200).json({ "ongoing_events": events });
    }
  });
};

module.exports = GetOngoingEvents;
const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");

const GetAnnouncements = async (req,res) => {
  const _club_id = req.query.club_id
  var newAnnouncementSchema = schemas.Announcement;
  // compile schema to model
  var Announcement = mongoose.model("Announcement", newAnnouncementSchema, "announcements");
  
    Announcement.find({club_id:_club_id}, (err, announcements) => {
    // users is an array which may be empty for no results
    if (err) {
      res.status(400).json({ message: error.message });
    } else {
      // there are user(s)
      res.status(200).json({ all_announcements: announcements });
    }
  });
};

module.exports = GetAnnouncements;
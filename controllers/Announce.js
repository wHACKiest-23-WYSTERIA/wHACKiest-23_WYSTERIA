const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");
const UploadDocument = require('../firebase/UploadDocument');

const NewAnnouncement = async (req,res) => {
  const _club_id = req.query.club_id
  var newAnnouncementSchema = schemas.Announcement;
  // compile schema to model
  var NewAnnouncement = mongoose.model("Event", newAnnouncementSchema, "announcements");
  var doc_url = await UploadDocument(req.file);
  // a document instance
  var announcement = new NewAnnouncement({
    title: req.body.title,
    description: req.body.description,
    club_id :_club_id,
    timestamp: req.body.timestamp,
    doc_link : doc_url
  });

  // save model to database
  announcement.save(function (err) {
    if (err) {
      res.status(400).json({message: err.message});
    } else {
      console.log(" saved to announcements collection.");
      res.status(200).json({message: "successfully announced"});
    }
  });
};

module.exports = NewAnnouncement;
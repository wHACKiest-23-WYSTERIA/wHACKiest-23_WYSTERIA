const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");

const GetClub = async (req, res) => {
  const _club_name = req.body.club_name;
  var newClubSchema = schemas.Club;
  // compile schema to model
  var Club = mongoose.model("Club", newClubSchema, "clubs");
  Club.find({club_name : _club_name}, (err, club) => {
    // users is an array which may be empty for no results
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    } else {
      // there are user(s)
      res.status(200).json({ club: club });
    }
  });
};

module.exports = GetClub;
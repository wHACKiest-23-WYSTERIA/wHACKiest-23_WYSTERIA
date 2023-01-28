const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");

const GetAllClubs = async (res) => {
  var newClubSchema = schemas.Club;
  // compile schema to model
  var Club = mongoose.model("Club", newClubSchema, "clubs");
  
  Club.find({}, (err, clubs) => {
    // users is an array which may be empty for no results
    if (err) {
      res.status(400).json({ message: err.message });
    } else {
      // there are user(s)
      res.status(200).json({ all_clubs: clubs });
    }
  });
};

module.exports = GetAllClubs;

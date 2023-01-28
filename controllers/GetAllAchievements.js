const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");

const GetAllAchievements = async (req,res) => {
  const _club_id = req.query.club_id
  var newAchievementSchema = schemas.Achievement;
  // compile schema to model
  var Achievement = mongoose.model("Achievement", newAchievementSchema, "achievements");
  
  Achievement.find({club_id:_club_id}, (err, achievements) => {
    // users is an array which may be empty for no results
    if (err) {
      res.status(400).json({ message: error.message });
    } else {
      // there are user(s)
      res.status(200).json({ all_achievements: achievements });
    }
  });
};

module.exports = GetAllAchievements;
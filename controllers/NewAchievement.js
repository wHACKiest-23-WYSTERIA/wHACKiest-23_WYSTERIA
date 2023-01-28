const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");

const NewAchievement = async (req,res) => {
  var _club_id = req.query.club_id
  var newAchievementSchema = schemas.Achievement;
  // compile schema to model
  var NewAchievement = mongoose.model("Achievement", newAchievementSchema, "achievements");
  
  var achievement = new NewAchievement({
    title:req.body.title,
    description: req.body.description,
    members: req.body.members,
    date: req.body.date,
    club_id : _club_id,
  });

  // save model to database
  achievement.save(function (err) {
    if (err) res.status(400).json({message: error.message});
    else {
      console.log(" saved to achievements collection.");
      res.status(200).json({message: "successfully registered new achievement"});
    }
  });
};

module.exports = NewAchievement;
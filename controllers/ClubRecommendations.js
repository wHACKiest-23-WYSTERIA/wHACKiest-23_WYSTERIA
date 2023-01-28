const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");

const GetClubRecommendations = async (req,res) => {
  var newClubSchema = schemas.Club;
  // compile schema to model
  var Club = mongoose.model("Club", newClubSchema, "clubs");
  const user_preferences = req.body.keywords;
  
  Club.find({}, (err, clubs) => {
    // users is an array which may be empty for no results
    if (err) {
      res.status(400).json({ message: error.message });
    } else {
      var recommended_clubs = [];
      for(var i=0;i<user_preferences.length;i++){
        var user_preference = user_preferences[i];

        for(var j=0;j<clubs.length;j++){
            var club = clubs[j]
            if(club.keywords.includes(user_preference)){
                if(recommended_clubs.includes(club.club_name) == false){
                    recommended_clubs.push(club.club_name)
                }
            }
        }
      }
      res.status(200).json({ recommended_clubs: recommended_clubs });
    }
  });
};

module.exports = GetClubRecommendations;

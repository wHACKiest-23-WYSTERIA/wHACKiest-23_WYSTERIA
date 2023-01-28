const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");
const UploadClubLogo = require('../firebase/UploadClubLogo');
const uuid = require('uuid');

const NewClub = async (req,res) => {
  var uid = uuid.v4().toString();
  var newClubSchema = schemas.Club;
  // compile schema to model
  var NewClub = mongoose.model("Club", newClubSchema, "clubs");
  const club_logo_url = await UploadClubLogo(req.file);
  // a document instance
  var Club = new NewClub({
    club_name: req.body.club_name,
    description: req.body.description,
    club_id :uid,
    keywords : req.body.keywords,
    club_logo : club_logo_url,
  });

  // save model to database
  Club.save(function (err) {
    if (err) res.status(400).json({message: err.message});
    else {
      console.log(" saved to clubs collection.");
      res.status(200).json({message: "successfully registered new club"});
    }
  });
};

module.exports = NewClub;
const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");

const GetAllCommitteMembers = async (req,res) => {
  const _club_id = req.query.club_id
  var newCommitteMemberSchema = schemas.CommitteMember;
  // compile schema to model
  var CommitteMembers = mongoose.model("CommitteMember", newCommitteMemberSchema, "committe");
  
  CommitteMembers.find({club_id:_club_id}, (err, committe) => {
    // users is an array which may be empty for no results
    if (err) {
      res.status(400).json({ message: err.message });
    } else {
      // there are user(s)
      res.status(200).json({ all_committe: committe });
    }
  });
};


module.exports = GetAllCommitteMembers;

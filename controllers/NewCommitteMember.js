const mongoose = require('mongoose');
const schemas = require('../mongodb/schemas/schemas');
const UploadCommitteImage = require('../firebase/UploadCommittePic');


const NewCommitteMember = async (req,res) =>
{
    const _club_id = req.query.club_id
    var newCommitteMemberSchema = schemas.CommitteMember;
    // compile schema to model
    var NewCommitteMember = mongoose.model('CommitteMember', newCommitteMemberSchema, 'committe');
    
    const profile_pic_url = await UploadCommitteImage(req.file);
    // a document instance
    var committeMember = new NewCommitteMember({
        name: req.body.name,
        designation: req.body.designation,
        about: req.body.about,
        profile_pic : profile_pic_url,
        club_rank : req.body.club_rank,
        club_id : _club_id
      });
  
    // save model to database
    committeMember.save(function (err) {
      if (err) res.status(400).json({message: error.message});
      else {
        console.log(" saved to committe collection.");
        res.status(200).json({message: "successfully registered new committe member"});
      }
    });
}

module.exports = NewCommitteMember;
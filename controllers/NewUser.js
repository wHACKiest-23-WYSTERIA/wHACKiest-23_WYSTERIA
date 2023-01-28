const mongoose = require('mongoose');
const schemas = require('../mongodb/schemas/schemas');
const UploadImage = require('../firebase/UploadProfilePic');
const uuid = require('uuid')

const NewUser = async (req,res) =>
{
    var newUserSchema = schemas.User;
    // compile schema to model
    var NewUser = mongoose.model('User', newUserSchema, 'users');
    console.log("test")
    const profile_pic_url = await UploadImage(req.file);
    console.log(profile_pic_url)
    // a document instance
    var uid = uuid.v4().toString();
    console.log(uid)
    var user = new NewUser({
      name :req.body.name,
      usn :req.body.usn,
      uid : uid,
      age : req.body.age,
      gender : req.body.gender,
      password : req.body.password,
      email :req.body.email,
      phone_number :req.body.phone_number,
      interests :req.body.interests ,
      hobbies : req.body.hobbies,
      burning_desire :req.body.burning_desire,
      passion :req.body.passion,
      tech_stack : req.body.tech_stack,
      programming_languages : req.body.programming_languages,
      profile_pic : profile_pic_url,
  });
  
    // save model to database
    user.save(function (err) {
      if (err) {
        res.status(400).json({message: err.message});
      } else {
        console.log(" saved to users collection.");
        res.status(200).json({message: "Successfully registered!"});
      }
    });
}

module.exports = NewUser;
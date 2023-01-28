const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");

const UserLogin = async (req,res) => {
  const _email = req.body.email

  var newUserSchema = schemas.User;
  var User = mongoose.model("User", newUserSchema, "users");
  User.findOne({email : _email}, (err, user) => {
    // users is an array which may be empty for no results
    if (err) {
      res.status(400).json({ message: "User with the given email is not registered" });
      return;
    } else {
      // there are user(s)
      {
        res.status(200).json({ uid : user.uid });
      }
    }
  });
};

module.exports = UserLogin;
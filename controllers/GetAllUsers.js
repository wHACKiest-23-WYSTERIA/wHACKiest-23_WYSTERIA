const mongoose = require("mongoose");
const schemas = require("../mongodb/schemas/schemas");

const GetAllUsers = async (res) => {
  var newUserSchema = schemas.User;
  // compile schema to model
  var User = mongoose.model("User", newUserSchema, "users");
  
  User.find({}, (err, users) => {
    // users is an array which may be empty for no results
    if (err) {
      res.status(400).json({ message: error.message });
    } else {
      // there are user(s)
      res.status(200).json({ all_users: users });
    }
  });
};

module.exports = GetAllUsers;

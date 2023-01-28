const Event = require("./Event");
const User = require("./User");
const Achievement = require("./Achievement");
const CommitteMember = require("./CommitteMember");
const Club = require("../schemas/Club")
const Announcement = require("../schemas/Announcement")
const Message = require("../schemas/Message")

var Schemas = {
  Event: Event,
  User: User,
  Achievement: Achievement,
  CommitteMember: CommitteMember,
  Club : Club,
  Announcement : Announcement,
  Message : Message,
};
module.exports = Schemas;

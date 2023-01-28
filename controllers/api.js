const NewUser = require('../controllers/NewUser');
const NewEvent = require('../controllers/NewEvent');
const NewAchievement = require('../controllers/NewAchievement');
const GetAllUsers = require('../controllers/GetAllUsers');
const NewCommitteMember = require('../controllers/NewCommitteMember');
const GetAllCommitteMembers = require('../controllers/GetAllCommitte');
const GetAllAchievements = require('../controllers/GetAllAchievements');
const GetAllEvents = require('../controllers/GetAllEvents');
const GetOngoingEvents = require('../controllers/GetOngoingEvents');
const GetCompletedEvents = require('../controllers/GetCompletedEvents');
const GetUpcomingEvents = require('../controllers/GetUpcomingEvents');
const NewClub = require('../controllers/NewClub');
const UserLogin = require('../controllers/UserLogin');
const SendMessage = require('../controllers/Message');
const GetMessages = require('../controllers/GetMessages');
const GetClub = require('../controllers/GetClub');
const NewAnnouncement = require('../controllers/Announce');
const GetAnnouncements = require('../controllers/GetAnnouncements');
const GetAllClubs = require('../controllers/GetAllClubs');
const GetClubRecommendations = require('../controllers/ClubRecommendations')

var apis = {
    NewUser : NewUser,//
    NewEvent : NewEvent,//
    NewAchievement : NewAchievement,//
    GetAllUsers : GetAllUsers,//
    NewCommitteMember : NewCommitteMember,//
    GetAllCommitteMembers : GetAllCommitteMembers,//
    GetAllAchievements : GetAllAchievements,//
    GetAllEvents : GetAllEvents,//
    GetOngoingEvents : GetOngoingEvents,//
    GetCompletedEvents : GetCompletedEvents,//
    GetUpcomingEvents : GetUpcomingEvents,//
    NewClub : NewClub,//
    UserLogin : UserLogin,//
    SendMessage : SendMessage,//
    GetMessages : GetMessages,//
    GetClub : GetClub,//
    NewAnnouncement : NewAnnouncement,//
    GetAnnouncements : GetAnnouncements,//
    GetAllClubs : GetAllClubs,//
    GetClubRecommendations : GetClubRecommendations,
}

module.exports = apis;
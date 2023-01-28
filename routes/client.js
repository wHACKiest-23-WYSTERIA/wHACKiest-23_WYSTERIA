const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({storage : multer.memoryStorage()});

const apis = require("../controllers/api")


router.post('/registeruser',upload.single('file'), (req,res) => {apis.NewUser(req,res)});

router.post('/getclubrecommendations', (req,res) => {apis.GetClubRecommendations(req,res)});

router.get('/getallusers',(req,res) => {apis.GetAllUsers(res)});

router.post('/getuser',(req,res) => {apis.UserLogin(req, res)});

router.get('/getallcommitte',(req,res) => {apis.GetAllCommitteMembers( req,res)});

router.get('/getallevents',(req,res) => {apis.GetAllEvents(req, res)});

router.get('/getallachievements',(req,res) => {apis.GetAllAchievements(req, res)});

router.get('/getongoingevents',(req,res) => {apis.GetOngoingEvents(req, res)});

router.get('/getupcomingevents',(req,res) => {apis.GetUpcomingEvents(req, res)});

router.get('/getcompletedevents',(req,res) => {apis.GetCompletedEvents(req, res)});

router.post('/sendmessage',(req,res) => {apis.SendMessage(req, res)});

router.get('/getmessages',(req,res) => {apis.GetMessages(req, res)});

router.get('/getclub',(req,res) => {apis.GetClub(req, res)});

router.get('/getannouncements',(req,res) => {apis.GetAnnouncements(req, res)});

router.get('/getallclubs',(req,res) => {apis.GetAllClubs( res)});


module.exports = router;
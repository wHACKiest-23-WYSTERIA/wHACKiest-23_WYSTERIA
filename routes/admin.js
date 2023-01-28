const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({storage : multer.memoryStorage()});

const apis = require("../controllers/api")

router.post('/newevent',upload.single('file'),(req,res) => {apis.NewEvent(req,res)});

router.post('/newachievement',(req,res) => {apis.NewAchievement(req,res)});

router.post('/newcommittemember',upload.single('file'),(req,res) => {apis.NewCommitteMember(req, res)});

router.post('/newclub',upload.single('file'),(req,res) => {apis.NewClub(req, res)});

router.post('/newannouncement',upload.single('announce'),(req,res) => {apis.NewAnnouncement(req, res)});

module.exports = router
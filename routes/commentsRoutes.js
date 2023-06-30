const express = require('express');
const passport = require('passport');

const router = express.Router();

const commentsControllers = require('../controllers/commetsControllers');

router.post('/create', passport.checkAuthentication, commentsControllers.creatComment);

module.exports = router;
var express = require('express');
var router = express.Router();
const passport = require('passport');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const commentsCtrl = require('../controllers/comments')

router.post('/animals/:id/comments', ensureLoggedIn, commentsCtrl.create);

module.exports = router;
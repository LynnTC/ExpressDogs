var express = require('express');
var router = express.Router();
const animalsCtrl = require('../controllers/animals');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', animalsCtrl.index)
router.get('/new', ensureLoggedIn, animalsCtrl.new)
router.post('/', ensureLoggedIn, animalsCtrl.create)
router.get('/:id',animalsCtrl.show)

module.exports = router;
var express = require('express');
var router = express.Router();
const animalsCtrl = require('../controllers/animals');

router.get('/', animalsCtrl.index)
router.get('/new', animalsCtrl.new)

module.exports = router;
var express = require('express');
var router = express.Router();
const animalsCtrl = require('../controllers/animals');

router.get('/', animalsCtrl.index)

module.exports = router;
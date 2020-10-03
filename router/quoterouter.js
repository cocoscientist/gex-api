const express = require('express');
const control = require('../controllers/maincontrol');
const router = express.Router();

router.route('/quote').get(control.getQuotes);
router.route('/quote/random').get(control.getRandom);

module.exports = router;
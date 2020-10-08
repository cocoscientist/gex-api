const express = require('express');
const control = require('../controllers/maincontrol');
const router = express.Router();

router.route('/quote').get(control.getQuotes);
router.route('/random').get(control.getRandom);
router.route('/level').get(control.getRandomLevel);

module.exports = router;
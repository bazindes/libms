var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/booking', function(req, res, next) {
  res.sendFile('/views/rooms/group-booking.html', { root: '.' });
});

router.get('/', function(req, res, next) {
  res.sendFile('/views/rooms/group.html', { root: '.' });
});

module.exports = router;

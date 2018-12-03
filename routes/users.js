var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile('/views/students/profile.html', { root: '.' });
});

router.get('/edit', function(req, res, next) {
  res.sendFile('/views/students/edit_profile.html', { root: '.' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    teamspeakaddr: 'ts3server://timmangos.xyz'
  });
});
router.get('/about', function(req, res, next) {
  res.render('about-me', { title: 'Express' });
});

module.exports = router;

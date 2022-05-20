var express = require('express');
var router = express.Router();

/* GET mod info. */
router.get('/', function(req, res, next) {
  res.json({
    name: 'Test Mod',
    image: 'http://140.238.75.242:3003/images/testmodimage.png',
    id: req.query.id,
    description: 'This is a description',
    author: 0,
    versionbucket: 0
  });
});

module.exports = router;
module.exports.routePath = '/getmod'

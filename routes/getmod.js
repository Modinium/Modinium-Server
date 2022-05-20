var express = require('express');
var router = express.Router();

const db = {
  '0': {
    name: 'Mod 0',
    image: 'http://140.238.75.242:3003/images/testmodimage.png',
    id: 0,
    description: 'Mod 0\'s description',
    author: 0,
    versionbucket: 0
  },
  '1': {
    name: 'Mod 1',
    image: 'http://140.238.75.242:3003/images/testmodimage.png',
    id: 1,
    description: 'Mod 1\'s description',
    author: 0,
    versionbucket: 1
  },
  '2': {
    name: 'Mod 2',
    image: 'http://140.238.75.242:3003/images/testmodimage.png',
    id: 2,
    description: 'Mod 0\'s description',
    author: 1,
    versionbucket: 2
  },
  '3': {
    name: 'Mod 3',
    image: 'http://140.238.75.242:3003/images/testmodimage.png',
    id: 3,
    description: 'Mod 3\'s description',
    author: 1,
    versionbucket: 3
  }
}

/* GET mod info. */
router.get('/', function(req, res, next) {
  res.json(db[req.query.id]);
});

module.exports = router;
module.exports.routePath = '/getmod'

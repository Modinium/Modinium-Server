var express = require('express');
var router = express.Router();

const db = {
    '0': {
        modid: 0,
        versions:[
            {
                versionid: 0,
                fileid: 0,
                version: 1,
                filename: 'mod0_1.0.0.jar',
                loaders: [ 'forge', 'fabric' ],
                minecraftversion: '1.16.x',
                forgeversion: '36.1.25-36.1.35',
                fabricversion: '0.14.x'
            }
        ]
    },
    '1': {
        versions:[
            {
                id: 0,
                modid: 0
            }
        ]
    },
    '2': {
        versions:[
            {
                id: 0,
                modid: 0
            }
        ]
    },
    '3': {
        versions:[
            {
                id: 0,
                modid: 0
            }
        ]
    }
}

/* GET mod versions. */
router.get('/', function(req, res, next) {
  res.json(db[req.query.id]);
});

module.exports = router;
module.exports.routePath = '/getversions'
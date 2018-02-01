const express = require('express');
const router = express.Router();
const path = require('path');

const pubdir = path.join(__dirname, '..', '/public'); // pub is one directory above!
router.use(express.static(pubdir));

router.get('/', function(req, res) {
  res.sendFile(path.join(pubdir, 'index.html'));
});

// router.get('/other', function(req, res) {
//   res.sendFile(path.join(pubdir, 'otherPage.html')); // res.sendFile(path.join(__dirname, '../public','otherPage.html'));
// });

const { getBiggestPuddle } = require('../actions/logic');
router.post('/', (req, res) => {
  if (req.body.walls) {
    res.send(getBiggestPuddle(req.body.walls));
  } else {
    res.status(400);
  }
});


module.exports = router;

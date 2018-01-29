const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.status(200);
  res.end('../public/index.html');
})

router.post('/api', function (req, res) {
  res.send('About birds');
})


module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/location', (req, res) => {
  res.json({
    'date': 'October 27, 2018',
    'venue': 'Buttermilk Falls Inn',
    'city': 'Milton NY'
  });
});

module.exports = router;
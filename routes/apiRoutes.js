const express = require('express');

const router = express.Router();

router.get('/location', (req, res) => {
  res.json({
    'date': 'October 27, 2018',
    'venue': 'Buttermilk Falls Inn',
    'city': 'Milton NY'
  });
});

router.get('/story', (req, res) => {
  res.json({
    'story': 'We met on December 30, 2012 at one of my brother\'s famous New Year\'s Eve Eve parties. We got drunk, talked about Chuck Palahniuk and at 4am Rob asked me for my number after I asked him if he was ever going to ask me for my number. The next day I was at the worst New Year\'s Eve Party in the whole wide world so I texted Rob at 2am to see if he was having more fun than I was. He was so I schlepped from Bay Ridge to Midtown, we met up and hung out all night and the whole next day. From there, we were pretty much inseparable. When we first met, we were both working in tech a block away from each other. Then I decided to stop selling my soul and become a children\'s librarian. Rob still sells his soul but he likes it. I\'m from Brooklyn and he\'s from Jersey but we try not to judge him too much for it.'
  });
});

module.exports = router;
const settings = require('../config/settings');
const mailgun = require('mailgun-js')({
  apiKey: settings.mailgun, 
  domain: settings.domain
});

const express = require('express');

const router = express.Router();

router.get('/location', (req, res) => {
  res.json({
    'title': 'Save the Date',
    'who': 'Melissa & Robert',
    'date': 'October 27, 2018',
    'venue': 'Buttermilk Falls Inn',
    'city': 'Milton NY'
  });
});

router.get('/accommodations', (req, res) => {
  res.json({
    'holidayInn': { 
      'title': 'Holiday Inn Express',
      'description': 'A block of rooms have been reserved at a discounted rate. Please call and mention the Kozser-Skwiat Wedding Room Block. October 26 to October 28th',
      'address': '2750 South Rd',
      'location' : 'Poughkeepsie, New York 12601 (7.5 miles from Buttermilk)',
      'number': '845-473-1151',
      'url': 'http://www.hiexpress.com/poughkeepsie',
    },
    'buttermilkFalls': {
      'title': 'Buttermilk Falls Inn',
      'description': 'If you want to stay at Buttermilk Falls Inn, there are several rooms and houses on the 75 acre estate available for your use during the weekend. Please take a look and book your room or house at the Inn.',
      'address': '220 North Road',
      'location': 'Milton, New York 12547',
      'number': '845-795-310',
      'url': 'https://www.buttermilkfallsinn.com/'
    }
  });
});

router.get('/story', (req, res) => {
  res.json({
    'title': 'Our Story',
    'intro': 'Melissa and Rob met on December 30, 2012 at one of Tom\'s [Melissa\'s Brother] famous New Year\'s Eve Eve parties. Melissa and Rob got drunk, talked about Chuck Palahniuk and at 4am Rob asked Melissa for her number after Melissa asked Rob if he was ever going to ask her for her number. The next day Melissa was at a terrible New Year\'s Eve Party, so she texted Rob at 2am to see if he was having more fun than she was. He was, so Melissa schlepped from Bay Ridge to Midtown, where they met up and hung out all night and the whole next day. From there, they were pretty much inseparable. They merged cats (aka moved in together) two years after meeting and also adopted an exceedingly grouchy senior dog named Lilo. Rob proposed spontaneously in Chicago with Melissa\'s great-grandmother\'s ring. After being surprised for a good 20 minutes and forgetting to actually say yes, Melissa did in fact say yes, which brings us to this very moment in which you are reading this story. The story will continue on October 27, 2018... ',
    'wedding': 'We are so excited to have you at our wedding. Get ready to eat, drink, and be merry with the happy couple! #KoszerSkwiatTieIt'
  });
});

router.post('/rsvp', async (req, res) => {
  //Check for errors first
  const { name, email, rsvp, dinner } = req.body;

  const message = {
    "from": "rsvp@koszerskwiattieit.com",
    "to": "koszerskwiattieit@gmail.com",
    "subject": "RSVP - October 27th 2018",
    "html": `<html>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email Address:</b> ${email}</p>
      <p><b>Attending:</b> ${rsvp}</p>
      <p><b>Dinner Choice:</b> ${dinner}</p>
    </html>`,
  }

  try {
    await mailgun.messages().send(message);
  } catch (err) {
    res.status(422).send(err);
    await res.redirect('/error');
  }
});

module.exports = router;
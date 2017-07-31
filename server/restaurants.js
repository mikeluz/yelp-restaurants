const axios = require('axios');
const auth = require('../yelpconfig.js');

let config = {'Authorization': `${auth["token_type"]} ${auth["access_token"]}`};

module.exports = require('express').Router()
  .get('/coords/:lat/:long', (req, res, next) => {
    axios.get(`https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${req.params.lat}&longitude=${req.params.long}`, {headers: config})
      .then(response => {
        console.log("SUCCESS");
        res.json(response.data);
      })
      .catch(err => console.log(err));
   })
  .get('/:city/:offset', (req, res, next) => {
    axios.get(`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${req.params.city}&offset=${req.params.offset}`, {headers: config})
      .then(response => {
        console.log("SUCCESS");
        res.json(response.data);
      })
      .catch(err => console.log(err));
  });
const axios = require('axios');
const auth = require('../yelpconfig.js');

let config = {'Authorization': `${auth["token_type"]} ${auth["access_token"]}`};

module.exports = require('express').Router()
  .get('/:city', (req, res, next) => {
    axios.get(`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${req.params.city}`, {headers: config})
      .then(response => {
        console.log("SUCCESS");
        res.json(response.data);
      })
      .catch(err => console.log(err));
  });
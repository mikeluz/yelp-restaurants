# yelp-restaurants

Live deploy:
https://yelp-restaurants.herokuapp.com/

Pings Yelp API for restaurants by city/zip, then presents them to user. Sortable by price and rating. 

Also features "Find Me" button -- this button gets the users's coordinates from the browser and pings the Yelp API using those coordinates instead.

Directions for local install:

1. Fork or clone this repo.
2. Navigate into the downloaded folder via CLI.
3. Run npm install to install dependencies.
4. Once all dependencies are installed, run npm run build-watch.
5. Clone tab -- in this cloned tab, run "npm start".
6. Create "yelpconfig.js" file in directory root. See below for directions on how to populate this file.
6. Once Yelp API credentials are in place, navigate to "localhost:3001" in browser.
7. Get hungry!

# yelpconfig.js

To use the Yelp API, you will need to register the app:
https://www.yelp.com/developers/v3/manage_app

Once you have a client ID and client secret, you will need to ping Yelp for an access token with a POST request containing these two pieces of information:
https://www.yelp.com/developers/documentation/v3/authentication

Once you have the response object, you will need to place this object in the yelpfonfig.js file in the following format:
const auth = RESPONSE_OBJECT;

module.exports = auth;

NOTE: RESPONSE_OBJECT will look something like:
```const auth = {
  "access_token": YOUR_ACCESS_TOKEN,
  "expires_in": 15551999,
  "token_type": "Bearer"
};```


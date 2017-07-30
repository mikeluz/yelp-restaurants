const api = module.exports = require('express').Router();

api
  .use('/restaurants',require('./restaurants'))
	// Send 404 if no routes matched.
	.use((req, res) => res.status(404).end());
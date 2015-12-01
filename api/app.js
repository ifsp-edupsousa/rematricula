var environment = process.env.NODE_ENV;
var config = require('./config/env/' + environment);
var app = require('./config/express')(config);

module.exports = app;
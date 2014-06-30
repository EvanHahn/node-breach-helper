var express = require('express');
var breachHelper = require('..');

// Note: in your apps, the above line will be:
// var breachHelper = require('breach-helper');

var app = express();

app.locals.breachHelper = breachHelper;

app.set('port', process.env.PORT || 1337);
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('myview');
});

app.listen(app.get('port'), function() {
  console.log('App listening on ' + app.get('port'));
});

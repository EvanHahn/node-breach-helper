var express = require('express');
var breachHelper = require('..');

// Note: in your apps, the above line will be:
// var breachHelper = require('breach-helper');

var app = express();

app.locals.breachHelper = breachHelper;

app.set('port', process.env.PORT || 1337);

app.get('/jade', function(req, res) {
  res.render('jade_view.jade');
});

app.get('/ejs', function(req, res) {
  res.render('ejs_view.ejs');
});

app.use(function(req, res) {
  res.redirect('/ejs');
});

app.listen(app.get('port'), function() {
  console.log('App listening on ' + app.get('port'));
});

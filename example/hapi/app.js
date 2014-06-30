var Hapi = require('hapi');
var breachHelper = require('../..');
// Note: in your apps, the above line will be:
// var breachHelper = require('breach-helper');

var server = new Hapi.Server(1337, 'localhost', {
  views: {
    engines: {
      jade: require('jade')
    },
    path: './views'
  }
});

server.route({
  method: 'GET', path: '/',
  handler: function(req, reply) {
    reply.view('index', {
      breachHelper: breachHelper
    });
  }
});

server.start(function() {
  console.log('Hapi server started @', server.info.uri);
});

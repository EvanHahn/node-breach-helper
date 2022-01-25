# BREACH helper for Node

[![npm version](https://badge.fury.io/js/breach-helper.svg)](http://badge.fury.io/js/breach-helper)
[![build status](https://travis-ci.org/EvanHahn/node-breach-helper.svg?branch=master)](https://travis-ci.org/EvanHahn/node-breach-helper)

One way to protect yourself against the [BREACH attack](http://breachattack.com/) is to add random-length comments to your HTML. This little module helps with that!

It's inspired by [breach-mitigation-rails](https://github.com/meldium/breach-mitigation-rails).

## Usage with Express

After installing with `npm install breach-helper`, add this to your app code:

```javascript
app.locals.breachHelper = require("breach-helper");
```

Now, the function `breachHelper` will be available to all your views.

To use it with Jade, put this somewhere in your HTML:

```jade
!= breachHelper()
```

To use it with EJS, put this somewhere in your HTML:

```ejs
<%- breachHelper() %>
```

## Usage with Hapi

After installing with `npm install breach-helper`, add the `breachHelper` property when you render things:

```javascript
var breachHelper = require("breach-helper");

// ...

server.route({
  method: "GET",
  path: "/",
  handler: function (req, reply) {
    reply.view("index", {
      breachHelper: breachHelper,
    });
  },
});
```

To use it with Jade, put this somewhere in your HTML:

```jade
!= breachHelper()
```

To use it with EJS, put this somewhere in your HTML:

```ejs
<%- breachHelper() %>
```

## Usage elsewhere

This module just exports one function. That function returns a string that's a variable-length HTML comment. If you want to use this in another context, you can use that function!

```javascript
var breachHelper = require("breach-helper");
breachHelper(); // "<!--ABCD420...-->"
breachHelper(); // "<!--69XYZZY...-->"
```

Enjoy.

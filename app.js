var express = require('express');
var app = express();

var authMiddleware = require('./middlaware/auth');

app.use(authMiddleware);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
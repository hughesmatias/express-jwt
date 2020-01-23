var express = require('express');
var app = express();

const authMiddleware = require('./middlaware/auth');
const logMiddleware = require('./middlaware/log');

const authRouter = require('./auth');

app.use(authMiddleware);
app.use(logMiddleware);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/auth',authRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
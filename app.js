var express = require('express');
var app = express();

const authMiddleware = require('./middlaware/auth');
const logMiddleware = require('./middlaware/log');

const authRouter = require('./auth');
const userRouter = require('./user');

app.use(logMiddleware);
app.use(authMiddleware);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/auth',authRouter);

app.use('/user', userRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
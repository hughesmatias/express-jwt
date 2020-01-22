const log = (req, res, next) => {
  console.log(req.originalUrl);
  console.log('Time:', Date.now());
  next();
}

module.exports = log;
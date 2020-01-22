const auth = (req, res, next) => {
  console.log('Auth ok');
  next();
}

module.exports = auth;
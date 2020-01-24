const urlsWithoutAuthentication = ['/auth','/auth/', '/auth/verify', '/'];

const auth = (req, res, next) => {
  if (!urlsWithoutAuthentication.find(elem => elem == req.originalUrl)) {
    if (req.header('Authorization')) {
      // verify token
      next();
    } else {
      res.end('Falta el token');
    }
  } else {
    next();
  }
}

module.exports = auth;
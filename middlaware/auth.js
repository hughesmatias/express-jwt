const urlsWithoutAuthentication = ['/auth','/auth/', '/auth/verify', '/'];
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  if (!urlsWithoutAuthentication.find(elem => elem == req.originalUrl)) {
    if (req.header('Authorization')) {
      const token = req.header('Authorization').split(" ")
      if (token[0] == "Bearer") {
        jwt.verify(token[1], "secret", (err, decoded) => {
          // verify token
          console.log(decoded, "decoded");
          next();
        })
      } else {
        res.end("Token erroneo")
      }
    } else {
      res.end('Falta token');
    }
  } else {
    next();
  }
}

module.exports = auth;
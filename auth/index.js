const jwt = require('jsonwebtoken');
const express = require('express');
var router = express.Router();


router.use('/', (req, res, next) => {
  signIn("username").then(token => {
    res.end(token);
  }).catch((err) => {
    res.json({
      error: "imposible obtener token",
      err
    })
  })
})

const signIn = username =>
  new Promise((resolve, reject) => {
    jwt.sign({ username }, "secret", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data)
    });
  })

module.exports = router;
